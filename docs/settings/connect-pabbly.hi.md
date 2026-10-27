---
title: Pabbly कनेक्ट करें
description: Pabbly Connect को Ohanvi से दोनों तरफ़ जोड़ें: Ohanvi के इवेंट किसी वर्कफ़्लो को भेजें, या API key से किसी वर्कफ़्लो को Ohanvi में लिखने दें।
---

# Pabbly कनेक्ट करें { #connect-pabbly }

Pabbly Connect को Ohanvi से दोनों दिशाओं में जोड़ें। सब्सक्रिप्शन CRM, व्हाट्सऐप, फ़ॉर्म और ईमेल के इवेंट Pabbly वर्कफ़्लो को भेजते हैं। API key से Pabbly वर्कफ़्लो रिकॉर्ड वापस Ohanvi में लिख सकता है। आप एक दिशा या दोनों इस्तेमाल कर सकते हैं। इसमें लगभग 15 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- आप **Settings** में **Integrations** खोल सकते हों।
- आपके पास connect.pabbly.com पर Pabbly Connect अकाउंट हो।
- बाहर जाने वाले इवेंट के लिए: आपके पास **Webhook** ट्रिगर से शुरू होने वाला Pabbly वर्कफ़्लो हो। यही ट्रिगर वह वेबहुक URL देता है जो आप यहाँ पेस्ट करेंगे।
- अंदर आने वाले रिकॉर्ड के लिए: आपको पता हो कि key किस यूज़र की तरह काम करेगी। देखें [टीम के सदस्य, रोल और अनुमतियाँ प्रबंधित करें](roles-and-permissions.md)।

## दो दिशाएँ { #the-two-directions }

| दिशा | यह क्या करती है | Ohanvi में क्या चाहिए |
| --- | --- | --- |
| Ohanvi से Pabbly | कुछ होने पर Ohanvi आपके Pabbly वर्कफ़्लो को एक इवेंट भेजता है। | वेबहुक URL के साथ एक **subscription**। |
| Pabbly से Ohanvi | आपका Pabbly वर्कफ़्लो Ohanvi में रिकॉर्ड पढ़ता या लिखता है। | एक **API key**। |

दोनों वैकल्पिक और एक-दूसरे से स्वतंत्र हैं।

## चरण { #steps }

### Pabbly स्क्रीन खोलें { #open-the-pabbly-screen }

1. नीचे बाएँ कोने में अपने नाम के पहले अक्षरों पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. बाईं सूची में **Workspace** के नीचे **Integrations** चुनें।
3. **Integration** के नीचे **Pabbly** पर क्लिक करें। **Pabbly Connect** पेज खुलता है।
4. शीर्षक के नीचे के पिल पढ़ें। वे चालू keys, जैसे **1 active key**, और लाइव सब्सक्रिप्शन दिखाते हैं।

### सब्सक्रिप्शन से इवेंट बाहर भेजें { #send-events-out-with-a-subscription }

1. Pabbly Connect में एक वर्कफ़्लो बनाएँ। उसमें **Webhook** ट्रिगर जोड़ें। जो URL दिखे उसे कॉपी करें।
2. Ohanvi में **Subscriptions** तक स्क्रॉल करें और **New subscription** पर क्लिक करें। **New Pabbly subscription** विंडो खुलती है।
3. **Event** में चुनें कि क्या भेजा जाए, जैसे **New contact**। यह ज़रूरी है। छोड़ने पर विंडो **Choose an event** कहती है।
4. **Name (optional)** में एक लेबल लिखें, जैसे `Notify sales on new deal`।
5. **Webhook URL** में Pabbly से लिया हुआ URL पेस्ट करें। वह https:// से शुरू होना चाहिए। खाली होने पर विंडो **Paste the webhook URL from Pabbly.** कहती है, और दूसरे लिंक पर **Must be an https URL — the server rejects anything else.** कहती है।
6. **Save subscription** पर क्लिक करें। **Subscription saved.** संदेश आता है।
7. नई सब्सक्रिप्शन की पंक्ति पर **Test** पर क्लिक करें। इससे एक असली रिक्वेस्ट जाती है। Pabbly का वेबहुक ट्रिगर तब तक सेट नहीं हो सकता जब तक उसे एक रिक्वेस्ट न मिल जाए।
8. Pabbly में, उसके कैप्चर किए सैंपल फ़ील्ड इस्तेमाल करके वर्कफ़्लो पूरा करें।
9. जाँचने के लिए पंक्ति पढ़ें। उसमें इवेंट, टारगेट URL, **Last delivered** और **Status** दिखते हैं। **Live** चिप का मतलब है कि वह चालू है। **Retired** का मतलब है कि वह बंद है।

#### जो इवेंट आप भेज सकते हैं { #events-you-can-send }

| समूह | इवेंट |
| --- | --- |
| CRM | **New contact**, **Updated contact**, **New deal**, **Updated deal**, **New lead**, **New account** |
| व्हाट्सऐप | **WhatsApp message received**, **WhatsApp message delivered or read** |
| फ़ॉर्म | **Form submitted** |
| ईमेल | **Email opened**, **Email link clicked**, **Email bounced**, **Joined an email list** |
| अन्य | **Appointment booked**, **Ticket created** |

### किसी लोकप्रिय इवेंट से शुरू करें { #start-from-a-popular-event }

1. **Popular events to subscribe to** तक स्क्रॉल करें।
2. किसी कार्ड पर **Subscribe** पर क्लिक करें। **New subscription** पहले से चुने हुए इवेंट के साथ खुलता है।
3. अपने Pabbly वर्कफ़्लो का वेबहुक URL पेस्ट करें और **Save subscription** पर क्लिक करें।

### सब्सक्रिप्शन डिलीट करें { #delete-a-subscription }

1. सब्सक्रिप्शन की पंक्ति पर **Delete** पर क्लिक करें।
2. **Delete "name"?** में **Delete** पर क्लिक करें। Pabbly को यह इवेंट मिलना तुरंत बंद हो जाता है।
3. **Subscription deleted.** संदेश आता है।

### key से Pabbly को Ohanvi में लिखने दें { #let-pabbly-write-into-ohanvi-with-a-key }

1. **API keys** के नीचे **Create key** पर क्लिक करें। **Create Pabbly API key** विंडो खुलती है।
2. **Key name** में एक नाम लिखें, जैसे `Ops workflows`। यह सिर्फ़ आपके संदर्भ के लिए है।
3. **Acts as** के नीचे **You** चुनें (key आपकी अपनी अनुमतियाँ लेकर चलती है) या **A specific user**। किसी खास यूज़र के लिए, सबसे कम अनुमतियों वाले सर्विस अकाउंट का **Username** लिखें, जैसे `pabbly.service`।
4. **Expires after** के नीचे **30 days**, **90 days**, **1 year** या **Never expires** चुनें।
5. नीचे का नोट पढ़ें। दोनों कनेक्शन-टेस्ट हैंडलर सिर्फ़ एडमिन के लिए ही रहते हैं, सर्विस अकाउंट की key के लिए भी। बाकी हर लिखने की कार्रवाई उस अकाउंट की अपनी अनुमतियों से काम करती है।
6. **Create key** पर क्लिक करें। **Your Pabbly API key** विंडो खुलती है।
7. **Server URL** और **API Key** कॉपी करें। key सिर्फ़ एक बार दिखाई जाती है।
8. **I have copied my key somewhere safe** पर टिक करें, फिर **Done** पर क्लिक करें।
9. Pabbly Connect में एक **API by Pabbly Connect** चरण जोड़ें। `X-Api-Key` हेडर को इसी key पर सेट करें। उसे server URL के बाद `/api/v1/save?apiName=…` (या `/find`, `/update` आदि) पर पॉइंट करें।

### साइनिंग सीक्रेट जोड़ें (वैकल्पिक) { #add-a-signing-secret-optional }

1. **Advanced: Signing secret** ढूँढें। उसके बगल की चिप **Set** या **Not set** दिखाती है।
2. **Set secret** पर क्लिक करें। **Set a signing secret** विंडो खुलती है।
3. **Signing secret** में कम से कम 16 अक्षरों की एक लंबी रैंडम स्ट्रिंग लिखें।
4. **Save** पर क्लिक करें। **Signing secret saved.** संदेश आता है।
5. अपने Pabbly वर्कफ़्लो में `X-Pabbly-Signature` हेडर जाँचें। यह हर डिलीवरी का HMAC-SHA256 सिग्नेचर है, जिससे आप पक्का कर सकते हैं कि वह Ohanvi से आया है।
6. इसे बाद में बदलने के लिए **Update secret** पर क्लिक करें, नई वैल्यू लिखें और **Update** पर क्लिक करें। जो भी वर्कफ़्लो इस हेडर को जाँचता है, उन सबको उसी समय अपडेट करें, वरना उनकी जाँच फ़ेल हो जाएगी।

### key रद्द करें { #revoke-a-key }

1. **API keys** के नीचे key की पंक्ति पर **Revoke** पर क्लिक करें।
2. **Revoke "name"?** में **Revoke** पर क्लिक करें। इस key को इस्तेमाल करने वाली हर चीज़ अपनी अगली ही रिक्वेस्ट पर रुक जाती है।
3. **Key revoked.** संदेश आता है।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Must be an https URL — the server rejects anything else.** | वेबहुक URL https:// से शुरू नहीं होता। | Pabbly के Webhook ट्रिगर से सही URL हू-ब-हू पेस्ट करें। |
| **Could not save the subscription.** | इवेंट या URL स्वीकार नहीं हुआ। | दोनों फ़ील्ड जाँचें और दोबारा सेव करें। |
| Pabbly का ट्रिगर सेट नहीं हो पा रहा। | उसे अभी तक कोई रिक्वेस्ट नहीं मिली है। | सब्सक्रिप्शन पर **Test** पर क्लिक करें, फिर Pabbly में ट्रिगर रीफ़्रेश करें। |
| **Could not send the test delivery.** | वेबहुक URL ने रिक्वेस्ट स्वीकार नहीं की। | जाँचें कि वर्कफ़्लो चालू है और URL सही है। |
| **Use at least 16 characters — this is what verifies deliveries came from your server.** | साइनिंग सीक्रेट बहुत छोटा है। | एक लंबी रैंडम स्ट्रिंग लिखें। |
| अपडेट के बाद सिग्नेचर जाँच फ़ेल हो रही है। | वर्कफ़्लो अब भी पुराना सीक्रेट जाँच रहा है। | जिस भी वर्कफ़्लो में इसे जाँचा जाता है, उन सबमें सीक्रेट अपडेट करें। |
| किसी वर्कफ़्लो का लिखना बंद हो गया। | उसकी key रद्द हो गई या एक्सपायर हो गई। | नई key बनाएँ और **API by Pabbly Connect** चरण अपडेट करें। |

## संबंधित गाइड { #related }

- [Zapier कनेक्ट करें](connect-zapier.md)
- [अपनी बनाम मैनेज्ड सेवाएँ](choose-connectors.md)
- [टीम के सदस्य, रोल और अनुमतियाँ प्रबंधित करें](roles-and-permissions.md)
