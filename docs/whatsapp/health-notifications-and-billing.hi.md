---
title: कनेक्शन हेल्थ, अलर्ट और WhatsApp बिलिंग देखें
description: देखें कि आपका नंबर मैसेज भेज पा रहा है या नहीं, तय करें कि किन WhatsApp इवेंट पर और कब अलर्ट मिले, और जानें कि WhatsApp मैसेज का पेमेंट Meta को कैसे होता है।
---

# कनेक्शन हेल्थ, अलर्ट और WhatsApp बिलिंग देखें { #check-connection-health-alerts-and-whatsapp-billing }

तीन WhatsApp सेटिंग्स आपका अकाउंट चलता रखती हैं। **Connection Health** बताता है कि मैसेज जा पा रहे हैं या नहीं। **Notification Preferences** तय करता है कि किन इवेंट पर आपको अलर्ट मिलेगा। **Billing & Usage** दिखाता है कि आप Meta को पेमेंट कैसे करते हैं। इसके बाद आपको पता होगा कि नंबर ठीक चल रहा है, अलर्ट सेट हैं, और WhatsApp इस्तेमाल का बिल कैसे बनता है।

## शुरू करने से पहले { #before-you-start }

- आपका रोल WhatsApp **Manage** खोल सकता हो। देखें [टीम मेंबर, रोल और अनुमतियाँ मैनेज करें](../settings/roles-and-permissions.md)।

## स्टेप { #steps }

### कनेक्शन हेल्थ देखें { #check-connection-health }

1. लेफ़्ट रेल में **WhatsApp** खोलें, **Manage** चुनें, फिर **Connection Health** चुनें।
2. सबसे ऊपर का नतीजा पढ़ें। **Everything checks out — messages should be sending normally.** दिखे, तो सब ठीक है।
3. हर चेक पढ़ें: **Configuration**, **Access token & number** (इसमें आपके नंबर की क्वालिटी भी दिखती है), **Webhook subscription** और **Callback verify token**।
4. कुछ ठीक करने के बाद **Re-check** पर क्लिक करें।

![Connection Health, जिसमें Everything checks out और चारों चेक दिख रहे हैं](../assets/screenshots/whatsapp-manage-6-connection-health.png)

### अपने WhatsApp अलर्ट चुनें { #choose-your-whatsapp-alerts }

1. **Manage** में **Notification Preferences** चुनें। आप जो भी बदलें, वह अपने आप सेव हो जाता है।
2. अपने अलर्ट सेट करने के लिए **My alerts** को चुना रहने दें। **Workspace default** में पूरे वर्कस्पेस की डिफ़ॉल्ट सेटिंग होती है।
3. हर इवेंट के लिए **In-app**, **Push** और **Email** को चालू या बंद करें:

    | इवेंट | अलर्ट कब आता है |
    | --- | --- |
    | **New message** | कोई ग्राहक आपको WhatsApp मैसेज भेजता है। |
    | **Chat needs a human** | बॉट कोई चैट आपकी टीम को दे देता है। |
    | **Chat taken over** | आपकी टीम का कोई साथी किसी चैट में खुद जवाब देने लगता है। |
    | **Missed call** | कोई ग्राहक WhatsApp पर कॉल करता है और कोई नहीं उठाता। |
    | **Broadcast finished** | कोई Campaign सभी को भेजा जा चुका है। |
    | **Scheduled send fired** | शेड्यूल किया हुआ Broadcast या मैसेज जाना शुरू होता है। |

4. चाहें तो **Quiet hours** चालू करें और **From** और **to** चुनें, जैसे रात 9:00 बजे से सुबह 9:00 बजे तक। इस दौरान Push और ईमेल रुक जाते हैं। ऐप के अंदर की घंटी में अलर्ट जमा होते रहते हैं, इसलिए कुछ छूटता नहीं।
5. सभी स्विच एक साथ बदलने के लिए **Mute all** या **Enable all** दबाएँ। डिफ़ॉल्ट पर लौटना हो, तो **Follow workspace default** दबाएँ।

![Notification Preferences, जिसमें My alerts, छह इवेंट, In-app, Push और Email के स्विच, और Quiet hours दिख रहे हैं](../assets/screenshots/whatsapp-manage-7-notifications.png)

Ohanvi के दूसरे हिस्सों के नोटिफ़िकेशन के लिए देखें [नोटिफ़िकेशन आप तक कैसे पहुँचें, यह चुनें](../settings/notification-preferences.md)।

### देखें कि Meta को पेमेंट कैसे होता है { #see-how-you-pay-meta }

1. **Manage** में **Billing & Usage** चुनें।
2. **WhatsApp (Meta)** या **AI Smart Replies** चुनें। फिर समय चुनें: **7d**, **30d** या **90d**।
3. **How you pay Meta** के नीचे देखें कि कौन-सा विकल्प चुना हुआ है:
    - **Pay through Ohanvi**: Ohanvi पहले अपनी तरफ़ से Meta की क्रेडिट लाइन भरता है। आपके क्रेडिट से Meta का रेट और Ohanvi का कमीशन कटता है।
    - **Pay Meta directly**: आप अपने अकाउंट से सीधे Meta को पेमेंट करते हैं। आपके क्रेडिट से सिर्फ़ Ohanvi का इस्तेमाल कमीशन कटता है।

    आप इसे कभी भी बदल सकते हैं। इससे बदलता है कि आपके क्रेडिट से WhatsApp इस्तेमाल का बिल कैसे कटेगा।

4. **Billable messages** और **By category** व **By pricing type** का बँटवारा देखने के लिए नीचे स्क्रोल करें।

![Billing & Usage, जिसमें समय चुनने का विकल्प और How you pay Meta दिख रहा है: Pay through Ohanvi और Pay Meta directly](../assets/screenshots/whatsapp-manage-8-billing.png)

अपने Ohanvi क्रेडिट और टॉप-अप के बारे में देखें [क्रेडिट और बिलिंग](../credits-and-billing.md)।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## जुड़ी गाइड { #related }

- [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)
- [वेबहुक और इंटीग्रेशन](whatsapp-webhooks-and-integrations.md)
- [क्रेडिट और बिलिंग](../credits-and-billing.md)
