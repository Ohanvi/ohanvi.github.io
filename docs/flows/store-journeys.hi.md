---
title: फ़्लो से स्टोर के संदेश ऑटोमेट करें
description: ऑर्डर कन्फ़र्मेशन, छोड़े गए चेकआउट की वापसी और COD वेरिफ़िकेशन जैसे तैयार स्टोर ऑटोमेशन पूरे करके पब्लिश करें, या स्टोर इवेंट से अपना बनाएँ।
---

# फ़्लो से स्टोर के संदेश ऑटोमेट करें { #automate-store-messages-with-flows }

जब आपके स्टोर में कुछ होता है, जैसे नया ऑर्डर या अधूरा चेकआउट, तब खरीदारों को व्हाट्सऐप मैसेज भेजें। आखिर में आपके चुने हुए स्टोर ऑटोमेशन जाँचे हुए, टेस्ट किए हुए और असली ऑर्डर पर चालू होंगे।

## शुरू करने से पहले { #before-you-start }

- आपका Shopify या WooCommerce स्टोर **Connect** → **Store Connections** में कनेक्ट हो। कनेक्टेड स्टोर पर **Connected** और **WhatsApp Automations** लिंक दिखता है।

    ![Shopify, WooCommerce, Wix और Zoho Commerce कार्ड के साथ Store Connections](../assets/screenshots/flows-store-1-store-connections.png)
- आपका व्हाट्सऐप नंबर कनेक्ट हो।
- हर ऑटोमेशन जो व्हाट्सऐप टेम्प्लेट भेजता है, वह Meta से Approved हो। उन्हें **WhatsApp** → **Template** में जाँचें।
- आप **Flows** खोल सकें और फ़्लो पब्लिश कर सकें। देखें [फ़्लो और फ़्लो की सूची को समझें](flows-overview-and-list.md)।

## तैयार स्टोर ऑटोमेशन { #the-ready-made-store-automations }

जब आप **Flows** खोलते हैं, Ohanvi 12 स्टोर ऑटोमेशन ड्राफ़्ट के रूप में जोड़ देता है। जब तक आप उन्हें पब्लिश नहीं करते, वे कुछ नहीं भेजते। हर एक Shopify और WooCommerce स्टोर के लिए काम करता है।

| ऑटोमेशन | यह क्या करता है |
| --- | --- |
| **Welcome new customer** | जब कोई खरीदार पहली बार स्टोर का ग्राहक बनता है, तब उसका स्वागत करता है। |
| **Browse nudge** | खरीदार को उस प्रोडक्ट की याद दिलाता है जो उसने देखा पर खरीदा नहीं। |
| **Order confirmation** | नया ऑर्डर होने पर ऑर्डर कन्फ़र्मेशन भेजता है। |
| **Abandoned checkout recovery** | खरीदार के चेकआउट छोड़ने के 45 मिनट बाद, फिर एक दिन बाद और 2 दिन और बाद उसे मैसेज करता है। ऑर्डर करते ही रुक जाता है। |
| **Payment failed** | खरीदार को बताता है कि उसका पेमेंट नहीं हो पाया। |
| **Order shipped** | ऑर्डर भेजे जाने पर ट्रैकिंग की जानकारी भेजता है। |
| **Out for delivery** | खरीदार को बताता है कि उसका पार्सल आज डिलीवरी के लिए निकला है। |
| **Delivered confirmation** | कैरियर के बताने पर डिलीवरी की पुष्टि करता है। |
| **COD verification** | डिस्पैच से पहले खरीदार से कैश-ऑन-डिलीवरी ऑर्डर कन्फ़र्म करने को कहता है। |
| **Cancellation and refund update** | खरीदार को बताता है कि उसका ऑर्डर रद्द हो गया। |
| **Review request** | डिलीवरी के 3 दिन बाद रिव्यू माँगता है। |
| **Reorder reminder** | डिलीवरी के एक महीने बाद खरीदार को दोबारा ऑर्डर करने की याद दिलाता है। |

**Welcome new customer**, **Browse nudge** और **Reorder reminder** मार्केटिंग मैसेज हैं। इन्हें सिर्फ़ उन संपर्कों को भेजें जिन्होंने ऑप्ट-इन किया है।

## चरण { #steps }

### स्टोर ऑटोमेशन खोजें { #find-the-store-automations }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Flows** चुनें।
2. प्रकार वाला ड्रॉप-डाउन खोलें और **Automations** चुनें।
3. **Draft** पिल पर क्लिक करें। स्टोर ऑटोमेशन दूसरे ड्राफ़्ट के साथ सूची में दिखते हैं।

अगर आपका स्टोर या व्हाट्सऐप अभी कनेक्ट नहीं है, तो पंक्ति का स्टेटस **Inactive** दिखता है। उसके पैनल में **Connect WhatsApp to turn these automations on.** जैसा एक नोट और **Connect store** या **Connect WhatsApp** बटन दिखता है।

### ऑटोमेशन जाँचें और पूरा करें { #check-and-finish-an-automation }

1. ऑटोमेशन की पंक्ति पर क्लिक करें, फिर **Open builder** पर क्लिक करें।
2. हर चरण पर क्लिक करें और उसका **Setup** टैब पढ़ें। टेम्प्लेट का नाम और जो वैल्यू वह भेजता है, उन्हें जाँचें।
3. जो भी फ़ील्ड खाली है उसे भरें। जैसे, **Review request** को आपका रिव्यू लिंक चाहिए, और **Welcome new customer** को आपके स्टोर का नाम।
4. **COD verification** के लिए जाँचें कि कंडीशन आपके चेकआउट में कैश-ऑन-डिलीवरी के नाम से मेल खाती है। ड्राफ़्ट `Cash on Delivery` खोजता है।
5. **Save** पर क्लिक करें।

### पब्लिश करें और चालू करें { #publish-and-turn-it-on }

1. ऊपर की बार में **Publish** पर क्लिक करें।
2. मैसेज पढ़ें। **Published and live — new runs use this version.** का मतलब है कि अब यह असली ऑर्डर पर चल रहा है।
3. जितने ऑटोमेशन चाहिए, उतने के लिए यही दोहराएँ।

आप सूची से भी पब्लिश कर सकते हैं: पंक्ति पर क्लिक करें, फिर **Publish & turn on** पर क्लिक करें।

!!! warning "लाइव ऑटोमेशन असली खरीदारों को मैसेज करते हैं"
    अब से हर मेल खाते स्टोर इवेंट पर एक व्हाट्सऐप मैसेज जाता है। भेजे जा चुके मैसेज वापस नहीं लिए जा सकते।

### रिफ़ंड को भी कवर करें, सिर्फ़ रद्द करने को नहीं { #cover-refunds-as-well-as-cancellations }

1. सूची में **Cancellation and refund update** पर क्लिक करें, **More** (**…**) खोलें और **Duplicate** पर क्लिक करें।
2. कॉपी में ट्रिगर नोड पर क्लिक करें और **Which event** को **A refund is issued** कर दें।
3. टेम्प्लेट को अपने रिफ़ंड मैसेज वाले टेम्प्लेट से बदलें, फिर सेव और पब्लिश करें।

### अपना स्टोर ऑटोमेशन बनाएँ { #build-your-own-store-automation }

1. **New flow** पर क्लिक करें, फिर **Add first step…**, फिर **Run by hand** पर।
2. **When this runs** में **When something happens here** चुनें।
3. **Which event** में कोई स्टोर इवेंट चुनें, जैसे **A new store order is placed** या **A shopper leaves a checkout unfinished**। पैनल दिखाता है कि इवेंट किस स्टोर से आता है।
4. **Action** चरण जोड़ें और **Send a WhatsApp template** चुनें। **Send to** में ट्रिगर से खरीदार का फ़ोन सेट करें, और **Template name** लिखें।
5. ज़रूरत हो तो **Wait** या **Continue only if…** चरण जोड़ें। यह जाँचने के लिए कि खरीदार ने तब से ऑर्डर नहीं किया है, कंडीशन से पहले **Check if they ordered recently** जोड़ें।
6. सेव और पब्लिश करें। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)।

### चैटबॉट के अंदर स्टोर एक्शन इस्तेमाल करें { #use-store-actions-inside-a-chatbot }

चैटबॉट व्हाट्सऐप बातचीत के दौरान ऑर्डर खोज सकता है। बिल्डर में **All steps** पर क्लिक करें और **Store actions** के नीचे देखें:

- **Order status**, **Cancel order**, **Reorder**, **Confirm address**, **COD check**, **COD to prepaid**, **Book appointment**

हर एक के हर नतीजे के लिए एक आउटकम होता है, जैसे मिला या नहीं मिला, जिसे आप अगले मैसेज से जोड़ते हैं। ग्राहक को पहले ऑर्डर चुनने देने के लिए **Advanced** से **Pick a recent order** या **Pick an open order** जोड़ें। चैटबॉट बनाने के लिए देखें [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Connect WhatsApp before publishing — this flow sends a WhatsApp message and there is no WhatsApp number to send it from.** | व्हाट्सऐप कनेक्ट नहीं है। | फ़्लो के पैनल में **Connect WhatsApp** पर क्लिक करें, कनेक्ट करें, फिर पब्लिश करें। |
| **Connect your store before publishing — nothing raises this flow's trigger until a store is connected.** | कोई स्टोर कनेक्ट नहीं है। | **Connect store** पर क्लिक करें, Shopify या WooCommerce कनेक्ट करें, फिर पब्लिश करें। |
| **The template '…' is not approved by Meta yet, so this flow cannot send it. Wait for approval, then publish.** | टेम्प्लेट मौजूद नहीं है या Meta के अप्रूवल का इंतज़ार कर रहा है। | **WhatsApp** → **Template** में टेम्प्लेट बनाएँ या ठीक करें, अप्रूवल का इंतज़ार करें, फिर पब्लिश करें। |
| **Out for delivery**, **Delivered confirmation**, **Review request** या **Reorder reminder** कभी नहीं चलते | स्टोर कैरियर के पड़ावों की जानकारी नहीं देते। ये ऐसे शिपिंग इंटीग्रेशन का इंतज़ार करते हैं जो उन्हें भेजे। | इसकी जगह **Order shipped** इस्तेमाल करें, या ऐसा शिपिंग इंटीग्रेशन कनेक्ट करें जो डिलीवरी की जानकारी देता हो। |
| COD वाले खरीदारों को COD मैसेज नहीं मिलता | आपका चेकआउट कैश-ऑन-डिलीवरी को किसी दूसरे नाम से लिखता है। | **COD verification** खोलें, कंडीशन की वैल्यू अपने चेकआउट के हिसाब से बदलें, फिर पब्लिश करें। |
| डिलीट किया हुआ स्टोर ऑटोमेशन वापस नहीं आता | आर्काइव किए ऑटोमेशन दोबारा नहीं बनते। | उसे स्टोर इवेंट से खुद बनाएँ, या किसी मिलते-जुलते ऑटोमेशन को डुप्लिकेट करें। |

## संबंधित गाइड { #related }

- [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)
- [रन टेस्ट करें और ठीक करें](test-and-monitor-flows.md)
- [फ़्लो और फ़्लो की सूची को समझें](flows-overview-and-list.md)
- [स्टोर एनालिटिक्स](../analytics/read-store-analytics.md)
