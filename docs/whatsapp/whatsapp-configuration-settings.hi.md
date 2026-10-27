---
title: WhatsApp नंबर एडिट करें
description: किसी नंबर की जानकारी खोलें, उसका लेबल, बैज, ID, टोकन और API वर्शन बदलें, कॉलिंग सेट करें, और नंबर को डिफ़ॉल्ट बनाएँ या डिसकनेक्ट करें।
---

# WhatsApp नंबर एडिट करें { #edit-a-whatsapp-number }

कोई कनेक्टेड नंबर खोलें और उसका नाम, बैज, ID और एक्सेस टोकन बदलें। आखिर में आपके बदलाव सेव हो जाएँगे और नंबर आपके हिसाब से सेट हो जाएगा। एक से ज़्यादा नंबर चलाने हों, तो देखें [कई WhatsApp नंबर चलाएँ](run-multiple-whatsapp-numbers.md)।

## शुरू करने से पहले { #before-you-start }

- आपका WhatsApp नंबर Ohanvi से कनेक्ट है। देखें [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आप **Settings** → **WhatsApp** → **Configuration** खोल सकते हैं। न खुले, तो अपने एडमिन से WhatsApp का एक्सेस माँगें।
- अगर आप Meta वाली जानकारी बदलना चाहते हैं, तो वह हाथ में रखें: **Phone Number ID**, **WABA ID**, **Business ID** और परमानेंट एक्सेस टोकन। ये सब Meta Business Settings में मिलते हैं।

## इस स्क्रीन से क्या हट गया है { #what-moved-out-of-this-screen }

ये सेटिंग्स पहले कॉन्फ़िगरेशन फ़ॉर्म में थीं। अब ये अपनी अलग जगह पर हैं।

| सेटिंग | अब कहाँ है |
| --- | --- |
| AI रिप्लाई एजेंट और ऑटो-रिप्लाई | AI Assistant हब में मैनेज होते हैं। देखें [WhatsApp AI एजेंट सेट करें](set-up-ai-agent.md)। |
| ऑप्ट-आउट शब्द | **WhatsApp** → **Manage** → **Opt-in Management**। देखें [ऑप्ट-इन और ऑप्ट-आउट शब्द मैनेज करें](manage-opt-in-and-opt-out-words.md)। |
| वेलकम मैसेज | **WhatsApp** → **Manage** → **Live Chat Settings**। देखें [लाइव चैट सेटिंग्स सेट करें](set-up-live-chat-settings.md)। |

## स्टेप्स { #steps }

### कोई नंबर खोलें { #open-a-number }

1. नीचे बाएँ कोने में अपने नाम के पहले अक्षरों पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. **WhatsApp** चुनें, फिर **Configuration**। पेज का टाइटल **WhatsApp numbers** है।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![WhatsApp numbers with the list of numbers on the left and the detail pane on the right](../assets/screenshots/whatsapp-numbers-1-list.png) -->

3. लिस्ट में नंबर पर क्लिक करें। उसकी जानकारी दाईं ओर खुलती है। ऊपर **Make default**, **Edit** और **Disconnect** बटन होते हैं।

नया नंबर जोड़ना हो, तो **Add number** पर क्लिक करें। देखें [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)।

### लेबल और बैज बदलें { #change-the-label-and-badge }

1. **Edit** पर क्लिक करें। उस नंबर की विंडो खुलती है।
2. **Label** में ऐसा नाम लिखें जो सिर्फ़ आपकी टीम को दिखे, जैसे `Sales`। इसका पहला अक्षर बैज बनता है, जो इनबॉक्स में हर मैसेज पर दिखता है। लेबल में 30 अक्षर तक लिख सकते हैं।
3. **Badge colour** में **blue**, **purple**, **teal**, **orange** या **gold** चुनें।

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![Edit window with the label, the badge preview, the badge colour choices and the number's IDs](../assets/screenshots/whatsapp-numbers-6-edit.png) -->

आपके बिज़नेस के हर नंबर का लेबल अलग होना चाहिए।

### नंबर की जानकारी जाँचें { #check-the-number-details }

उसी विंडो में इस नंबर की जानकारी जाँचें।

1. **Business name** में बिज़नेस का नाम लिखें।
2. **Display phone number** में कंट्री कोड के साथ नंबर लिखें।
3. **Phone Number ID** में Meta से ली हुई ID पेस्ट करें।
4. **WABA ID** में अपनी WhatsApp Business Account ID पेस्ट करें।
5. **Business Manager ID** में अपनी Meta Business Manager ID पेस्ट करें।
6. **Graph API version** में वर्शन चुनें।
7. **Access token** में Meta से मिला परमानेंट टोकन पेस्ट करें। आप जो लिखते हैं, वह फ़ील्ड में छिपा रहता है। सेव किया हुआ टोकन भी छिपा रहता है। नया टोकन तभी पेस्ट करें जब पुराना बदलना हो।
8. **Webhook verify token** में वही टोकन रहने दें जो आपने Meta की वेबहुक सेटिंग्स में डाला था।
9. **Save** पर क्लिक करें।

आपके बदलाव सिर्फ़ इसी नंबर पर लागू होते हैं।

!!! warning "परमानेंट टोकन इस्तेमाल करें"
    टेम्परेरी टोकन 24 घंटे में एक्सपायर हो जाता है, और फिर मैसेजिंग रुक जाती है। किसी नंबर पर **Access token expired or revoked** दिखे, तो **Fix now** पर क्लिक करें और नया परमानेंट टोकन पेस्ट करें।

### काम के घंटे सेट करें { #set-working-hours }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Working hours** तक स्क्रॉल करें।
3. हर दिन को चालू या बंद करें, और खुलने व बंद होने का समय सेट करें।

ये घंटे सिर्फ़ इस नंबर की चैट पर लागू होते हैं। देखें [कई WhatsApp नंबर चलाएँ](run-multiple-whatsapp-numbers.md)।

### Voice Calling चालू करें { #turn-on-voice-calling }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Call settings** तक स्क्रॉल करें और **WhatsApp voice calling** चालू करें।
3. पहले कॉलिंग का Meta वाला काम पूरा करें। देखें [WhatsApp कॉलिंग का इस्तेमाल करें](whatsapp-calling.md)।

कॉलिंग के लिए इस नंबर पर Meta Calling API का एक्सेस चाहिए। सिर्फ़ यह स्विच चालू करने से वह एक्सेस नहीं मिलता। कॉल का शेड्यूल और रिंग पाने वाले टीम मेंबर आपके सभी नंबरों पर लागू होते हैं।

### किसी नंबर को डिफ़ॉल्ट बनाएँ { #make-a-number-the-default }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Make default** पर क्लिक करें, फिर कन्फ़र्म करें।

डिफ़ॉल्ट नंबर से कैंपेन, ब्रॉडकास्ट और नए कॉन्टैक्ट को पहला मैसेज जाता है। जवाब हमेशा उसी नंबर से जाते हैं जिस पर ग्राहक ने मैसेज किया था। किसी एक कैंपेन के लिए दूसरा नंबर इस्तेमाल करना हो, तो उसे **Send from** में चुनें। देखें [WhatsApp ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)।

### किसी नंबर को डिसकनेक्ट करें { #disconnect-a-number }

1. लिस्ट में नंबर पर क्लिक करें।
2. **Disconnect** पर क्लिक करें, फिर कन्फ़र्म करें।

उसकी चैट इनबॉक्स में बनी रहती हैं। अगर आपके पास और नंबर हैं, तो Default नंबर डिसकनेक्ट नहीं हो सकता। पहले किसी दूसरे नंबर को डिफ़ॉल्ट बनाएँ।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| लेबल सेव नहीं हो रहा। | आपके बिज़नेस के किसी दूसरे नंबर का यही लेबल है। | कोई और लेबल लिखें। |
| **Unable to save configuration.** | सेव Ohanvi तक नहीं पहुँचा। | अपना इंटरनेट देखें और दोबारा **Save** पर क्लिक करें। |
| **Access token expired or revoked** | टोकन टेम्परेरी था, या Meta में हटा दिया गया। | **Fix now** पर क्लिक करें और नया परमानेंट टोकन पेस्ट करें। |
| **Make another number the default first, then disconnect this one.** | आपने Default नंबर को डिसकनेक्ट करने की कोशिश की। | पहले किसी दूसरे नंबर को डिफ़ॉल्ट बनाएँ, फिर इसे डिसकनेक्ट करें। |
| AI रिप्लाई या ऑटो-रिप्लाई की सेटिंग्स नहीं मिल रहीं। | अब ये इस स्क्रीन पर नहीं हैं। | देखें [इस स्क्रीन से क्या हट गया है](#what-moved-out-of-this-screen)। |

## संबंधित गाइड { #related }

- [कई WhatsApp नंबर चलाएँ](run-multiple-whatsapp-numbers.md)
- [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)
- [WhatsApp कॉलिंग का इस्तेमाल करें](whatsapp-calling.md)
- [WhatsApp AI एजेंट सेट करें](set-up-ai-agent.md)
- [WhatsApp वेबहुक और इंटीग्रेशन सेट करें](whatsapp-webhooks-and-integrations.md)
- [अपनी WhatsApp बिज़नेस प्रोफ़ाइल सेट करें](whatsapp-business-profile.md)
