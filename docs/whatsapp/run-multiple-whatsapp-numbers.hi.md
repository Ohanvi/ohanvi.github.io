---
title: कई WhatsApp नंबर चलाएँ
description: एक से ज़्यादा WhatsApp नंबर कनेक्ट करें, हर नंबर को नाम दें, डिफ़ॉल्ट चुनें, देखें कि हर मैसेज किस नंबर से गया, और सही नंबर से कैंपेन भेजें।
---

# कई WhatsApp नंबर चलाएँ { #run-several-whatsapp-numbers }

Ohanvi में एक से ज़्यादा WhatsApp नंबर इस्तेमाल करें, जैसे **Sales** और **Support**। आखिर में हर नंबर का अपना नाम और बैज होगा। आपकी टीम उसी नंबर से जवाब देगी जिस पर ग्राहक ने मैसेज किया था। और हर कैंपेन आपके चुने नंबर से जाएगा।

## शुरू करने से पहले { #before-you-start }

- कम से कम एक WhatsApp नंबर कनेक्ट हो। देखें [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आप **Settings** → **WhatsApp** → **Configuration** खोल पाएँ। न खुले, तो अपने एडमिन से WhatsApp का एक्सेस माँगें।
- नया नंबर जोड़ना हो, तो आपके पास ऐसा फ़ोन नंबर हो जिस पर टेक्स्ट मैसेज या कॉल आ सके, या Meta की जानकारी हो। देखें [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)।

## कई नंबर कैसे काम करते हैं { #how-several-numbers-work }

- **एक Default नंबर।** एक नंबर हमेशा **Default** रहता है। कैंपेन, ब्रॉडकास्ट और नए कॉन्टैक्ट को पहला मैसेज इसी नंबर से जाता है।
- **जवाब उसी नंबर से जाता है जिस पर ग्राहक ने मैसेज किया।** यह आपको नहीं चुनना पड़ता। Ohanvi खुद कर देता है।
- **हर नंबर का एक लेबल और एक बैज होता है।** आप नंबर को लेबल देते हैं, जैसे `Sales`। लेबल का पहला अक्षर बैज बन जाता है। यह बैज आपको इनबॉक्स के हर मैसेज पर दिखता है। बैज का रंग आप खुद चुन सकते हैं।
- **टेम्प्लेट सबके लिए एक ही रहते हैं।** एक ही WhatsApp Business Account के सभी नंबर वही Approved टेम्प्लेट इस्तेमाल करते हैं।

### जवाब उसी नंबर से क्यों जाता है जिस पर ग्राहक ने मैसेज किया { #why-replies-leave-from-the-number-the-customer-wrote-to }

WhatsApp की 24 घंटे की विंडो आपके पूरे बिज़नेस की नहीं होती। वह एक जोड़ी की होती है: एक ग्राहक और आपका एक नंबर। मान लें सना ने आपके **Sales** नंबर पर मैसेज किया। तब अगले 24 घंटे तक सिर्फ़ **Sales** नंबर ही उसे सामान्य टेक्स्ट जवाब भेज सकता है। आपके **Support** नंबर से भेजा जवाब रिजेक्ट हो जाता है, भले ही इनबॉक्स में चैट नई दिखे।

इसलिए Ohanvi हमेशा उसी नंबर से जवाब देता है जिस पर ग्राहक ने आखिरी बार मैसेज किया। बाद में वही ग्राहक आपके दूसरे नंबर पर मैसेज करे, तो उसके बाद जवाब उस दूसरे नंबर से जाएँगे।

## स्टेप { #steps }

### अपने नंबर खोलें { #open-your-numbers }

1. नीचे-बाएँ कोने में अपने इनिशियल पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. **WhatsApp** चुनें, फिर **Configuration**। पेज का टाइटल **WhatsApp numbers** होता है।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![WhatsApp numbers with the list of numbers on the left, the Default tag, quality rating and the detail pane on the right](../assets/screenshots/whatsapp-numbers-1-list.png) -->

3. बाईं तरफ़ की लिस्ट देखें। हर पंक्ति में बैज, लेबल, फ़ोन नंबर और नंबर की क्वालिटी रेटिंग दिखती है। एक नंबर पर **Default** टैग भी होता है।
4. कोई नंबर खोजना हो, तो **Search label or number** में टाइप करें।
5. किसी नंबर पर क्लिक करें। उसकी जानकारी दाईं तरफ़ खुल जाती है।

### नंबर जोड़ें { #add-a-number }

1. ऊपर दाईं तरफ़ **Add number** पर क्लिक करें। **Connect WhatsApp** पेज खुलेगा।
2. **How do you want to connect?** में **New number**, **Verified number**, **WhatsApp Business app** या **Cloud API credentials** चुनें।
3. चुने हुए तरीके के स्टेप पूरे करें। देखें [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)।
4. नंबर को एक लेबल दें। यही इनबॉक्स में बैज बनेगा।

!!! tip "वही WhatsApp Business Account इस्तेमाल करें"
    जो WhatsApp Business Account आप पहले से इस्तेमाल करते हैं, उसमें नया नंबर जोड़ेंगे तो वह उसी के टेम्प्लेट इस्तेमाल करेगा। उन सभी नंबरों से कैंपेन और फ़्लो वही Approved टेम्प्लेट भेज सकते हैं।

### ऐसा नंबर कनेक्ट करें जो आपके WhatsApp अकाउंट में पहले से है { #connect-a-number-that-is-already-in-your-whatsapp-account }

कभी-कभी कोई नंबर Meta पर आपके WhatsApp Business Account में होता है और ग्राहक उस पर मैसेज भी कर रहे होते हैं, पर वह Ohanvi में कनेक्ट नहीं होता। ऐसे नंबर को आप एक क्लिक में कनेक्ट कर सकते हैं। कोड या टोकन की ज़रूरत नहीं है।

1. **Settings** → **WhatsApp** → **Configuration** खोलें।
2. लिस्ट में **In your WhatsApp account, not connected** खोजें। ऐसे नंबर पर **Receiving messages** टैग होता है।
3. सिर्फ़ यही नंबर देखने के लिए लिस्ट के ऊपर **Not connected** पर क्लिक करें।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![The list with a not connected number marked Receiving messages and a Connect button](../assets/screenshots/whatsapp-numbers-2-not-connected.png) -->

4. उस नंबर पर **Connect** पर क्लिक करें। **Name this number** खुलेगा।
5. **Label** में कोई नाम लिखें, जैसे `Sales`। इसका पहला अक्षर इनबॉक्स के हर मैसेज पर इस नंबर का बैज बनता है।
6. **Badge colour** में **blue**, **purple**, **teal**, **orange** या **gold** चुनें।
7. **Connect** पर क्लिक करें। एक मैसेज आएगा कि नंबर कनेक्ट हो गया। अब इसकी चैट के जवाब इसी नंबर से जाएँगे।

आप इसे किसी चैट से भी कनेक्ट कर सकते हैं। देखें [वह नंबर कनेक्ट करें जिस पर ग्राहक ने मैसेज किया](#connect-the-number-a-customer-wrote-to)।

### किसी नंबर की जानकारी पढ़ें { #read-a-numbers-details }

लिस्ट में किसी नंबर पर क्लिक करें। दाईं तरफ़ के पैनल में ये हिस्से होते हैं।

| हिस्सा | यह क्या दिखाता है |
| --- | --- |
| **Number details** | वह जानकारी जो Ohanvi, Meta से पढ़ता है: **Verified name**, **Display name status**, **Quality rating**, **Messaging limit**, **Throughput**, **Phone verification**, **Platform**, **Account mode** और **Official business account**। |
| **IDs and connection** | **Phone number ID**, आपका **WhatsApp Business Account**, **Business verification**, **Access token**, **Graph API version** और **Webhook**। इसे खोलने के लिए इस पर क्लिक करें। |
| **Working hours** | इस नंबर के खुले रहने का समय। |
| **Call settings** | ग्राहक इस नंबर पर कॉल कर सकते हैं या नहीं। |

<!-- SCREENSHOT TODO: add the image, then restore this line: ![The detail pane of a number with Number details, IDs and connection, Working hours and Call settings](../assets/screenshots/whatsapp-numbers-3-details.png) -->

Meta से जानकारी फिर से लेनी हो, तो लिस्ट के ऊपर रिफ़्रेश बटन पर क्लिक करें। उसके टूलटिप में **Sync from Meta** लिखा है।

### किसी नंबर के काम के घंटे सेट करें { #set-working-hours-for-a-number }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Working hours** तक स्क्रॉल करें। हेडिंग के पास टाइम ज़ोन देखें।
3. हर दिन का स्विच चालू या बंद करें। बंद दिन पर **Closed** दिखता है।
4. जो दिन चालू है, उसके लिए खुलने और बंद होने का समय सेट करें।

ये घंटे सिर्फ़ इसी नंबर की चैट पर लागू होते हैं। इन घंटों के बाहर ग्राहकों को ऑफ़-आवर्स वाला जवाब मिलता है। हैंड-ऑफ़ की हुई चैट अगले खुलने के समय तक रुकी रहती हैं। जवाब कैसे लिखने हैं, यह जानने के लिए देखें [लाइव चैट सेटिंग्स सेट करें](set-up-live-chat-settings.md)।

### किसी नंबर की कॉल सेटिंग्स सेट करें { #set-call-settings-for-a-number }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Call settings** तक स्क्रॉल करें।
3. **WhatsApp voice calling** चालू करें। इससे ग्राहक इस नंबर पर कॉल कर सकेंगे और आपके एजेंट उन्हें वापस कॉल कर सकेंगे।

कॉल का शेड्यूल और जिन टीम मेंबर के फ़ोन पर कॉल बजती है, वे सभी नंबरों के लिए एक ही रहते हैं। देखें [WhatsApp कॉलिंग का इस्तेमाल करें](whatsapp-calling.md)।

### नंबर का नाम या बैज बदलें { #rename-a-number-or-change-its-badge }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Edit** पर क्लिक करें।
3. **Label** में नया नाम लिखें। टाइप करते ही बैज का अक्षर बदल जाता है।
4. **Badge colour** में कोई रंग चुनें।
5. **Save** पर क्लिक करें।

इसी विंडो में नंबर की बाकी जानकारी भी होती है, जैसे access token। देखें [नंबर एडिट करें](whatsapp-configuration-settings.md)।

!!! note "हर नंबर का लेबल अलग रखें"
    एक बिज़नेस के दो नंबरों का लेबल एक जैसा नहीं हो सकता। ऐसा करने पर सेव रिजेक्ट हो जाता है।

### किसी नंबर को डिफ़ॉल्ट बनाएँ { #make-a-number-the-default }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Make default** पर क्लिक करें। **Make Sales the default?** खुलेगा।
3. नोट पढ़ें। नए कैंपेन, ब्रॉडकास्ट और नए कॉन्टैक्ट को पहला मैसेज अब इसी नंबर से जाएगा। जवाब पहले की तरह उसी नंबर से जाएँगे जिस पर ग्राहक ने मैसेज किया था।
4. **Make default** पर क्लिक करें।

जो नंबर पहले से डिफ़ॉल्ट है, उस पर **Make default** बटन नहीं दिखता।

### नंबर डिसकनेक्ट करें { #disconnect-a-number }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Disconnect** पर क्लिक करें। **Disconnect Support?** खुलेगा।
3. नोट पढ़ें। Ohanvi इस नंबर पर मैसेज लेना और भेजना बंद कर देता है। इसकी चैट इनबॉक्स में रहती हैं, पर नंबर दोबारा कनेक्ट करने तक आप जवाब नहीं भेज सकते। नंबर खुद आपके WhatsApp अकाउंट में बना रहता है।
4. **Disconnect** पर क्लिक करें।

!!! warning "Default नंबर डिसकनेक्ट नहीं हो सकता"
    जब तक आपके पास दूसरे नंबर हैं, Default नंबर डिसकनेक्ट नहीं होता। विंडो में लिखा आता है **Make another number the default first, then disconnect this one.** पहले किसी दूसरे नंबर को डिफ़ॉल्ट बनाएँ, फिर इसे डिसकनेक्ट करें। अगर आपके पास सिर्फ़ एक ही नंबर है, तो उसे डिसकनेक्ट किया जा सकता है।

डिसकनेक्ट किया हुआ नंबर **In your WhatsApp account, not connected** में दोबारा दिखता है। इससे आप उसे बाद में फिर कनेक्ट कर सकते हैं।

### देखें कि मैसेज किस नंबर से गया { #see-which-number-a-message-used }

**Inbox** में हर मैसेज पर एक छोटा बैज होता है। उसमें नंबर के लेबल का पहला अक्षर लिखा होता है। रंगों से नंबरों को अलग पहचानना आसान हो जाता है।

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Inbox** चुनें।
2. लिस्ट के ऊपर देखें। वहाँ आपके हर नंबर का नाम उसके बैज के साथ दिखता है।
3. कोई चैट खोलें। हर मैसेज के नीचे बैज देखें। ग्राहक के मैसेज पर यह बैज बताता है कि ग्राहक ने किस नंबर पर मैसेज किया। आपकी टीम के मैसेज पर यह बताता है कि मैसेज किस नंबर से गया।
4. बैज पर माउस ले जाएँ। टूलटिप में लेबल और फ़ोन नंबर दिखता है, जैसे `Sales · +91 98100 45210`।
5. चैट का हेडर देखें। उसमें लिखा होता है कि ग्राहक ने किस नंबर पर मैसेज किया।
6. कंपोज़र के ऊपर देखें। वहाँ **Replying from** लिखा होता है, फिर बैज, लेबल और नंबर।

<!-- SCREENSHOT TODO: add the image, then restore this line: ![A chat with a letter badge under every message, the header naming the number the customer wrote to and Replying from above the composer](../assets/screenshots/whatsapp-numbers-4-inbox.png) -->

`?` वाला ग्रे बैज बताता है कि वह नंबर Ohanvi में कनेक्ट नहीं है। उसके टूलटिप में **Not connected in Ohanvi** लिखा होता है।

### वह नंबर कनेक्ट करें जिस पर ग्राहक ने मैसेज किया { #connect-the-number-a-customer-wrote-to }

अगर ग्राहक ऐसे नंबर पर मैसेज करे जो कनेक्ट नहीं है, तो आप Ohanvi से जवाब नहीं दे सकते। कंपोज़र बंद हो जाता है और नंबर की ID के साथ **This customer wrote to a number that isn't connected** दिखाता है।

1. मैसेज के पास **Connect** पर क्लिक करें। **Configuration** खुलेगा।
2. **In your WhatsApp account, not connected** में उस नंबर पर **Connect** पर क्लिक करें। **Name this number** खुलेगा।
3. **Label** लिखें, **Badge colour** चुनें और **Connect** पर क्लिक करें।
4. चैट पर वापस जाएँ और अपना जवाब लिखें। जवाब उसी नंबर से जाएगा जिस पर ग्राहक ने मैसेज किया था।

WhatsApp जवाब सिर्फ़ उसी नंबर से पहुँचाता है जिस पर ग्राहक ने मैसेज किया। अगर वह नंबर आपके WhatsApp अकाउंट में है, तो उसे कनेक्ट करना बस एक क्लिक का काम है। अगर नहीं है, तो पहले उसे जोड़ें। देखें [नंबर जोड़ें](#add-a-number)।

### किसी नंबर से कैंपेन भेजें { #send-a-campaign-from-a-number }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Campaign** चुनें, फिर **New Campaign** पर क्लिक करें।
2. **Broadcast name** लिखें।
3. **Send from** में नंबर चुनें। यह पहले आपके **Default** नंबर पर होता है। हर विकल्प में बैज, लेबल, फ़ोन नंबर और मैसेजिंग लिमिट दिखती है।
4. दाईं तरफ़ का नोट देखें। उसमें उस नंबर का नाम होता है जिससे कैंपेन जाएगा।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![Send from with a list of numbers, the Default tag and each number's messaging limit](../assets/screenshots/whatsapp-numbers-5-send-from.png) -->

5. बाकी कैंपेन हमेशा की तरह पूरा करें। देखें [WhatsApp ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)।

जब कोई ग्राहक कैंपेन का जवाब देता है, तो चैट उसी नंबर पर रहती है जिससे कैंपेन गया था। आपकी टीम अपने-आप उसी नंबर से जवाब देती है।

जिस नंबर की मैसेजिंग लिमिट कम है, उस पर एक नोट दिखता है। बड़ी ऑडियंस को कई दिनों में बाँटकर भेजें, या किसी दूसरे नंबर से भेजें।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| चैट में समय बचा दिख रहा है, फिर भी **This person has not messaged you in the last 24 hours** आता है। | ग्राहक ने ऐसे नंबर पर मैसेज किया जो कनेक्ट नहीं है, इसलिए उस नंबर से जवाब नहीं जा सकता। | उस नंबर को कनेक्ट करें। देखें [जवाब में 24 घंटे की विंडो बंद बताई जाती है, पर चैट में समय बचा दिखता है](fix-24-hour-window-error.md)। |
| **This customer wrote to a number that isn't connected** | ग्राहक ने जिस नंबर पर मैसेज किया, वह Ohanvi में कनेक्ट नहीं है। | मैसेज के पास **Connect** पर क्लिक करें, या उसे **Configuration** से कनेक्ट करें। |
| **Make another number the default first, then disconnect this one.** | आपने Default नंबर को डिसकनेक्ट करने की कोशिश की। | पहले किसी दूसरे नंबर को डिफ़ॉल्ट बनाएँ, फिर इसे डिसकनेक्ट करें। |
| सेव करते समय लेबल रिजेक्ट हो जाता है। | आपके बिज़नेस के किसी दूसरे नंबर का लेबल भी यही है। | कोई दूसरा लेबल रखें। |
| **Configuration** में कोई नंबर नहीं दिख रहा। | वह कनेक्ट नहीं है, या किसी दूसरे WhatsApp Business Account में है। | **In your WhatsApp account, not connected** में देखें। वहाँ भी न हो, तो **Add number** पर क्लिक करें। |
| कैंपेन उस नंबर से नहीं गया जिससे आप भेजना चाहते थे। | **Send from** में Default नंबर ही रह गया था। | भेजने से पहले **Send from** में अपना नंबर चुनें। |

## जुड़ी गाइड { #related }

- [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)
- [नंबर एडिट करें](whatsapp-configuration-settings.md)
- [WhatsApp इनबॉक्स इस्तेमाल करें](use-whatsapp-inbox.md)
- [WhatsApp ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)
- [WhatsApp कॉलिंग का इस्तेमाल करें](whatsapp-calling.md)
- [जवाब में 24 घंटे की विंडो बंद बताई जाती है, पर चैट में समय बचा दिखता है](fix-24-hour-window-error.md)
