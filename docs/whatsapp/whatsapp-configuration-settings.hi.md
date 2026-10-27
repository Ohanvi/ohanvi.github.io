---
title: नंबर एडिट करें
description: किसी नंबर की जानकारी खोलें, उसका लेबल, बैज, ID, टोकन और API वर्शन बदलें, कॉलिंग सेट करें, और किसी नंबर को डिफ़ॉल्ट बनाएँ या डिसकनेक्ट करें।
---

# व्हाट्सऐप नंबर एडिट करें { #edit-a-whatsapp-number }

कोई कनेक्टेड नंबर खोलें और उसका नाम, बैज, ID और एक्सेस टोकन बदलें। अंत में आपके बदलाव सेव हो जाते हैं और नंबर आपके मनचाहे ढंग से सेट हो जाता है। एक से ज़्यादा नंबर चलाने के लिए देखें [कई व्हाट्सऐप नंबर चलाएँ](run-multiple-whatsapp-numbers.md)।

## शुरू करने से पहले { #before-you-start }

- आपका व्हाट्सऐप नंबर Ohanvi से कनेक्ट है। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आप **Settings** → **WhatsApp** → **Configuration** खोल सकते हैं। अगर नहीं, तो अपने एडमिन से व्हाट्सऐप का एक्सेस माँगें।
- अगर आप अपनी Meta जानकारी बदलना चाहते हैं, तो वह आपके पास है: **Phone Number ID**, **WABA ID**, **Business ID** और एक स्थायी एक्सेस टोकन। इन्हें Meta Business Settings में ढूँढें।

## इस स्क्रीन से क्या हट गया है { #what-moved-out-of-this-screen }

ये सेटिंग्स पहले कॉन्फ़िगरेशन फ़ॉर्म में होती थीं। अब वे अपनी अलग जगहों पर हैं।

| सेटिंग | अब यह कहाँ है |
| --- | --- |
| AI रिप्लाई एजेंट और ऑटो-रिप्लाई | AI Assistant हब में प्रबंधित होते हैं। देखें [व्हाट्सऐप AI एजेंट सेट करें](set-up-ai-agent.md)। |
| ऑप्ट-आउट शब्द | **WhatsApp** → **Manage** → **Opt-in Management**। देखें [ऑप्ट-इन और ऑप्ट-आउट शब्द प्रबंधित करें](manage-opt-in-and-opt-out-words.md)। |
| वेलकम मैसेज | **WhatsApp** → **Manage** → **Live Chat Settings**। देखें [लाइव चैट सेटिंग्स सेट करें](set-up-live-chat-settings.md)। |

## चरण { #steps }

### कोई नंबर खोलें { #open-a-number }

1. नीचे-बाएँ कोने में अपने नाम के पहले अक्षरों पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. **WhatsApp** चुनें, फिर **Configuration**। पेज का टाइटल **WhatsApp numbers** है।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![WhatsApp numbers with the list of numbers on the left and the detail pane on the right](../assets/screenshots/whatsapp-numbers-1-list.png) -->

3. सूची में नंबर पर क्लिक करें। उसकी जानकारी दाईं ओर खुलती है, और ऊपर **Make default**, **Edit** और **Disconnect** होते हैं।

इसके बजाय कोई और नंबर जोड़ने के लिए **Add number** पर क्लिक करें। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।

### लेबल और बैज बदलें { #change-the-label-and-badge }

1. **Edit** पर क्लिक करें। उस नंबर की विंडो खुलती है।
2. **Label** में ऐसा नाम लिखें जो सिर्फ़ आपकी टीम देखे, जैसे `Sales`। पहला अक्षर वह बैज है जो इनबॉक्स में हर मैसेज पर दिखता है। इसमें 30 अक्षर तक आ सकते हैं।
3. **Badge colour** के नीचे **blue**, **purple**, **teal**, **orange** या **gold** चुनें।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![Edit window with the label, the badge preview, the badge colour choices and the number's IDs](../assets/screenshots/whatsapp-numbers-6-edit.png) -->

आपके बिज़नेस के हर नंबर का अपना अलग लेबल होना चाहिए।

### नंबर की जानकारी जाँचें { #check-the-number-details }

उसी विंडो में इस नंबर की जानकारी जाँचें।

1. **Business name** में बिज़नेस का नाम लिखें।
2. **Display phone number** में देश के कोड के साथ नंबर लिखें।
3. **Phone Number ID** में Meta से ली गई ID पेस्ट करें।
4. **WABA ID** में अपनी WhatsApp Business Account ID पेस्ट करें।
5. **Business Manager ID** में अपनी Meta Business Manager ID पेस्ट करें।
6. **Graph API version** में वर्शन चुनें।
7. **Access token** में Meta से मिला स्थायी टोकन पेस्ट करें। फ़ील्ड आपका लिखा हुआ छिपा देती है। सेव किया हुआ टोकन छिपा रहता है। नया टोकन तभी पेस्ट करें जब उसे बदलना हो।
8. **Webhook verify token** में वही टोकन रखें जो आपने Meta की वेबहुक सेटिंग्स में पेस्ट किया था।
9. **Save** पर क्लिक करें।

आपके बदलाव सिर्फ़ इसी नंबर पर लागू होते हैं।

!!! warning "स्थायी टोकन इस्तेमाल करें"
    अस्थायी टोकन 24 घंटे में एक्सपायर हो जाता है और मैसेजिंग रुक जाती है। अगर किसी नंबर पर **Access token expired or revoked** दिखे, तो **Fix now** पर क्लिक करें और नया स्थायी टोकन पेस्ट करें।

### काम के घंटे सेट करें { #set-working-hours }

1. सूची में नंबर पर क्लिक करें।
2. **Working hours** तक स्क्रॉल करें।
3. हर दिन को चालू या बंद करें, और खुलने व बंद होने का समय तय करें।

ये घंटे सिर्फ़ इस नंबर की चैट पर लागू होते हैं। देखें [कई व्हाट्सऐप नंबर चलाएँ](run-multiple-whatsapp-numbers.md)।

### Voice Calling चालू करें { #turn-on-voice-calling }

1. सूची में नंबर पर क्लिक करें।
2. **Call settings** तक स्क्रॉल करें और **WhatsApp voice calling** चालू करें।
3. पहले कॉलिंग का Meta वाला हिस्सा पूरा करें। देखें [व्हाट्सऐप कॉलिंग का इस्तेमाल करें](whatsapp-calling.md)।

कॉलिंग के लिए इस नंबर पर Meta Calling API का एक्सेस चाहिए। सिर्फ़ यह स्विच उसे नहीं देता। कॉल का शेड्यूल और जिन टीम सदस्यों को कॉल की घंटी बजती है, वे आपके सभी नंबरों पर लागू होते हैं।

### किसी नंबर को डिफ़ॉल्ट बनाएँ { #make-a-number-the-default }

1. सूची में नंबर पर क्लिक करें।
2. **Make default** पर क्लिक करें, फिर पुष्टि करें।

डिफ़ॉल्ट नंबर कैंपेन, ब्रॉडकास्ट और नए संपर्कों को पहले मैसेज भेजता है। जवाब हमेशा उसी नंबर से जाते हैं जिस पर ग्राहक ने लिखा था। किसी एक कैंपेन के लिए अलग नंबर इस्तेमाल करने के लिए उसे **Send from** में चुनें। देखें [व्हाट्सऐप ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)।

### किसी नंबर को डिसकनेक्ट करें { #disconnect-a-number }

1. सूची में नंबर पर क्लिक करें।
2. **Disconnect** पर क्लिक करें, फिर पुष्टि करें।

उसकी चैट इनबॉक्स में बनी रहती हैं। जब तक आपके पास दूसरे नंबर हैं, तब तक Default नंबर डिसकनेक्ट नहीं किया जा सकता। पहले किसी दूसरे नंबर को डिफ़ॉल्ट बनाएँ।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| लेबल सेव करने से मना कर दिया जाता है। | आपके बिज़नेस के किसी दूसरे नंबर का वही लेबल है। | कोई अलग लेबल लिखें। |
| **Unable to save configuration.** | सेव Ohanvi तक नहीं पहुँचा। | अपना कनेक्शन जाँचें और फिर **Save** पर क्लिक करें। |
| **Access token expired or revoked** | टोकन अस्थायी था या Meta में हटा दिया गया। | **Fix now** पर क्लिक करें और नया स्थायी टोकन पेस्ट करें। |
| **Make another number the default first, then disconnect this one.** | आपने Default नंबर को डिसकनेक्ट करने की कोशिश की। | किसी दूसरे नंबर को डिफ़ॉल्ट बनाएँ, फिर इसे डिसकनेक्ट करें। |
| आपको AI रिप्लाई या ऑटो-रिप्लाई की सेटिंग्स नहीं मिल रहीं। | अब वे इस स्क्रीन पर नहीं हैं। | देखें [इस स्क्रीन से क्या हट गया है](#what-moved-out-of-this-screen)। |

## संबंधित गाइड { #related }

- [कई व्हाट्सऐप नंबर चलाएँ](run-multiple-whatsapp-numbers.md)
- [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)
- [व्हाट्सऐप कॉलिंग का इस्तेमाल करें](whatsapp-calling.md)
- [व्हाट्सऐप AI एजेंट सेट करें](set-up-ai-agent.md)
- [व्हाट्सऐप वेबहुक और इंटीग्रेशन सेट करें](whatsapp-webhooks-and-integrations.md)
- [अपनी व्हाट्सऐप बिज़नेस प्रोफ़ाइल सेट करें](whatsapp-business-profile.md)
