---
title: कनेक्शन की सेहत जाँचें
description: कनेक्शन हेल्थ चेक चलाकर पता करें कि व्हाट्सऐप मैसेज क्यों नहीं जा रहे या नहीं आ रहे, और जो समस्या वह बताए उसे ठीक करें।
---

# कनेक्शन की सेहत जाँचें { #check-connection-health }

Connection Health आपके व्हाट्सऐप कनेक्शन को सीधे Meta के सामने परखता है। अंत में आप जान जाएँगे कि मैसेज जा सकते हैं और आ सकते हैं या नहीं, और जो भी फ़ेल हुआ उसका साफ़ समाधान आपके पास होगा। एक जाँच में कुछ सेकंड लगते हैं।

## शुरू करने से पहले { #before-you-start }

- आप **WhatsApp** पैनल में **Manage** खोल सकते हों। न खुले तो अपने एडमिन से पूछें।
- आपने Ohanvi में व्हाट्सऐप नंबर जोड़ा हो। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।

## चारों जाँचों का मतलब { #what-the-four-checks-mean }

| जाँच | यह क्या परखती है | फ़ेल होने का आम मतलब |
| --- | --- | --- |
| **Configuration** | कि आपके व्हाट्सऐप सेटअप में एक एक्सेस टोकन, एक WABA ID और एक Phone Number ID है। | कोई फ़ील्ड खाली है, या अभी कोई कॉन्फ़िगरेशन है ही नहीं। |
| **Access token & number** | कि Meta आपका टोकन मानता है और नंबर **CONNECTED** है। यह नंबर की क्वालिटी भी पढ़ती है। | टोकन खत्म हो गया या रद्द हो गया, Phone Number ID गलत है, या नंबर पर पाबंदी है। |
| **Webhook subscription** | कि आपका WhatsApp Business Account किसी ऐप से सब्सक्राइब है, और **messages** फ़ील्ड चालू है। | ग्राहकों के जवाब Ohanvi तक नहीं पहुँचते। |
| **Callback verify token** | कि वेबहुक का वेरिफ़ाई टोकन सेव है। | Meta आपके वेबहुक की पुष्टि नहीं कर पाता। |

!!! note "क्वालिटी रेटिंग"
    जब किसी नंबर की क्वालिटी **RED** पर पहुँच जाती है, तो Meta मैसेज भेजना सीमित या बंद कर देता है। अगर जाँच क्वालिटी के बारे में चेतावनी दे, तो कम मैसेज भेजें और अपनी भाषा नरम रखें।

## चरण { #steps }

### हेल्थ चेक चलाएँ { #run-the-health-check }

1. बाएँ रेल में **WhatsApp** खोलें, फिर **Manage** चुनें।
2. **Connection Health** चुनें। पेज का शीर्षक **Connection health** होता है, और यह जाँच शुरू कर देता है।

    ![Connection health, जिसमें Everything checks out और चार जाँचें दिख रही हैं: Configuration, Access token and number, Webhook subscription और Callback verify token](../assets/screenshots/whatsapp-connection-health-1-checks.png)

3. ऊपर की पंक्ति पढ़ें। **Everything checks out — messages should be sending normally.** का मतलब है कि सब ठीक है।
4. चारों जाँचें एक-एक करके पढ़ें। फ़ेल हुई जाँच बताती है कि क्या गड़बड़ हुई और उसे कैसे ठीक करना है।

### फ़ेल हुई जाँच ठीक करें { #fix-a-failed-check }

1. सूची में फ़ेल हुई जाँच ढूँढें।
2. उसकी ब्योरे वाली पंक्ति और समाधान वाली पंक्ति पढ़ें।
3. बदलाव करें। आम समाधान अगले हिस्सों में समझाए गए हैं।
4. **Re-check** पर क्लिक करें। पेज चारों जाँचें दोबारा चलाता है।

आम समाधान:

- **Configuration:** **Settings** → **WhatsApp** → **Configuration** खोलें। जो टोकन या ID छूटा है उसे भरें, फिर सेव करें। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- **Access token & number:** नया परमानेंट एक्सेस टोकन पेस्ट करें, और Phone Number ID जाँचें।
- **Webhook subscription:** वेबहुक दोबारा कनेक्ट करें। देखें [वेबहुक और इंटीग्रेशन](whatsapp-webhooks-and-integrations.md)।
- **Callback verify token:** यहाँ वही वेरिफ़ाई टोकन सेव करें जो आपने अपने Meta ऐप में डाला था।

### जाँच दोबारा चलाएँ { #run-the-check-again }

1. किसी भी समय **Re-check** पर क्लिक करें।
2. अगर जाँच चल नहीं सकी, तो **Retry** पर क्लिक करें।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **No WhatsApp configuration found for this organisation.** | अभी कोई नंबर जोड़ा नहीं गया है। | **Settings** → **WhatsApp** → **Configuration** में अपने Cloud API क्रेडेंशियल जोड़ें। |
| **Could not run the health check.** | Ohanvi सेवा तक नहीं पहुँच सका। | **Retry** पर क्लिक करें। |
| **The health check did not return a result.** | जाँच ने कुछ नहीं लौटाया। | **Re-check** पर क्लिक करें। |
| Meta ने अनुरोध ठुकरा दिया | एक्सेस टोकन खत्म हो गया है या रद्द हो गया है। | नया परमानेंट टोकन बनाएँ और उसे **Configuration** में सेव करें। |
| This WABA is not subscribed to any app | Meta आने वाले मैसेज Ohanvi को नहीं भेजता। | अकाउंट को दोबारा सब्सक्राइब करें। देखें [वेबहुक और इंटीग्रेशन](whatsapp-webhooks-and-integrations.md)। |
| **messages** फ़ील्ड नहीं है | वेबहुक सब्सक्राइब है, पर messages के लिए नहीं। | अपने Meta ऐप में **messages** फ़ील्ड चालू करें। |

## संबंधित गाइड { #related }

- [कनेक्शन की सेहत, अलर्ट और व्हाट्सऐप बिलिंग देखें](health-notifications-and-billing.md)
- [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)
- [नोटिफ़िकेशन की पसंद सेट करें](set-notification-preferences.md)
- [वेबहुक और इंटीग्रेशन](whatsapp-webhooks-and-integrations.md)
