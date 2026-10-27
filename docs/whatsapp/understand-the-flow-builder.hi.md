---
title: फ़्लो बिल्डर को समझें
description: फ़्लो बिल्डर की पूरी जानकारी: फ़्लो बनाएँ, Step पैनल से स्टेप जोड़ें, व्यू बदलें, टेस्ट करें, सेव करें, पब्लिश करें और फ़्लो चालू करें।
---

# फ़्लो बिल्डर को समझें { #understand-the-flow-builder }

फ़्लो बिल्डर में आप अपना चैटबॉट बनाते हैं। आप कैनवास पर स्टेप रखते हैं, हर स्टेप भरते हैं, फ़्लो टेस्ट करते हैं और फिर पब्लिश करते हैं। इस पेज पर स्क्रीन का हर हिस्सा और स्टेप्स का हर ग्रुप बताया गया है, ताकि आपको हर ब्लॉक आसानी से मिल जाए।

## शुरू करने से पहले { #before-you-start }

- आपका WhatsApp नंबर Ohanvi से कनेक्ट होना चाहिए। देखें [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- **WhatsApp** पैनल में आपको **Flows** दिखना चाहिए। न दिखे तो अपने एडमिन से पूछें।
- आपको पता होना चाहिए कि बॉट से क्या काम कराना है। पहला फ़्लो बनाने के लिए [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md) देखें।

## बिल्डर के हिस्से { #the-parts-of-the-builder }

| हिस्सा | कहाँ है | क्या करता है |
| --- | --- | --- |
| **Back to flows** तीर | ऊपर बाएँ | फ़्लो की लिस्ट पर वापस ले जाता है। |
| फ़्लो का नाम | ऊपर बाएँ, तीर के पास | नाम बदलने के लिए उस पर क्लिक करें। |
| वर्शन चिप | नाम के पास | वर्शन नंबर के साथ **DRAFT**, **LIVE**, **PAUSED** या **VIEWING** दिखता है, जैसे **v1 · LIVE**। |
| **Undo** और **Redo** | ऊपर का टूलबार | अपने बदलावों में एक कदम पीछे या आगे जाएँ। |
| **Test** | ऊपर का टूलबार | **Test** टैब खोलता है, ताकि आप फ़्लो को आज़मा सकें। |
| **Save** | ऊपर का टूलबार | आपके बदलाव ड्राफ़्ट के रूप में सेव करता है। सेव करने तक **Unsaved changes** दिखता रहता है। |
| **Publish** | पेज के ऊपर दाईं ओर | सेव किए हुए फ़्लो को लाइव करता है। |
| **Active** स्विच | ऊपर का टूलबार | पब्लिश किए हुए फ़्लो को चालू या बंद करता है। इस पर **Active** या **Inactive** लिखा होता है। |
| **Compact** और **Preview** | कैनवास के ऊपर | एक ही फ़्लो को देखने के दो तरीके। |
| कैनवास | बीच में | बिंदुओं वाली जगह, जहाँ कार्ड और तार रहते हैं। |
| **Step** पैनल | दाईं ओर | चुने हुए स्टेप की सेटिंग्स दिखाता है। कुछ चुना न हो, तो जोड़ने वाले स्टेप्स की लिस्ट दिखाता है। |
| **Logs** और **Run test** | नीचे की पट्टी | टेस्ट रन में क्या हुआ, यह दिखाते हैं। |
| ज़ूम बटन और मिनीमैप | कैनवास के कोने | ज़ूम इन, ज़ूम आउट और फ़्लो को स्क्रीन में फ़िट करने के लिए। बड़े फ़्लो में एक जगह से दूसरी जगह जाने के लिए भी। |

## नया फ़्लो बनाएँ { #create-a-new-flow }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Flows** चुनें।
2. **New flow** पर क्लिक करें। बिल्डर खाली कैनवास के साथ खुलता है। **Save** पर क्लिक करने तक कुछ सेव नहीं होता।
3. तैयार फ़्लो से शुरू करना हो, तो **New flow** के पास वाले तीर पर क्लिक करें और **Start from library** चुनें।
4. कैनवास पर **How does this flow start?** पढ़ें और शुरुआत चुनें। देखें [चुनें कि फ़्लो कैसे शुरू हो](chatbot-flow-start-and-triggers.md)।

## स्टेप्स { #steps }

### स्टेप जोड़ें { #add-a-step }

1. आख़िरी स्टेप के अंत में **+** पर क्लिक करें। **Add a step after** मेन्यू खुलेगा।
2. स्टेप को उसके नाम या काम से ढूँढने के लिए **Search** में टाइप करें।
3. **COMMON** में से कोई स्टेप चुनें। सारे ग्रुप देखने के लिए **All steps** पर क्लिक करें।
4. आप दाईं ओर के **Step** पैनल से भी जोड़ सकते हैं। किसी टाइल पर क्लिक करें, या उसे कैनवास पर खींचकर छोड़ दें।
5. एक और तरीका है। **Describe the flow you want…** में अपनी बात लिखें और **Generate with AI** पर क्लिक करें। AI आपके शब्दों से नया फ़्लो बना देता है।

!!! warning "Generate with AI कैनवास को बदल देता है"
    कैनवास पर पहले से स्टेप हों, तो बिल्डर पूछता है **Replace the steps on the canvas?** कैंसिल करने के लिए **Keep what I have** पर क्लिक करें।

कैनवास पर राइट-क्लिक मेन्यू भी काम आता है। उसमें ये हैं: **Add a step here**, **Select all steps**, **Fit to screen** और **See the whole flow**।

### एक स्टेप पर काम करें { #work-with-one-step }

1. कैनवास पर किसी स्टेप पर क्लिक करें। उसकी सेटिंग्स **Step** पैनल के **Setup** टैब में खुलेंगी।
2. और विकल्प देखने के लिए स्टेप पर राइट-क्लिक करें: **Edit in panel**, **Rename**, **Add a step after**, **Add content block**, **Duplicate**, **Disconnect from path** और **Delete**।
3. उसी कार्ड में एक और ब्लॉक जोड़ने के लिए कार्ड के नीचे **+ Add Content** बटन पर क्लिक करें।
4. कई स्टेप चुनें और उन्हें एक साथ **Duplicate** या **Delete** करें।
5. कार्ड को समेटकर छोटा डिब्बा बनाने के लिए **Collapse card** पर क्लिक करें। उसे दोबारा खोलने के लिए **Expand card** पर क्लिक करें।
6. ब्लॉक के दाएँ किनारे पर **Add a block** (प्लस) पर क्लिक करें, तो कार्ड में एक और ब्लॉक जुड़ जाएगा। सिर्फ़ वही ब्लॉक हटाना हो, तो **Delete this block** (डस्टबिन) पर क्लिक करें।
7. ब्रांच पर **Add a step on this branch** पर क्लिक करें। स्टेप सिर्फ़ उसी रास्ते में जुड़ेगा।

### तारों से स्टेप जोड़ें { #join-steps-with-wires }

1. किसी स्टेप के दाएँ किनारे के बिंदु से अगले स्टेप तक खींचें।
2. किसी तार पर राइट-क्लिक करें और **Insert a step in between**, **Disconnect this step** या **Delete this connection** चुनें।
3. बटन जैसे ब्लॉक में कई विकल्प होते हैं। हर विकल्प के लिए एक बिंदु होता है। हर विकल्प को उस स्टेप से जोड़ें जो उसके बाद चलना चाहिए।

### व्यू बदलें { #change-the-view }

1. हर कार्ड को छोटे डिब्बे में देखने के लिए **Compact** पर क्लिक करें। बड़े फ़्लो में यही ठीक रहता है।
2. हर कार्ड को खुला देखने के लिए **Preview** पर क्लिक करें। ग्राहक को वह ऐसा ही दिखेगा।
3. कैनवास को ज़्यादा जगह देने के लिए **Hide step panel** (टूलटिप **Hide the panel**) पर क्लिक करें। पैनल वापस लाने के लिए **Show step panel** पर क्लिक करें।
4. फ़्लो की लिस्ट पर लौटने के लिए ऊपर बाईं ओर के बैक तीर (टूलटिप **Back to flows**) पर क्लिक करें।
5. कई स्टेप चुने हों, तो उन्हें छोड़ने के लिए राइट-क्लिक मेन्यू में **Clear selection** पर क्लिक करें। **Step** पैनल में एक स्टेप का चुनाव हटाने के लिए **Clear selected step** पर क्लिक करें।

### टेस्ट करें, सेव करें और पब्लिश करें { #test-save-and-publish }

1. **Test** पर क्लिक करें और [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md) में बताए तरीके से टेस्ट करें।
2. **Save** पर क्लिक करें। चिप पर **DRAFT** लिखा आएगा।
3. **Publish** पर क्लिक करें। **Published and live — new runs use this version.** मैसेज दिखेगा।
4. फ़्लो बंद हो, तो मैसेज होगा **Published. This flow is turned off, so it will not run yet.** तब **Active** को चालू करें।
5. बाद में फ़्लो को रोकना हो, तो **Active** को बंद करें।

!!! note "पब्लिश किए हुए वर्शन कभी नहीं बदलते"
    लाइव फ़्लो में बदलाव करना हो, तो उसे एडिट करें और दोबारा पब्लिश करें। पुराने वर्शन पर जाने के लिए **Versions** बटन खोलें। देखें [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md)।

### AI पैनल से फ़्लो बनाएँ और बदलें { #build-and-change-a-flow-with-the-ai-panel }

1. **Build with AI** पर क्लिक करें। बाईं ओर **Build with AI** नाम का पैनल खुलेगा। उसमें लिखा आएगा **Describe the flow you want and I will build it out.** फ़्लो का नाम हो, तो लिखा आएगा **You are working on "name". Describe the flow you want and I will build it out.**
2. **Ask anything…** में लिखें कि आपको क्या चाहिए। या माइक्रोफ़ोन (टूलटिप **Describe the flow out loud**) पर क्लिक करके बोलें। आपके बोले शब्द पहले से लिखे टेक्स्ट में जुड़ जाते हैं।
3. **Enter** दबाएँ, या भेजने वाले बटन (टूलटिप **Send · Enter**) पर क्लिक करें।
4. थोड़ा इंतज़ार करें। पैनल में पहले **Thinking…** और फिर **Writing the flow…** दिखेगा।
5. कैनवास पर पहले से स्टेप हों, तो एक विंडो पूछेगी **Replace the steps on the canvas?** वह बताती है कि नया फ़्लो पुराने स्टेप्स की जगह ले लेगा। जब तक आप सेव नहीं करते, कुछ सेव नहीं होता। इसलिए आपका आख़िरी सेव किया हुआ वर्शन जैसा है वैसा रहता है। आगे बढ़ने के लिए **Replace and build** पर क्लिक करें। कैंसिल करने के लिए **Keep what I have** पर क्लिक करें। तब पैनल कहेगा **Kept what you have. Say the word when you want it replaced.**
6. काम पूरा होने पर पैनल कहेगा **Named it "…"** और **It is on the canvas. Look it over and save it when it reads right — or tell me what to change.**
7. नतीजे में कुछ बदलना हो, तो लिखकर भेजें कि क्या बदलना है। पैनल कहेगा **Changed. Look it over and save when it reads right — or tell me what else to adjust.**
8. AI न कर पाए, तो पैनल वजह के साथ **I could not draft that** या **I could not change that** लिखेगा। अपनी बात दोबारा लिखकर भेजें।
9. **Look the flow over before you save it.** वाली याद दिलाने वाली लाइन पढ़ें। फिर **Save** पर क्लिक करें।
10. काम हो जाए, तो पैनल के ऊपर वाले x यानी **Close the AI builder** पर क्लिक करें।

### Step पैनल के टैब { #read-the-tabs-of-the-step-panel }

**Step** पैनल में तीन टैब हैं: **Setup**, **Test** और **Output**।

1. किसी स्टेप पर क्लिक करें, फिर **Setup** पर क्लिक करें। यहाँ छोटी जानकारी दिखती है: **Step name**। शुरुआती स्टेप के लिए **Starts on**, **Match** और **Test number** भी दिखते हैं। कार्ड हो, तो **Selected block** भी दिखता है। कार्ड न हो, तो **Does** और **Lane** दिखते हैं।
2. फ़्लो आज़माने के लिए **Test** पर क्लिक करें। देखें [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md)। **Would this run?** के नीचे आप कोई कीवर्ड चेक कर सकते हैं, और कोई मैसेज भेजना नहीं पड़ता।
3. पिछले टेस्ट रन में किसी स्टेप का नतीजा क्या रहा, यह देखने के लिए **Output** पर क्लिक करें। कोई स्टेप चुना न हो, तो पैनल में लिखा होता है **Select a step on the canvas to inspect it. Edit message content directly inside its card.**
4. कुछ भी चुना न हो, तो ब्लॉक की लिस्ट खोलने के लिए **+ Add a step** पर क्लिक करें।
5. **Test** टैब में **Run published** पर क्लिक करें, तो लाइव वर्शन एक बार चलता है। यह असली डेटा के साथ चलता है और इसका असली असर होता है। स्क्रीन पर खुला ड्राफ़्ट कभी नहीं चलता।

### कुछ स्टेप अधूरे हों, तब पब्लिश करें { #publish-when-some-steps-are-not-finished }

1. **Publish** पर क्लिक करें।
2. कुछ स्टेप अधूरे हों, तो एक विंडो खुलेगी। उसका टाइटल होगा **One step will not be published** या **N steps will not be published**। वह ज़्यादा से ज़्यादा 6 समस्याएँ गिनाती है और बताती है कि और कितनी बाकी हैं।
3. यह लाइन पढ़ें: **The rest of the flow publishes as it is. Fix these to include them:**।
4. वापस जाकर स्टेप पूरे करने के लिए **Fix the steps** पर क्लिक करें। यही बेहतर तरीका है।
5. या सिर्फ़ पूरे हो चुके स्टेप पब्लिश करने के लिए **Publish without them** पर क्लिक करें।

### अपना काम खोए बिना पुराना वर्शन खोलें { #open-an-older-version-without-losing-your-work }

1. बिल्डर के ऊपर **Versions** पर क्लिक करें। लिस्ट में हर वर्शन दिखता है, और यह भी कि कौन-सा लाइव है।
2. किसी वर्शन को देखने के लिए उस पर क्लिक करें। आपके बदलाव सेव न हों, तो एक विंडो पूछेगी **Save before switching?** उसमें लिखा होगा **This flow has changes you have not saved. Opening another version leaves them behind.** वहीं रुकना हो, तो **Keep editing** पर क्लिक करें। बदलाव छोड़ने हों, तो **Discard and switch** पर क्लिक करें।
3. पब्लिश किया हुआ वर्शन बदला नहीं जा सकता। बैनर में लिखा होता है **Showing vN. It is published, so it cannot be changed — use "Edit as new version" to carry on from it.**
4. किसी वर्शन पर **More** (तीन बिंदु) पर क्लिक करें और **Edit as new version** चुनें। आपके पास पहले से बिना पब्लिश किया ड्राफ़्ट हो, तो एक विंडो पूछेगी **Replace the draft you have open?** वह बताती है कि आपका ड्राफ़्ट डिलीट हो जाएगा और उसकी जगह उस वर्शन की कॉपी आ जाएगी। जो वर्शन पहले से लाइव है, उसमें कुछ नहीं बदलता। **Replace it** या **Keep my draft** पर क्लिक करें।
5. किसी पुराने वर्शन को लाइव बनाना हो, तो उस पर **More** पर क्लिक करें और **Make this live** चुनें। जो वर्शन पहले से लाइव है, उस पर यह विकल्प नहीं दिखता।

### Logs पैनल को पढ़ें { #read-the-logs-panel }

1. पैनल खोलने के लिए बिल्डर के नीचे **Logs** पर क्लिक करें।
2. **Run test** पर क्लिक करें। फ़्लो में कोई स्टेप न हो, तो मैसेज आता है **Add a step before testing.**
3. चैटबॉट फ़्लो में **Test on your phone** विंडो खुलती है। उसमें लिखा होता है **Message this flow from your own WhatsApp and watch the canvas follow you. Nothing is published — the flow answers this number and nobody else.** **Your WhatsApp number** में अपना नंबर लिखें। बॉक्स में `91XXXXXXXXXX` दिखता है। **Start** पर क्लिक करें। बंद करना हो, तो **Cancel** पर क्लिक करें।
4. टेस्ट चलने के दौरान बटन पर **Testing…** लिखा रहता है। टेस्ट रोकने के लिए **Stop** पर क्लिक करें।
5. चिप देखें। उस पर **Running…**, **Success**, **Failed**, **Stopped** या **Finished** लिखा होता है। साथ में लगा समय भी होता है, जैसे **Success in 1.2s**।
6. किसी स्टेप का नतीजा देखने के लिए लिस्ट में उस पर क्लिक करें। उस जगह लिखा होता है **Pick a step to see what it returned.** नतीजा **STEP RESULT** के नीचे दिखता है।
7. रन को दोबारा लोड करने के लिए **Refresh** पर क्लिक करें। पैनल खाली करने के लिए **Clear this run** पर क्लिक करें।
8. पहला रन चलाने से पहले पैनल में लिखा होता है **Nothing to display yet. Run a test to see what each step does.** इंतज़ार के समय लिखा होता है **Waiting for the first step…** किसी रन में कुछ दर्ज न हुआ हो, तो लिखा होता है **No steps were recorded for this run.**

## Step पैनल के सभी ग्रुप { #every-group-in-the-step-panel }

**Step** पैनल ब्लॉक को इस हिसाब से ग्रुप में बाँटता है कि वे ग्राहक के लिए क्या करते हैं।

| ग्रुप | ब्लॉक | ग्रुप किस काम का है |
| --- | --- | --- |
| **Triggers** | **Flow Start** | बातचीत कैसे शुरू होती है। देखें [चुनें कि फ़्लो कैसे शुरू हो](chatbot-flow-start-and-triggers.md)। |
| **Message types** | **Text**, **Media**, **List / Buttons**, **Catalogue**, **Single product**, **Multi product**, **Template**, **WhatsApp Form** | बॉट क्या बोलता है। देखें [टेक्स्ट और लिस्ट ब्लॉक](chatbot-text-and-list-blocks.md) और [मीडिया, प्रोडक्ट और फ़ॉर्म ब्लॉक](chatbot-message-blocks.md)। |
| **Ask the customer** | **Ask name**, **Ask phone**, **Ask email**, **Ask address**, **Ask Question**, **Ask Location**, **Ask Media**, **Wait & Branch**, **Delay** | बॉट क्या पूछता है और कितनी देर इंतज़ार करता है। देखें [नाम, फ़ोन, ईमेल और पता पूछें](chatbot-ask-details-blocks.md) और [पूछने और इंतज़ार करने वाले ब्लॉक](chatbot-ask-and-wait-blocks.md)। |
| **Actions** | **Set Attribute**, **Add Tag**, **Condition**, **Connect Flow**, **API Request**, **Chat with agent**, **AI Reply**, **Jump to flow**, **End** | बॉट पर्दे के पीछे क्या करता है। देखें [एक्शन ब्लॉक](chatbot-action-blocks.md) और [नाम, फ़ोन, ईमेल और पता पूछें](chatbot-ask-details-blocks.md)। |
| **Store actions** | **Order status**, **Cancel order**, **Reorder**, **Confirm address**, **COD check**, **COD to prepaid**, **Book appointment** | स्टोर चैट में ऑर्डर और बुकिंग के काम। देखें [चैटबॉट में ऑर्डर और बुकिंग देखें](chatbot-store-action-blocks.md)। |
| **Integrations** | **CRM**, **Social**, **Forms**, **Meta Conversion** | डेटा को Ohanvi के दूसरे हिस्सों और Meta को भेजें। देखें [इंटीग्रेशन और एडवांस्ड स्टेप](chatbot-integration-and-advanced-steps.md)। |
| **Google Sheets**, **Google Calendar**, **Google Meet**, **Google Contacts** | **Add a row**, **Read rows**, **Create spreadsheet**, **Create event**, **Find events**, **Check availability**, **Update event**, **Cancel event**, **Instant Meet link**, **Find contact**, **Save contact** | अपने Google ऐप्स के साथ काम करें। देखें [Google Sheets, Calendar, Meet और Contacts के स्टेप जोड़ें](flow-google-workspace-steps.md)। |
| **Advanced** | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join**, **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook**, **Request Intervention**, **Invoke Action**, और **Pick a …** लिस्ट | ऑटोमेशन और ईमेल जर्नी के स्टेप, और पहले से बने विकल्पों की लिस्ट। यह ग्रुप बंद रहता है। इसे खोलें या खोजें। देखें [इंटीग्रेशन और एडवांस्ड स्टेप](chatbot-integration-and-advanced-steps.md)। |

## समस्या और समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Publish first — there is no live version to run.** | आपने ऐसे फ़्लो पर **Run test** पर क्लिक किया जो कभी पब्लिश नहीं हुआ। | **Publish** पर क्लिक करें, फिर दोबारा टेस्ट करें। |
| टूलबार पर **Unsaved changes** बना रहता है | आपने फ़्लो एडिट किया, पर सेव नहीं किया। | **Save** पर क्लिक करें। |
| फ़्लो पब्लिश है, पर जवाब नहीं देता | **Active** बंद है। | **Active** चालू करें। |
| जो स्टेप आप ढूँढ रहे हैं, वह लिस्ट में नहीं है | स्टेप बंद पड़े **Advanced** ग्रुप में है। | **Search** में उसका नाम टाइप करें, या **Advanced** पर क्लिक करके उसे खोलें। |
| **Remove tag is not a chatbot step — use Set attribute, or move it to a journey card.** | आपने चैटबॉट कार्ड पर **Remove tag** रखा है। | **Set Attribute** इस्तेमाल करें, या ब्लॉक को जर्नी कार्ड पर ले जाएँ। |
| **… is not a chatbot step and will not be sent.** | आपने चैटबॉट कार्ड पर ऐसा ब्लॉक रखा है जो सिर्फ़ किसी दूसरी तरह के फ़्लो में चलता है। | ब्लॉक डिलीट करें, या उसे सही तरह के कार्ड पर ले जाएँ। |
| **… is not a journey step and will be skipped.** | आपने जर्नी कार्ड पर ऐसा ब्लॉक रखा है जो सिर्फ़ चैटबॉट में चलता है। | ब्लॉक डिलीट करें, या उसे चैटबॉट कार्ड पर ले जाएँ। |
| **Button 'Name' leads to "…", which is not a chatbot step.** | कोई बटन या ब्रांच ऐसे स्टेप से जुड़ा है जो चैटबॉट स्टेप नहीं है। | ध्यान रखें कि तार सेव हो जाता है और ऑटोमेशन उसी तार पर चलता है, पर बातचीत वहीं खत्म हो जाती है। चैट आगे चलानी हो, तो बटन को किसी चैटबॉट स्टेप से जोड़ें। |
| कार्ड पर **Needs setup** दिखता है | स्टेप में कोई ज़रूरी वैल्यू नहीं भरी है। | स्टेप पर क्लिक करें और ज़रूरी बताए गए फ़ील्ड भरें। |
| **One step will not be published** | **Publish** पर क्लिक करते समय कुछ स्टेप अधूरे थे। | **Fix the steps** पर क्लिक करें, या **Publish without them** पर क्लिक करें। देखें [कुछ स्टेप अधूरे हों, तब पब्लिश करें](#publish-when-some-steps-are-not-finished)। |

## संबंधित गाइड { #related }

- [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [चुनें कि फ़्लो कैसे शुरू हो](chatbot-flow-start-and-triggers.md)
- [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md)
- [फ़्लो और फ़्लो की लिस्ट को समझें](../flows/flows-overview-and-list.md)
- [फ़्लो में Action स्टेप और कंडीशन इस्तेमाल करें](flow-action-and-condition-steps.md)
