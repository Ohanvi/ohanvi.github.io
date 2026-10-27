---
title: Pabbly कनेक्ट करें
description: Pabbly Connect को Ohanvi से दोनों तरफ़ जोड़ें। Ohanvi के इवेंट किसी वर्कफ़्लो को भेजें, या API key से किसी वर्कफ़्लो को Ohanvi में डेटा लिखने दें।
---

# Pabbly कनेक्ट करें { #connect-pabbly }

Pabbly Connect को Ohanvi से दोनों तरफ़ जोड़ा जा सकता है। सब्सक्रिप्शन से CRM, WhatsApp, फ़ॉर्म और ईमेल के इवेंट Pabbly वर्कफ़्लो को भेजे जाते हैं। API key से Pabbly वर्कफ़्लो रिकॉर्ड वापस Ohanvi में लिख सकता है। आप एक तरफ़ का सेटअप कर सकते हैं या दोनों का। इसमें करीब 15 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- आप **Settings** में **Integrations** खोल पाते हों।
- आपके पास connect.pabbly.com पर Pabbly Connect अकाउंट हो।
- इवेंट बाहर भेजने के लिए: आपके पास ऐसा Pabbly वर्कफ़्लो हो जो **Webhook** ट्रिगर से शुरू होता है। यही ट्रिगर आपको वेबहुक URL देता है, जिसे आप यहाँ पेस्ट करेंगे।
- रिकॉर्ड अंदर लाने के लिए: आपको पता हो कि key किस यूज़र की तरह काम करेगी। [टीम के मेंबर, रोल और अनुमतियाँ मैनेज करें](roles-and-permissions.md) देखें।

## दो दिशाएँ { #the-two-directions }

| दिशा | यह क्या करती है | Ohanvi में क्या चाहिए |
| --- | --- | --- |
| Ohanvi से Pabbly | कुछ होने पर Ohanvi आपके Pabbly वर्कफ़्लो को एक इवेंट भेजता है। | वेबहुक URL के साथ एक **subscription**। |
| Pabbly से Ohanvi | आपका Pabbly वर्कफ़्लो Ohanvi में रिकॉर्ड पढ़ता या लिखता है। | एक **API key**। |

दोनों ऑप्शनल हैं और एक-दूसरे पर निर्भर नहीं हैं।

## स्टेप { #steps }

### Pabbly स्क्रीन खोलें { #open-the-pabbly-screen }

1. नीचे बाएँ कोने में अपने नाम के पहले अक्षरों पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. बाईं तरफ़ की लिस्ट में **Workspace** के नीचे **Integrations** चुनें।
3. **Integration** के नीचे **Pabbly** पर क्लिक करें। **Pabbly Connect** पेज खुलता है।
4. टाइटल के नीचे छोटे पिल देखें। इनमें चालू keys दिखती हैं, जैसे **1 active key**, और लाइव सब्सक्रिप्शन भी।

### सब्सक्रिप्शन से इवेंट बाहर भेजें { #send-events-out-with-a-subscription }

1. Pabbly Connect में एक वर्कफ़्लो बनाएँ। उसमें **Webhook** ट्रिगर जोड़ें। जो URL दिखे, उसे कॉपी करें।
2. Ohanvi में **Subscriptions** तक स्क्रॉल करें और **New subscription** पर क्लिक करें। **New Pabbly subscription** विंडो खुलती है।
3. **Event** में चुनें कि क्या भेजना है, जैसे **New contact**। यह ज़रूरी है। इसे छोड़ेंगे, तो विंडो में **Choose an event** लिखा आएगा।
4. **Name (optional)** में कोई नाम लिखें, जैसे `Notify sales on new deal`।
5. **Webhook URL** में Pabbly से लिया हुआ URL पेस्ट करें। वह https:// से शुरू होना चाहिए। खाली छोड़ने पर **Paste the webhook URL from Pabbly.** लिखा आता है। कोई और लिंक डालने पर **Must be an https URL — the server rejects anything else.** आता है।
6. **Save subscription** पर क्लिक करें। **Subscription saved.** मैसेज आता है।
7. नई सब्सक्रिप्शन की रो पर **Test** पर क्लिक करें। इससे एक असली रिक्वेस्ट जाती है। Pabbly का वेबहुक ट्रिगर तब तक सेट नहीं होता, जब तक उसे एक रिक्वेस्ट न मिल जाए।
8. Pabbly में जाएँ। वहाँ जो सैंपल फ़ील्ड आए हैं, उनसे वर्कफ़्लो पूरा करें।
9. रो देखकर पक्का करें कि सब ठीक है। उसमें इवेंट, टारगेट URL, **Last delivered** और **Status** दिखते हैं। **Live** चिप का मतलब है कि सब्सक्रिप्शन चालू है। **Retired** का मतलब है कि वह बंद है।

#### जो इवेंट आप भेज सकते हैं { #events-you-can-send }

| समूह | इवेंट |
| --- | --- |
| CRM | **New contact**, **Updated contact**, **New deal**, **Updated deal**, **New lead**, **New account** |
| WhatsApp | **WhatsApp message received**, **WhatsApp message delivered or read** |
| फ़ॉर्म | **Form submitted** |
| ईमेल | **Email opened**, **Email link clicked**, **Email bounced**, **Joined an email list** |
| अन्य | **Appointment booked**, **Ticket created** |

### किसी लोकप्रिय इवेंट से शुरू करें { #start-from-a-popular-event }

1. **Popular events to subscribe to** तक स्क्रॉल करें।
2. किसी कार्ड पर **Subscribe** पर क्लिक करें। **New subscription** खुलता है और इवेंट पहले से चुना होता है।
3. अपने Pabbly वर्कफ़्लो का वेबहुक URL पेस्ट करें और **Save subscription** पर क्लिक करें।

### सब्सक्रिप्शन डिलीट करें { #delete-a-subscription }

1. सब्सक्रिप्शन की रो पर **Delete** पर क्लिक करें।
2. **Delete "name"?** में **Delete** पर क्लिक करें। Pabbly को यह इवेंट मिलना तुरंत बंद हो जाता है।
3. **Subscription deleted.** मैसेज आता है।

### key से Pabbly को Ohanvi में लिखने दें { #let-pabbly-write-into-ohanvi-with-a-key }

1. **API keys** के नीचे **Create key** पर क्लिक करें। **Create Pabbly API key** विंडो खुलती है।
2. **Key name** में कोई नाम लिखें, जैसे `Ops workflows`। यह सिर्फ़ आपकी पहचान के लिए है।
3. **Acts as** में **You** चुनें (तब key को वही अनुमतियाँ मिलती हैं जो आपके पास हैं) या **A specific user** चुनें। किसी खास यूज़र के लिए ऐसे सर्विस अकाउंट का **Username** लिखें जिसके पास सबसे कम अनुमतियाँ हों, जैसे `pabbly.service`।
4. **Expires after** में **30 days**, **90 days**, **1 year** या **Never expires** चुनें।
5. नीचे लिखा नोट पढ़ें। दोनों कनेक्शन-टेस्ट हैंडलर सिर्फ़ एडमिन के लिए ही रहते हैं, सर्विस अकाउंट की key के लिए भी। बाकी हर लिखने वाला काम उस अकाउंट की अपनी अनुमतियों से चलता है।
6. **Create key** पर क्लिक करें। **Your Pabbly API key** विंडो खुलती है।
7. **Server URL** और **API Key** कॉपी करें। key सिर्फ़ एक बार दिखती है।
8. **I have copied my key somewhere safe** पर टिक करें, फिर **Done** पर क्लिक करें।
9. Pabbly Connect में एक **API by Pabbly Connect** स्टेप जोड़ें। `X-Api-Key` हेडर में यही key डालें। रिक्वेस्ट का पता server URL के बाद `/api/v1/save?apiName=…` रखें (या `/find`, `/update` वगैरह)।

### साइनिंग सीक्रेट जोड़ें (ऑप्शनल) { #add-a-signing-secret-optional }

1. **Advanced: Signing secret** ढूँढें। उसके बगल की चिप पर **Set** या **Not set** लिखा होता है।
2. **Set secret** पर क्लिक करें। **Set a signing secret** विंडो खुलती है।
3. **Signing secret** में कम से कम 16 अक्षरों की एक लंबी रैंडम स्ट्रिंग लिखें।
4. **Save** पर क्लिक करें। **Signing secret saved.** मैसेज आता है।
5. अपने Pabbly वर्कफ़्लो में `X-Pabbly-Signature` हेडर जाँचें। यह हर डिलीवरी का HMAC-SHA256 सिग्नेचर है। इससे आप पक्का कर सकते हैं कि डिलीवरी Ohanvi से ही आई है।
6. बाद में बदलना हो, तो **Update secret** पर क्लिक करें, नई वैल्यू लिखें और **Update** पर क्लिक करें। जो भी वर्कफ़्लो यह हेडर जाँचते हैं, उन सबमें उसी समय सीक्रेट बदल दें। वरना उनकी जाँच फ़ेल हो जाएगी।

### key कैंसिल करें { #revoke-a-key }

1. **API keys** के नीचे key की रो पर **Revoke** पर क्लिक करें।
2. **Revoke "name"?** में **Revoke** पर क्लिक करें। जो भी चीज़ इस key से चल रही थी, वह अपनी अगली रिक्वेस्ट पर ही रुक जाती है।
3. **Key revoked.** मैसेज आता है।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Must be an https URL — the server rejects anything else.** | वेबहुक URL https:// से शुरू नहीं होता। | Pabbly के Webhook ट्रिगर से सही URL ज्यों का त्यों पेस्ट करें। |
| **Could not save the subscription.** | इवेंट या URL मंज़ूर नहीं हुआ। | दोनों फ़ील्ड देखें और दोबारा सेव करें। |
| Pabbly का ट्रिगर सेट नहीं हो पा रहा। | उसे अभी तक कोई रिक्वेस्ट नहीं मिली है। | सब्सक्रिप्शन पर **Test** पर क्लिक करें, फिर Pabbly में ट्रिगर रीफ़्रेश करें। |
| **Could not send the test delivery.** | वेबहुक URL ने रिक्वेस्ट नहीं ली। | देखें कि वर्कफ़्लो चालू है और URL सही है। |
| **Use at least 16 characters — this is what verifies deliveries came from your server.** | साइनिंग सीक्रेट बहुत छोटा है। | एक लंबी रैंडम स्ट्रिंग लिखें। |
| अपडेट के बाद सिग्नेचर जाँच फ़ेल हो रही है। | वर्कफ़्लो अब भी पुराना सीक्रेट जाँच रहा है। | जिन-जिन वर्कफ़्लो में सिग्नेचर जाँचा जाता है, उन सबमें सीक्रेट बदलें। |
| किसी वर्कफ़्लो का लिखना बंद हो गया। | उसकी key कैंसिल हो गई या एक्सपायर हो गई। | नई key बनाएँ और **API by Pabbly Connect** स्टेप में उसे बदल दें। |

## संबंधित गाइड { #related }

- [Zapier कनेक्ट करें](connect-zapier.md)
- [अपनी बनाम मैनेज्ड सर्विस](choose-connectors.md)
- [टीम के मेंबर, रोल और अनुमतियाँ मैनेज करें](roles-and-permissions.md)
