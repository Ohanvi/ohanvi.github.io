---
title: कई व्हाट्सऐप नंबर चलाएँ
description: एक से ज़्यादा व्हाट्सऐप नंबर कनेक्ट करें, हर एक को नाम दें, डिफ़ॉल्ट चुनें, देखें कि हर मैसेज में कौन-सा नंबर इस्तेमाल हुआ, और सही नंबर से कैंपेन भेजें।
---

# कई व्हाट्सऐप नंबर चलाएँ { #run-several-whatsapp-numbers }

Ohanvi में एक से ज़्यादा व्हाट्सऐप नंबर इस्तेमाल करें, जैसे **Sales** और **Support**। अंत में हर नंबर का अपना नाम और बैज होगा, आपकी टीम उसी नंबर से जवाब देगी जिस पर ग्राहक ने मैसेज किया, और हर कैंपेन आपके चुने नंबर से जाएगा।

## शुरू करने से पहले { #before-you-start }

- कम से कम एक व्हाट्सऐप नंबर कनेक्ट है। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आप **Settings** → **WhatsApp** → **Configuration** खोल सकते हैं। नहीं तो अपने एडमिन से व्हाट्सऐप का एक्सेस माँगें।
- नए नंबर के लिए आपके पास ऐसा फ़ोन नंबर हो जो टेक्स्ट मैसेज या कॉल पा सके, या Meta की जानकारी हो। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।

## कई नंबर कैसे काम करते हैं { #how-several-numbers-work }

- **एक Default नंबर।** एक नंबर हमेशा **Default** होता है। कैंपेन, ब्रॉडकास्ट और नए संपर्क को पहला मैसेज इसी से जाते हैं।
- **जवाब उसी नंबर से जाते हैं जिस पर ग्राहक ने मैसेज किया।** यह आप नहीं चुनते। Ohanvi आपके लिए कर देता है।
- **हर नंबर का एक लेबल और एक बैज होता है।** आप नंबर को लेबल देते हैं, जैसे `Sales`। लेबल का पहला अक्षर वह बैज है जो आपको इनबॉक्स के हर मैसेज पर दिखता है। बैज का रंग आप चुन सकते हैं।
- **टेम्प्लेट साझा होते हैं।** एक ही WhatsApp Business Account के नंबर वही Approved टेम्प्लेट इस्तेमाल करते हैं।

### जवाब उसी नंबर से क्यों जाते हैं जिस पर ग्राहक ने मैसेज किया { #why-replies-leave-from-the-number-the-customer-wrote-to }

व्हाट्सऐप की 24 घंटे की विंडो आपके पूरे बिज़नेस की नहीं होती। वह एक जोड़ी की होती है: एक ग्राहक और आपका एक नंबर। जब सना आपके **Sales** नंबर पर मैसेज करती है, तो अगले 24 घंटे तक केवल **Sales** ही उसे सामान्य टेक्स्ट जवाब भेज सकता है। आपके **Support** नंबर से भेजा जवाब नामंज़ूर हो जाता है, भले ही इनबॉक्स में चैट नई दिखे।

इसलिए Ohanvi हमेशा उसी नंबर से जवाब देता है जिस पर ग्राहक ने आखिरी बार मैसेज किया। अगर वही ग्राहक बाद में आपके दूसरे नंबर पर मैसेज करे, तो उसके बाद जवाब उस नंबर से जाते हैं।

## चरण { #steps }

### अपने नंबर खोलें { #open-your-numbers }

1. नीचे-बाएँ कोने में अपने इनिशियल पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. **WhatsApp** चुनें, फिर **Configuration**। पेज के टाइटल में **WhatsApp numbers** लिखा होता है।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![WhatsApp numbers with the list of numbers on the left, the Default tag, quality rating and the detail pane on the right](../assets/screenshots/whatsapp-numbers-1-list.png) -->

3. बाईं ओर की सूची पढ़ें। हर पंक्ति में बैज, लेबल, एक नंबर पर **Default** टैग, फ़ोन नंबर और नंबर की क्वालिटी रेटिंग दिखती है।
4. कोई नंबर खोजने के लिए **Search label or number** में टाइप करें।
5. किसी नंबर पर क्लिक करें। उसकी जानकारी दाईं ओर खुलती है।

### नंबर जोड़ें { #add-a-number }

1. ऊपर दाईं ओर **Add number** पर क्लिक करें। **Connect WhatsApp** पेज खुलता है।
2. **How do you want to connect?** में **New number**, **Verified number**, **WhatsApp Business app** या **Cloud API credentials** चुनें।
3. उस विकल्प के चरण पूरे करें। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।
4. नंबर को लेबल दें। यही इनबॉक्स में बैज बनता है।

!!! tip "सुझाव"
    जो WhatsApp Business Account आप पहले से इस्तेमाल करते हैं, उसमें जोड़ा गया नंबर उसके टेम्प्लेट साझा करता है। कैंपेन और फ़्लो उन सभी नंबरों से वही Approved टेम्प्लेट इस्तेमाल कर सकते हैं।

### ऐसा नंबर कनेक्ट करें जो पहले से आपके व्हाट्सऐप अकाउंट में है { #connect-a-number-that-is-already-in-your-whatsapp-account }

कभी-कभी कोई नंबर Meta पर आपके WhatsApp Business Account में होता है और ग्राहक उस पर पहले से मैसेज कर रहे होते हैं, लेकिन वह Ohanvi में कनेक्ट नहीं होता। आप उसे एक क्लिक में कनेक्ट कर सकते हैं। कोड या टोकन की ज़रूरत नहीं है।

1. **Settings** → **WhatsApp** → **Configuration** खोलें।
2. सूची में **In your WhatsApp account, not connected** ढूँढें। नंबर पर **Receiving messages** टैग होता है।
3. केवल ये नंबर देखने के लिए सूची के ऊपर **Not connected** पर क्लिक करें।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![The list with a not connected number marked Receiving messages and a Connect button](../assets/screenshots/whatsapp-numbers-2-not-connected.png) -->

4. नंबर पर **Connect** पर क्लिक करें। **Name this number** खुलता है।
5. **Label** में नाम लिखें, जैसे `Sales`। पहला अक्षर इनबॉक्स के हर मैसेज पर इस नंबर का बैज बनता है।
6. **Badge colour** में **blue**, **purple**, **teal**, **orange** या **gold** चुनें।
7. **Connect** पर क्लिक करें। एक संदेश बताता है कि नंबर कनेक्ट हो गया है, और उसकी चैट के जवाब अब उसी से भेजे जाते हैं।

आप इसे किसी चैट से भी कनेक्ट कर सकते हैं। देखें [वह नंबर कनेक्ट करें जिस पर ग्राहक ने मैसेज किया](#connect-the-number-a-customer-wrote-to)।

### किसी नंबर की जानकारी पढ़ें { #read-a-numbers-details }

सूची में किसी नंबर पर क्लिक करें। दाईं ओर के पैनल में ये हिस्से होते हैं।

| हिस्सा | यह क्या दिखाता है |
| --- | --- |
| **Number details** | वे तथ्य जो Ohanvi, Meta से पढ़ता है: **Verified name**, **Display name status**, **Quality rating**, **Messaging limit**, **Throughput**, **Phone verification**, **Platform**, **Account mode** और **Official business account**। |
| **IDs and connection** | **Phone number ID**, आपका **WhatsApp Business Account**, **Business verification**, **Access token**, **Graph API version** और **Webhook**। खोलने के लिए इस पर क्लिक करें। |
| **Working hours** | इस नंबर के खुलने का समय। |
| **Call settings** | ग्राहक इस नंबर पर कॉल कर सकते हैं या नहीं। |

<!-- SCREENSHOT TODO: add the image, then restore this line: ![The detail pane of a number with Number details, IDs and connection, Working hours and Call settings](../assets/screenshots/whatsapp-numbers-3-details.png) -->

Meta से तथ्य रिफ़्रेश करने के लिए सूची के ऊपर रिफ़्रेश बटन पर क्लिक करें। उसकी टूलटिप में **Sync from Meta** लिखा है।

### किसी नंबर के काम के घंटे सेट करें { #set-working-hours-for-a-number }

1. सूची में नंबर पर क्लिक करें।
2. **Working hours** तक स्क्रॉल करें। शीर्षक के पास टाइम ज़ोन पढ़ें।
3. हर दिन के लिए स्विच चालू या बंद करें। बंद दिन पर **Closed** दिखता है।
4. चालू दिन के लिए खुलने और बंद होने का समय सेट करें।

ये घंटे केवल इस नंबर की चैट पर लागू होते हैं। इनके बाहर ग्राहकों को ऑफ़-आवर्स वाला जवाब मिलता है, और हैंड-ऑफ़ की हुई चैट अगले खुलने तक इंतज़ार करती हैं। जवाब लिखने के लिए देखें [लाइव चैट सेटिंग्स सेट करें](set-up-live-chat-settings.md)।

### किसी नंबर की कॉल सेटिंग्स सेट करें { #set-call-settings-for-a-number }

1. सूची में नंबर पर क्लिक करें।
2. **Call settings** तक स्क्रॉल करें।
3. ग्राहकों को इस नंबर पर कॉल करने देने और अपने एजेंट को उन्हें वापस कॉल करने देने के लिए **WhatsApp voice calling** चालू करें।

कॉल का शेड्यूल और जिन टीम सदस्यों के पास कॉल की घंटी बजती है, वे साझा होते हैं। वे आपके सभी नंबरों पर लागू होते हैं। देखें [व्हाट्सऐप कॉलिंग का इस्तेमाल करें](whatsapp-calling.md)।

### नंबर का नाम या बैज बदलें { #rename-a-number-or-change-its-badge }

1. सूची में नंबर पर क्लिक करें।
2. **Edit** पर क्लिक करें।
3. **Label** में नया नाम लिखें। टाइप करते ही बैज का अक्षर बदलता है।
4. **Badge colour** में कोई रंग चुनें।
5. **Save** पर क्लिक करें।

उसी विंडो में नंबर की बाकी जानकारी भी होती है, जैसे access token। देखें [नंबर एडिट करें](whatsapp-configuration-settings.md)।

!!! note "ध्यान दें"
    एक बिज़नेस के दो नंबर एक ही लेबल साझा नहीं कर सकते। कोशिश करने पर सेव नामंज़ूर हो जाता है।

### किसी नंबर को डिफ़ॉल्ट बनाएँ { #make-a-number-the-default }

1. सूची में नंबर पर क्लिक करें।
2. **Make default** पर क्लिक करें। **Make Sales the default?** खुलता है।
3. नोट पढ़ें। नए कैंपेन, ब्रॉडकास्ट और नए संपर्कों को पहले मैसेज इसी नंबर से जाते हैं। जवाब उसी नंबर से जाते रहते हैं जिस पर हर ग्राहक ने मैसेज किया।
4. **Make default** पर क्लिक करें।

**Make default** बटन उस नंबर पर नहीं दिखता जो पहले से डिफ़ॉल्ट है।

### नंबर डिसकनेक्ट करें { #disconnect-a-number }

1. सूची में नंबर पर क्लिक करें।
2. **Disconnect** पर क्लिक करें। **Disconnect Support?** खुलता है।
3. नोट पढ़ें। Ohanvi इस नंबर पर मैसेज पाना और भेजना बंद कर देता है। इसकी चैट इनबॉक्स में रहती हैं, लेकिन इसे दोबारा कनेक्ट करने तक जवाब नहीं भेजे जा सकते। नंबर खुद आपके व्हाट्सऐप अकाउंट में रहता है।
4. **Disconnect** पर क्लिक करें।

!!! warning "चेतावनी"
    Default नंबर को डिसकनेक्ट नहीं किया जा सकता। जब तक आपके पास दूसरे नंबर हैं, Default डिसकनेक्ट नहीं होता। विंडो में लिखा आता है **Make another number the default first, then disconnect this one.** किसी दूसरे नंबर को डिफ़ॉल्ट बनाएँ, फिर इसे डिसकनेक्ट करें। अगर आपके पास केवल एक नंबर है, तो उसे डिसकनेक्ट किया जा सकता है।

डिसकनेक्ट किया हुआ नंबर **In your WhatsApp account, not connected** में फिर दिखता है, ताकि आप उसे बाद में दोबारा कनेक्ट कर सकें।

### देखें कि मैसेज में कौन-सा नंबर इस्तेमाल हुआ { #see-which-number-a-message-used }

**Inbox** में हर मैसेज पर नंबर के लेबल के पहले अक्षर वाला छोटा बैज होता है। रंग नंबरों को अलग पहचानने में मदद करते हैं।

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Inbox** चुनें।
2. सूची के ऊपर देखें। वह हर नंबर का नाम उसके बैज के पास दिखाता है।
3. कोई चैट खोलें। हर मैसेज के नीचे बैज देखें। ग्राहक के मैसेज पर वह उस नंबर को दिखाता है जिस पर उन्होंने मैसेज किया। आपकी टीम के मैसेज पर वह उस नंबर को दिखाता है जिससे मैसेज गया।
4. बैज पर माउस ले जाएँ। टूलटिप में लेबल और फ़ोन नंबर दिखता है, जैसे `Sales · +91 98100 45210`।
5. चैट का हेडर देखें। उसमें लिखा होता है कि ग्राहक ने किस नंबर पर मैसेज किया।
6. कंपोज़र के ऊपर देखें। वहाँ **Replying from** लिखा होता है, फिर बैज, लेबल और नंबर।

<!-- SCREENSHOT TODO: add the image, then restore this line: ![A chat with a letter badge under every message, the header naming the number the customer wrote to and Replying from above the composer](../assets/screenshots/whatsapp-numbers-4-inbox.png) -->

`?` वाला धूसर बैज बताता है कि वह नंबर Ohanvi में कनेक्ट नहीं है। उसकी टूलटिप में **Not connected in Ohanvi** लिखा होता है।

### वह नंबर कनेक्ट करें जिस पर ग्राहक ने मैसेज किया { #connect-the-number-a-customer-wrote-to }

जब कोई ग्राहक ऐसे नंबर पर मैसेज करता है जो कनेक्ट नहीं है, तो आप Ohanvi से जवाब नहीं दे सकते। कंपोज़र बंद हो जाता है और नंबर की ID के साथ **This customer wrote to a number that isn't connected** दिखाता है।

1. मैसेज के पास **Connect** पर क्लिक करें। **Configuration** खुलता है।
2. **In your WhatsApp account, not connected** में नंबर पर **Connect** पर क्लिक करें। **Name this number** खुलता है।
3. **Label** लिखें, **Badge colour** चुनें और **Connect** पर क्लिक करें।
4. चैट पर वापस जाएँ और अपना जवाब लिखें। वह उसी नंबर से जाता है जिस पर ग्राहक ने मैसेज किया।

व्हाट्सऐप जवाब केवल उसी नंबर से डिलीवर करता है जिस पर ग्राहक ने मैसेज किया। अगर वह नंबर आपके व्हाट्सऐप अकाउंट में है, तो उसे कनेक्ट करना एक क्लिक का काम है। अगर नहीं है, तो पहले उसे जोड़ें। देखें [नंबर जोड़ें](#add-a-number)।

### किसी नंबर से कैंपेन भेजें { #send-a-campaign-from-a-number }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Campaign** चुनें, फिर **New Campaign** पर क्लिक करें।
2. **Broadcast name** लिखें।
3. **Send from** में नंबर चुनें। यह आपके **Default** नंबर पर शुरू होता है। हर विकल्प में बैज, लेबल, फ़ोन नंबर और मैसेजिंग लिमिट दिखती है।
4. दाईं ओर का नोट देखें। उसमें उस नंबर का नाम होता है जिससे कैंपेन जाएगा।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![Send from with a list of numbers, the Default tag and each number's messaging limit](../assets/screenshots/whatsapp-numbers-5-send-from.png) -->

5. कैंपेन हमेशा की तरह पूरा करें। देखें [व्हाट्सऐप ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)।

जब कोई ग्राहक कैंपेन का जवाब देता है, तो चैट उसी नंबर पर रहती है जिससे वह भेजा गया था, और आपकी टीम अपने-आप उसी नंबर से जवाब देती है।

कम मैसेजिंग लिमिट वाले नंबर पर एक नोट दिखता है। बड़ी ऑडियंस को कई दिनों में बाँटा जाता है, या उसके लिए दूसरा नंबर इस्तेमाल करना चाहिए।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| ऐसी चैट पर **This person has not messaged you in the last 24 hours** जिसमें समय बचा दिख रहा है। | ग्राहक ने ऐसे नंबर पर मैसेज किया जो कनेक्ट नहीं है, इसलिए उससे जवाब नहीं जा सकता। | उस नंबर को कनेक्ट करें। देखें [जवाब में 24 घंटे की विंडो बंद बताई जाती है, पर चैट में समय बचा दिखता है](fix-24-hour-window-error.md)। |
| **This customer wrote to a number that isn't connected** | जिस नंबर पर ग्राहक ने मैसेज किया वह Ohanvi में कनेक्ट नहीं है। | मैसेज के पास **Connect** पर क्लिक करें, या उसे **Configuration** से कनेक्ट करें। |
| **Make another number the default first, then disconnect this one.** | आपने Default नंबर को डिसकनेक्ट करने की कोशिश की। | किसी दूसरे नंबर को डिफ़ॉल्ट बनाएँ, फिर इसे डिसकनेक्ट करें। |
| सेव करते समय लेबल नामंज़ूर हो जाता है। | आपके बिज़नेस के किसी दूसरे नंबर का यही लेबल है। | कोई दूसरा लेबल इस्तेमाल करें। |
| **Configuration** में कोई नंबर नहीं दिख रहा। | वह कनेक्ट नहीं है, या किसी दूसरे WhatsApp Business Account में है। | **In your WhatsApp account, not connected** में देखें। वहाँ न हो तो **Add number** पर क्लिक करें। |
| कैंपेन उस नंबर से नहीं गया जो आप चाहते थे। | **Send from** Default नंबर पर ही रह गया था। | भेजने से पहले **Send from** में नंबर चुनें। |

## संबंधित गाइड { #related }

- [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)
- [नंबर एडिट करें](whatsapp-configuration-settings.md)
- [व्हाट्सऐप इनबॉक्स का इस्तेमाल करें](use-whatsapp-inbox.md)
- [व्हाट्सऐप ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)
- [व्हाट्सऐप कॉलिंग का इस्तेमाल करें](whatsapp-calling.md)
- [जवाब में 24 घंटे की विंडो बंद बताई जाती है, पर चैट में समय बचा दिखता है](fix-24-hour-window-error.md)
