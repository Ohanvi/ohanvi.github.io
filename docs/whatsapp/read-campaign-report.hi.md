---
title: WhatsApp कैंपेन रिपोर्ट पढ़ें
description: देखें कि कैंपेन के कितने मैसेज भेजे गए, डिलीवर हुए, पढ़े गए, क्लिक हुए और कितनों का जवाब आया। जानें कि कुछ मैसेज फ़ेल क्यों हुए, और छूटे लोगों को दोबारा भेजें।
---

# WhatsApp कैंपेन रिपोर्ट पढ़ें { #read-a-whatsapp-campaign-report }

भेजा हुआ कैंपेन खोलें और देखें कि वह कैसा रहा। कितने लोगों को मैसेज मिला, कितनों ने पढ़ा, कितनों ने उस पर कुछ किया, और कुछ मैसेज फ़ेल क्यों हुए। आख़िर में आपको पता होगा कि क्या ठीक करना है, और आप फ़ेल हुए मैसेज दोबारा भेज चुके होंगे।

## शुरू करने से पहले { #before-you-start }

- आपने कम से कम 1 कैंपेन भेजा हो। देखें [ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)।
- आपको **WhatsApp** पैनल में **Campaign** दिखता हो।

## हर डिलीवरी स्टेटस का मतलब { #what-each-delivery-status-means }

WhatsApp जैसे-जैसे हर मैसेज की पुष्टि करता है, आँकड़े भरते जाते हैं। इसलिए एक मिनट पहले भेजे कैंपेन की गिनती अभी चल ही रही होती है।

| स्टेटस | मतलब |
| --- | --- |
| **Queued** | WhatsApp को देने के लिए कतार में है। |
| **Sent** | WhatsApp ने मैसेज ले लिया। |
| **Delivered** | मैसेज उस व्यक्ति के फ़ोन तक पहुँच गया। |
| **Read** | उस व्यक्ति ने मैसेज खोला। जिन्होंने रीड रिसीप्ट बंद कर रखी है, वे मैसेज पढ़ने के बाद भी **Read** में नहीं गिने जाते। |
| **Clicked** | उस व्यक्ति ने ट्रैक होने वाले लिंक बटन पर टैप किया। इसके लिए टेम्प्लेट में **Enable Click Tracking** चालू होना चाहिए। |
| **Replied** | उस व्यक्ति ने जवाब लिखा। |
| **Failed** | WhatsApp मैसेज डिलीवर नहीं कर पाया। वजह उसी पंक्ति में लिखी होती है। फ़ेल हुए मैसेज पर चार्ज नहीं लगता। |

## स्टेप { #steps }

### सारांश पढ़ें { #read-the-summary }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Campaign** चुनें।
2. सबसे ऊपर सभी कैंपेन के कुल आँकड़े देखें: **Campaigns**, **Messages sent**, **Delivered**, **Read** और **Failed**।
3. लिस्ट में किसी कैंपेन पर क्लिक करें। उसकी रिपोर्ट दाईं ओर खुलती है। उसमें एक **GRADE** और 3 टैब होते हैं: **Overview**, **Recipients** और **Diagnostics**। दाईं ओर **Message sent** में वह मैसेज दिखता है जो भेजा गया था।

    ![Overview, Recipients और Diagnostics टैब, Where the audience went और Message sent वाली कैंपेन रिपोर्ट](../assets/screenshots/whatsapp-campaign-report-1-report.png)

### Overview टैब पढ़ें { #read-the-overview-tab }

- **Where the audience went** में भेजने से लेकर डिलीवर होने, पढ़े जाने, क्लिक, जवाब और ऑर्डर तक हर स्टेज दिखता है। जहाँ संख्या गिरती है, वहीं आप लोगों को खो रहे हैं। किसी स्टेज पर क्लिक करें, तो उन्हीं लोगों की पूरी लिस्ट खुल जाती है।
- **What the readers then did** में दिखता है कि पढ़ने वालों में से कितनों ने **Clicked**, **Replied**, **Ordered** या **Unsubscribed** किया।
- **vs your last broadcast** में इस बार के मैसेज की तुलना पिछले ब्रॉडकास्ट से होती है। हरे का मतलब है कि यह पिछले से बेहतर रहा। लाल का मतलब है कि यह पिछड़ गया।
- **What it drove** में पढ़े जाने और क्लिक की संख्या दिखती है। स्टोर कनेक्ट हो, तो रेवेन्यू भी दिखता है।
- **Do this next** में अगले कदम सुझाए जाते हैं। जैसे उन लोगों को फ़ॉलो-अप करना जिन्होंने पढ़ा पर क्लिक नहीं किया, या उन नंबरों को छोड़ देना जहाँ लगातार दो बार मैसेज फ़ेल हुआ।
- **How fast it landed** में **Median time to deliver**, **Median time to read** और **Peak reading hour** दिखते हैं।

### जानें कि मैसेज कितनी जल्दी पहुँचा { #read-how-fast-it-landed }

**How fast it landed** कार्ड लॉन्च के बाद का समय मिनटों में दिखाता है, कैलेंडर के दिनों में नहीं। ब्रॉडकास्ट कुछ ही मिनटों में पूरा हो जाता है। दिन के हिसाब से चार्ट बनाते, तो उसमें बस एक ही बिंदु दिखता।

1. **Overview** टैब खोलें और **How fast it landed** तक स्क्रॉल करें।
2. **Median time to deliver** देखें। आधे मैसेज इस समय से जल्दी फ़ोन तक पहुँच गए।
3. **Median time to read** देखें। आधे लोगों ने इस समय से जल्दी मैसेज खोल लिया। इसके नीचे **p95** में वह समय दिखता है जिसके अंदर हर 100 में से 95 लोग मैसेज पढ़ चुके थे।
4. **Peak reading hour** देखें। इसमें घड़ी का वह घंटा दिखता है जिसमें सबसे ज़्यादा लोगों ने पढ़ा, जैसे `19:00–20:00`। नीचे लिखा होता है **when to send the next one**।
5. अगर अभी तक किसी ने मैसेज नहीं पढ़ा है, तो **Peak reading hour** में **—** दिखता है और नीचे **no reads yet** लिखा होता है। थोड़ी देर बाद फिर देखें।
6. **Never delivered** देखें। यह भेजे गए मैसेज में से डिलीवर हुए मैसेज घटाने पर बचता है। नीचे लिखा होता है **see Diagnostics for why**।

समय सबसे छोटी सही इकाई में दिखता है, जैसे `45 s`, `12 min 30 s` या `2 h 15 m`।

!!! tip "सुझाव"
    अगला ब्रॉडकास्ट इसी ब्रॉडकास्ट के **Peak reading hour** पर शेड्यूल करें। देखें [शेड्यूल किए गए मैसेज और डिलीवरी लॉग देखें](scheduler-and-delivery-logs.md)।

### पता करें कि मैसेज क्यों फ़ेल हुए { #find-out-why-messages-failed }

1. **Diagnostics** टैब खोलें। **Is this good?** में इस कैंपेन के **Delivery rate**, **Read rate**, **Click rate** और **Reply rate** की तुलना आपके पिछले 30 दिनों के **Your average** और **Your best** से होती है। हरे का मतलब है कि आप अपने औसत से **आगे** हैं। लाल का मतलब है कि आप उससे **पीछे** हैं।

    ![Diagnostics टैब, जिसमें Is this good? इस कैंपेन की तुलना आपके औसत और सबसे अच्छे नतीजे से करता है](../assets/screenshots/whatsapp-campaign-report-2-diagnostics.png)

2. अगर कुछ मैसेज फ़ेल हुए हैं, तो **Why messages failed** देखें। यह फ़ेल होने की वजहों को WhatsApp के बताए कारण के हिसाब से आसान शब्दों में ग्रुप करता है। साथ में **Count** और **Fix** बटन भी होता है, जैसे **Retry 2**।

    ![Why messages failed, जिसमें कारण Media upload error, गिनती 2 और Retry 2 बटन है](../assets/screenshots/whatsapp-campaign-report-5-why-failed.png)

3. हर लिंक पर कितने क्लिक आए, यह **Links & buttons** में देखें। टेम्प्लेट की क्वालिटी रेटिंग **Template health** में देखें।
4. **What this send cost your list** देखें: **Reached first time**, **At risk** (लगातार 2 या ज़्यादा बार फ़ेल), **Unsubscribed** और **Excluded**।

### छूटे लोगों को दोबारा भेजें { #resend-to-the-people-it-missed }

1. कैंपेन पर ऊपर दाईं ओर **Resend** आइकन (कागज़ का हवाई जहाज़) पर क्लिक करें। **Resend?** विंडो में दिखता है कि मैसेज कितने लोगों को जाएगा। अगर हर मैसेज डिलीवर हो चुका है, तो इसकी जगह **Nothing to resend — every message landed.** लिखा दिखता है।

    ![दोबारा भेजने को कुछ नहीं, हर मैसेज पहुँच गया](../assets/screenshots/whatsapp-campaign-report-4-nothing-to-resend.png)

2. **Resend** पर क्लिक करें। **Resend started** दिखता है। WhatsApp जैसे-जैसे हर मैसेज की पुष्टि करता है, डिलीवरी के अपडेट आते जाते हैं।

दोबारा भेजा गया मैसेज फ़ेल हुए लोगों को जाता है। अगर कोई मैसेज फ़ेल नहीं हुआ, तो वह उन लोगों को जाता है जिन्हें मैसेज डिलीवर नहीं हुआ था। दोबारा भेजे हर मैसेज पर चार्ज तभी लगता है जब वह डिलीवर हो जाता है।

### देखें किसे मैसेज मिला { #see-who-received-it }

1. कैंपेन पर **Recipients** टैब खोलें, या ऊपर दाईं ओर **Who received it** आइकन (टिक वाली लिस्ट) पर क्लिक करें। हर पंक्ति में **Contact**, मैसेज कहाँ तक **Reached**, और **When** दिखता है।
2. **All**, **Delivered**, **Read**, **Clicked**, **Replied** या **Failed** चिप से फ़िल्टर करें। हर चिप पर उसकी गिनती दिखती है। आप जिस सेट पर फ़िल्टर करते हैं, उसी सेट को दोबारा भेज सकते हैं।

    ![All, Delivered, Read, Clicked, Replied और Failed चिप वाला Recipients टैब](../assets/screenshots/whatsapp-campaign-report-3-recipients.png)

3. सिर्फ़ फ़ेल हुए मैसेज दोबारा भेजने के लिए **Resend … failed** पर क्लिक करें।

### रिपोर्ट अलग पेज पर खोलें { #open-the-report-on-its-own-page }

1. **WhatsApp** → **Dashboard** खोलें और **Broadcasts** टेबल में किसी ब्रॉडकास्ट पर क्लिक करें। **Campaign analysis** अपने अलग पेज पर खुलता है।
2. इसमें वही **Overview**, **Recipients** और **Diagnostics** टैब हैं जो **Campaign** की रिपोर्ट में हैं। दाईं ओर **Message sent** भी दिखता है।
3. वापस जाने के लिए **Campaign analysis** के बगल वाले बैक एरो पर क्लिक करें।

![अलग पेज पर Campaign analysis, Overview टैब और Message sent के साथ](../assets/screenshots/whatsapp-campaign-report-6-analysis-page.png)

अपने सभी कैंपेन के कुल आँकड़े देखने हों, तो **Analytics** खोलें। वहाँ ब्रॉडकास्ट से हुआ रेवेन्यू भी मिलता है। देखें [मार्केटिंग एनालिटिक्स पढ़ें](../analytics/read-marketing-analytics.md)।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Read** की संख्या **Delivered** से काफ़ी कम है | कुछ लोगों ने रीड रिसीप्ट बंद कर रखी है, या उन्होंने अभी मैसेज खोला नहीं है। | **Replied** और **Clicked** से तुलना करें, और बाद में फिर देखें। |
| क्लिक 0% दिखते हैं और **No URL button on template** लिखा है | टेम्प्लेट में लिंक बटन नहीं है, इसलिए कोई क्लिक ट्रैक नहीं हो सकता। | अगले टेम्प्लेट में **Enable Click Tracking** वाला URL बटन जोड़ें। |
| फ़ेल होने की वजह: **This person has chosen not to receive marketing messages from your business, so WhatsApp blocked this one.** | उस व्यक्ति ने WhatsApp में मार्केटिंग मैसेज लेना बंद कर दिया है। | उन्हें मार्केटिंग कैंपेन में न भेजें। |
| फ़ेल होने की वजह: **WhatsApp did not deliver this one. It limits how many marketing messages a person receives so their inbox stays useful …** | Meta तय करता है कि एक व्यक्ति को कितने मार्केटिंग मैसेज मिल सकते हैं। | बाद में फिर कोशिश करें, या उस व्यक्ति से किसी और तरीके से संपर्क करें। |
| फ़ेल होने की वजह: **This number cannot receive WhatsApp messages. …** | नंबर WhatsApp पर नहीं है, गलत लिखा है, या उसने आपको ब्लॉक कर रखा है। | कॉन्टैक्ट में नंबर जाँचें। |
| **Nothing to resend — every message landed.** | न कोई मैसेज फ़ेल हुआ और न कोई बिना डिलीवर रहा। | कुछ करने की ज़रूरत नहीं। |

## जुड़ी गाइड { #related }

- [ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)
- [मैसेज टेम्प्लेट बनाएँ](create-message-template.md)
- [मार्केटिंग एनालिटिक्स पढ़ें](../analytics/read-marketing-analytics.md)
