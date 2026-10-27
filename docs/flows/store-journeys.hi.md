---
title: फ़्लो से स्टोर के मैसेज ऑटोमेट करें
description: ऑर्डर कन्फ़र्मेशन, छोड़े हुए चेकआउट की याद दिलाना और COD वेरिफ़िकेशन जैसे तैयार स्टोर ऑटोमेशन पूरे करके पब्लिश करें। या स्टोर इवेंट से अपना ऑटोमेशन बनाएँ।
---

# फ़्लो से स्टोर के मैसेज ऑटोमेट करें { #automate-store-messages-with-flows }

आपके स्टोर में कुछ होने पर खरीदारों को WhatsApp मैसेज भेजें, जैसे नया ऑर्डर आना या चेकआउट अधूरा छूट जाना। इस गाइड के अंत तक आपके चुने हुए स्टोर ऑटोमेशन जाँचे और टेस्ट किए जा चुके होंगे, और असली ऑर्डर पर चल रहे होंगे।

## शुरू करने से पहले { #before-you-start }

- आपका Shopify या WooCommerce स्टोर **Connect** → **Store Connections** में कनेक्ट हो। कनेक्ट हुए स्टोर पर **Connected** और **WhatsApp Automations** लिंक दिखता है।

    ![Shopify, WooCommerce, Wix और Zoho Commerce कार्ड के साथ Store Connections](../assets/screenshots/flows-store-1-store-connections.png)
- आपका WhatsApp नंबर कनेक्ट हो।
- हर ऑटोमेशन जो WhatsApp टेम्प्लेट भेजता है, वह Meta से Approved हो। इन्हें **WhatsApp** → **Template** में देख लें।
- आप **Flows** खोल सकें और फ़्लो पब्लिश कर सकें। देखें [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)।

## तैयार स्टोर ऑटोमेशन { #the-ready-made-store-automations }

आप **Flows** खोलते हैं, तो Ohanvi 12 स्टोर ऑटोमेशन ड्राफ़्ट के रूप में जोड़ देता है। जब तक आप इन्हें पब्लिश नहीं करते, ये कुछ नहीं भेजते। हर ऑटोमेशन Shopify और WooCommerce, दोनों स्टोर के लिए चलता है।

| ऑटोमेशन | यह क्या करता है |
| --- | --- |
| **Welcome new customer** | कोई खरीदार पहली बार आपके स्टोर का ग्राहक बने, तो उसका स्वागत करता है। |
| **Browse nudge** | खरीदार ने जो प्रोडक्ट देखा पर खरीदा नहीं, उसकी याद दिलाता है। |
| **Order confirmation** | नया ऑर्डर होते ही ऑर्डर कन्फ़र्मेशन भेजता है। |
| **Abandoned checkout recovery** | खरीदार के चेकआउट छोड़ने के 45 मिनट बाद मैसेज भेजता है। फिर एक दिन बाद और उसके 2 दिन बाद भेजता है। खरीदार ऑर्डर कर दे, तो तुरंत रुक जाता है। |
| **Payment failed** | खरीदार को बताता है कि उसका पेमेंट नहीं हो पाया। |
| **Order shipped** | ऑर्डर भेजते ही ट्रैकिंग की जानकारी भेजता है। |
| **Out for delivery** | खरीदार को बताता है कि उसका पार्सल आज डिलीवरी के लिए निकला है। |
| **Delivered confirmation** | कैरियर से डिलीवरी की खबर आने पर डिलीवरी कन्फ़र्म करता है। |
| **COD verification** | माल भेजने से पहले खरीदार से कैश-ऑन-डिलीवरी ऑर्डर कन्फ़र्म करवाता है। |
| **Cancellation and refund update** | खरीदार को बताता है कि उसका ऑर्डर कैंसिल हो गया। |
| **Review request** | डिलीवरी के 3 दिन बाद रिव्यू माँगता है। |
| **Reorder reminder** | डिलीवरी के एक महीने बाद खरीदार को दोबारा ऑर्डर करने की याद दिलाता है। |

**Welcome new customer**, **Browse nudge** और **Reorder reminder** मार्केटिंग मैसेज हैं। इन्हें सिर्फ़ उन कॉन्टैक्ट को भेजें जिन्होंने ऑप्ट-इन किया है।

## स्टेप { #steps }

### स्टोर ऑटोमेशन ढूँढें { #find-the-store-automations }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Flows** चुनें।
2. फ़्लो के प्रकार वाला ड्रॉप-डाउन खोलें और **Automations** चुनें।
3. **Draft** पिल पर क्लिक करें। स्टोर ऑटोमेशन बाकी ड्राफ़्ट के साथ लिस्ट में दिखते हैं।

आपका स्टोर या WhatsApp अभी कनेक्ट न हो, तो लाइन का स्टेटस **Inactive** दिखता है। उसके पैनल में **Connect WhatsApp to turn these automations on.** जैसा एक नोट आता है। साथ में **Connect store** या **Connect WhatsApp** बटन भी दिखता है।

### ऑटोमेशन जाँचें और पूरा करें { #check-and-finish-an-automation }

1. ऑटोमेशन की लाइन पर क्लिक करें, फिर **Open builder** पर क्लिक करें।
2. हर स्टेप पर क्लिक करें और उसका **Setup** टैब पढ़ें। टेम्प्लेट का नाम और जो वैल्यू वह भेजता है, उन्हें जाँचें।
3. जो फ़ील्ड खाली है, उसे भरें। जैसे **Review request** में आपका रिव्यू लिंक चाहिए, और **Welcome new customer** में आपके स्टोर का नाम।
4. **COD verification** में देखें कि कंडीशन आपके चेकआउट के कैश-ऑन-डिलीवरी वाले नाम से मेल खाती है। ड्राफ़्ट `Cash on Delivery` ढूँढता है।
5. **Save** पर क्लिक करें।

### पब्लिश करें और चालू करें { #publish-and-turn-it-on }

1. ऊपर की बार में **Publish** पर क्लिक करें।
2. मैसेज पढ़ें। **Published and live — new runs use this version.** का मतलब है कि अब यह असली ऑर्डर पर चलेगा।
3. जितने ऑटोमेशन चाहिए, उन सबके लिए यही दोहराएँ।

लिस्ट से भी पब्लिश कर सकते हैं। लाइन पर क्लिक करें, फिर **Publish & turn on** पर क्लिक करें।

!!! warning "लाइव ऑटोमेशन असली खरीदारों को मैसेज करते हैं"
    अब से हर मिलते-जुलते स्टोर इवेंट पर WhatsApp मैसेज जाएगा। जो मैसेज चला गया, वह वापस नहीं लिया जा सकता।

### सिर्फ़ कैंसिल नहीं, रिफ़ंड भी कवर करें { #cover-refunds-as-well-as-cancellations }

1. लिस्ट में **Cancellation and refund update** पर क्लिक करें, **More** (**…**) खोलें और **Duplicate** पर क्लिक करें।
2. कॉपी में ट्रिगर नोड पर क्लिक करें और **Which event** को बदलकर **A refund is issued** चुनें।
3. टेम्प्लेट को अपने रिफ़ंड वाले मैसेज के टेम्प्लेट से बदलें। फिर सेव और पब्लिश करें।

### अपना स्टोर ऑटोमेशन बनाएँ { #build-your-own-store-automation }

1. **New flow** पर क्लिक करें, फिर **Add first step…**, फिर **Run by hand** पर क्लिक करें।
2. **When this runs** में **When something happens here** चुनें।
3. **Which event** में कोई स्टोर इवेंट चुनें, जैसे **A new store order is placed** या **A shopper leaves a checkout unfinished**। पैनल में दिखता है कि यह इवेंट किस स्टोर से आता है।
4. **Action** स्टेप जोड़ें और **Send a WhatsApp template** चुनें। **Send to** में ट्रिगर से खरीदार का फ़ोन नंबर चुनें और **Template name** लिखें।
5. ज़रूरत हो, तो **Wait** या **Continue only if…** स्टेप जोड़ें। यह जाँचना हो कि खरीदार ने इस बीच ऑर्डर तो नहीं कर दिया, तो कंडीशन से पहले **Check if they ordered recently** जोड़ें।
6. सेव और पब्लिश करें। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)।

### चैटबॉट में स्टोर एक्शन इस्तेमाल करें { #use-store-actions-inside-a-chatbot }

चैटबॉट WhatsApp पर बातचीत के बीच ऑर्डर ढूँढ सकता है। बिल्डर में **All steps** पर क्लिक करें और **Store actions** के नीचे देखें:

- **Order status**, **Cancel order**, **Reorder**, **Confirm address**, **COD check**, **COD to prepaid**, **Book appointment**

हर एक्शन के हर नतीजे के लिए एक आउटकम होता है, जैसे ऑर्डर मिला या नहीं मिला। इस आउटकम को अगले मैसेज से जोड़ें। ग्राहक को पहले ऑर्डर चुनने देना हो, तो **Advanced** से **Pick a recent order** या **Pick an open order** जोड़ें। चैटबॉट बनाने के लिए देखें [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Connect WhatsApp before publishing — this flow sends a WhatsApp message and there is no WhatsApp number to send it from.** | WhatsApp कनेक्ट नहीं है। | फ़्लो के पैनल में **Connect WhatsApp** पर क्लिक करें, कनेक्ट करें, फिर पब्लिश करें। |
| **Connect your store before publishing — nothing raises this flow's trigger until a store is connected.** | कोई स्टोर कनेक्ट नहीं है। | **Connect store** पर क्लिक करें, Shopify या WooCommerce कनेक्ट करें, फिर पब्लिश करें। |
| **The template '…' is not approved by Meta yet, so this flow cannot send it. Wait for approval, then publish.** | टेम्प्लेट बना ही नहीं है, या Meta के अप्रूवल का इंतज़ार कर रहा है। | **WhatsApp** → **Template** में टेम्प्लेट बनाएँ या ठीक करें, अप्रूवल का इंतज़ार करें, फिर पब्लिश करें। |
| **Out for delivery**, **Delivered confirmation**, **Review request** या **Reorder reminder** कभी नहीं चलते | स्टोर कैरियर के पड़ाव की जानकारी नहीं भेजते। ये ऑटोमेशन ऐसे शिपिंग इंटीग्रेशन का इंतज़ार करते हैं जो यह जानकारी भेजे। | इनकी जगह **Order shipped** इस्तेमाल करें, या ऐसा शिपिंग इंटीग्रेशन कनेक्ट करें जो डिलीवरी की जानकारी भेजता हो। |
| COD वाले खरीदारों को COD मैसेज नहीं मिलता | आपका चेकआउट कैश-ऑन-डिलीवरी को किसी और नाम से लिखता है। | **COD verification** खोलें, कंडीशन की वैल्यू अपने चेकआउट के नाम के हिसाब से बदलें, फिर पब्लिश करें। |
| डिलीट किया हुआ स्टोर ऑटोमेशन वापस नहीं आता | आर्काइव हो चुके ऑटोमेशन दोबारा नहीं बनते। | उसे स्टोर इवेंट से खुद बनाएँ, या किसी मिलते-जुलते ऑटोमेशन को डुप्लिकेट करें। |

## संबंधित गाइड { #related }

- [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)
- [फ़्लो टेस्ट करें और फ़ेल रन ठीक करें](test-and-monitor-flows.md)
- [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)
- [स्टोर एनालिटिक्स](../analytics/read-store-analytics.md)
