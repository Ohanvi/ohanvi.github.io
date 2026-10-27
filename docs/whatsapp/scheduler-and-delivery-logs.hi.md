---
title: शेड्यूल किए मैसेज और डिलीवरी लॉग देखें
description: Scheduler में हर शेड्यूल किया हुआ WhatsApp मैसेज और उसका स्टेटस देखें, और Delivery Logs में हर मैसेज की डिलीवरी का हाल जानें।
---

# शेड्यूल किए मैसेज और डिलीवरी लॉग देखें { #check-scheduled-messages-and-delivery-logs }

**Scheduler** में वे सभी WhatsApp मैसेज रहते हैं जो बाद में जाने वाले हैं। **Delivery Logs** में लिखा रहता है कि भेजे गए हर मैसेज के साथ क्या हुआ। आखिर में आप शेड्यूल किया हुआ कोई भी मैसेज खोज पाएँगे और उसकी पूरी जानकारी पढ़ पाएँगे। साथ ही किसी भी मैसेज का सफ़र देख पाएँगे, भेजे जाने से लेकर जवाब आने या फ़ेल होने तक।

## शुरू करने से पहले { #before-you-start }

- आपका रोल WhatsApp **Manage** खोल सकता हो। देखें [टीम मेंबर, रोल और परमिशन मैनेज करें](../settings/roles-and-permissions.md)।

## स्टेप { #steps }

### Scheduler देखें { #read-the-scheduler }

1. लेफ़्ट रेल में **WhatsApp** खोलें, **Manage** चुनें, फिर **Scheduler**।
2. ऊपर **All**, **Scheduled**, **Paused**, **Sent**, **Failed** या **Stopped** से फ़िल्टर करें। हर फ़िल्टर के साथ उसकी गिनती दिखती है।
3. **Search title, type or number…** में खोजें, फिर किसी आइटम पर क्लिक करें। उसकी पूरी जानकारी दाईं तरफ़ खुल जाती है।

**Schedule** कार्ड में ये सब दिखता है: **Name**, मैसेज कैसे **Repeats** होता है, **Time slot**, **First send**, **Last sent**, **Sends on**, **Status** और **Messages sent**। इसे डिलीट करना हो, तो ऊपर **Remove** पर क्लिक करें।

![Schedule कार्ड वाला Scheduler आइटम, जिसमें Name, Repeats, Time slot, First send, Last sent, Sends on, Status और Messages sent दिखते हैं](../assets/screenshots/whatsapp-manage-4-scheduler.png)

नया मैसेज शेड्यूल करना हो, तो लिस्ट के ऊपर **Schedule** पर क्लिक करें, या ऊपर दाईं तरफ़ **Schedule Message** पर। टेस्ट मैसेज भी यहीं दिखते हैं। उनका नाम **Test:** और टेम्प्लेट के नाम से बनता है।

लिस्ट के ऊपर के कार्ड **Upcoming**, **Sent**, **Failed** और **Stopped** की गिनती बताते हैं। **Upcoming** में उतने ही आइटम गिने जाते हैं जितने **Scheduled** फ़िल्टर में दिखते हैं।

Ohanvi में जो कुछ भी शेड्यूल है, उसका कैलेंडर देखने के लिए पढ़ें [जो कुछ भी शेड्यूल है, सब देखें](../schedule/view-schedule.md)। बार-बार चलने वाले मैसेज के लिए पढ़ें [बार-बार चलने वाले शेड्यूल मैनेज करें](../schedule/manage-recurring-schedules.md)।

### मैसेज शेड्यूल करें { #schedule-a-message }

1. **Scheduler** में **Schedule Message** पर क्लिक करें। **Schedule Message** विंडो खुलेगी।
2. चाहें तो **Title (optional)** लिखें।
3. **Contact Group** में एक या ज़्यादा ग्रुप चुनें। 2 ग्रुप चुनते ही लेबल **Contact Groups (2 selected)** हो जाता है। हर बार मैसेज जाते समय ग्रुप के मेंबर नए सिरे से लिए जाते हैं।
4. **Template** में कोई approved टेम्प्लेट चुनें।
5. **Variables** में हर प्लेसहोल्डर भरें। या कोई एट्रिब्यूट डालें, ताकि हर कॉन्टैक्ट को उसकी अपनी वैल्यू मिले। जिन कॉन्टैक्ट की वैल्यू खाली है, उनके लिए फ़ॉलबैक जोड़ें।
6. **Repeat** में **Once**, **Daily**, **Weekly**, **Monthly**, **Yearly**, **Special Days** या **Holidays** चुनें।
7. **Time slot** में 6 विंडो में से एक चुनें। हर विंडो 4 घंटे की है, **12:00 AM – 4:00 AM** से **8:00 PM – 12:00 AM** तक। मैसेज विंडो के शुरू में जाता है।
8. **Send date** डालें। बार-बार चलने वाले शेड्यूल में यह **First send date** लिखा आता है। **Special Days** और **Holidays** में इसकी जगह कैलेंडर पर तारीखें चुनें।
9. चाहें तो **End date (optional)** डालें। इसके बिना शेड्यूल तब तक चलता है जब तक आप उसे रोक न दें।
10. चाहें तो **Also add to Google Calendar** पर टिक करें। इसके लिए पहले **Scheduler** पेज पर **Connect Google** पर क्लिक करें।
11. **Message Preview** देखें, फिर **Schedule Message** पर क्लिक करें। **Message scheduled.** मैसेज आएगा।

कुछ छूट गया हो, तो फ़ॉर्म बता देता है कि क्या छूटा, जैसे **Select at least one contact group.** या **Fill every template variable.**

### शेड्यूल बदलें, रोकें या बंद करें { #change-pause-or-stop-a-schedule }

लिस्ट में किसी आइटम पर क्लिक करें। जानकारी के ऊपर उसके बटन दिखते हैं। यही काम मेन्यू से करने हों, तो आइटम पर राइट-क्लिक करें।

1. उसका समय बदलना हो, तो **Reschedule** पर क्लिक करें। **Repeat**, **Time slot**, अगली तारीख या आखिरी तारीख बदलें, फिर **Save** पर क्लिक करें। **Schedule updated.** मैसेज आएगा।
2. जो आइटम फ़ेल हुआ है, उस पर यही बटन **Retry** लिखा आता है। विंडो में **Retry** पर क्लिक करें, तो मैसेज फिर से भेजने की कतार में लग जाता है।
3. जो शेड्यूल अभी गया नहीं है, उसे होल्ड पर रखना हो, तो **Pause** पर क्लिक करें। **Schedule paused — nothing sends until you resume it.** मैसेज आएगा।
4. रुका हुआ शेड्यूल दोबारा चालू करना हो, तो **Resume** पर क्लिक करें। **Schedule resumed.** मैसेज आएगा।
5. जो मैसेज अभी गया नहीं है, उसे हमेशा के लिए रोकना हो, तो **Stop** पर क्लिक करें, फिर **Stop it** पर। आइटम लिस्ट में **Stopped** बनकर रहता है।
6. बंद किया हुआ आइटम फिर शुरू करना हो, तो **Restart** पर क्लिक करें। **Schedule restarted.** मैसेज आएगा।
7. पूरा हो चुका आइटम साफ़ करना हो, तो **Remove** पर क्लिक करें, फिर **Remove it** पर। **Removed from the scheduler.** मैसेज आएगा।
8. कोई आइटम फ़ेल हुआ हो, तो वजह कॉपी करने के लिए **Copy error** पर क्लिक करें।

!!! warning "Remove करने के बाद वापसी नहीं है"
    **Remove** बंद किए हुए या भेजे जा चुके आइटम को लिस्ट से हमेशा के लिए हटा देता है। इसके बाद बंद किया हुआ आइटम दोबारा शुरू नहीं हो सकता। जो मैसेज पहले जा चुके हैं, उन पर कोई असर नहीं पड़ता।

सिर्फ़ ये 6 टाइम स्लॉट ही चुने जा सकते हैं। आज का जो स्लॉट निकल चुका है, वह नहीं चलेगा। आपको यह मैसेज दिखेगा: **The … slot has already passed on that date — pick a later slot or date.**

### Delivery Logs देखें { #read-the-delivery-logs }

1. **Manage** में **Delivery Logs** चुनें।
2. ऊपर **All**, **Sent**, **Delivered**, **Read**, **Replied** या **Failed** से फ़िल्टर करें। हर फ़िल्टर के साथ उसकी गिनती दिखती है। फिर से शुरू करना हो, तो **Clear filters** पर क्लिक करें।
3. ब्रॉडकास्ट ID, मैसेज ID या एरर से खोजें, फिर किसी एंट्री पर क्लिक करें। उसकी पूरी जानकारी दाईं तरफ़ खुल जाती है।

हर एंट्री में **Event**, **Logged at** (यानी कब दर्ज हुआ), **Log ID** और **Broadcast ID** दिखते हैं। फ़ेल हुए मैसेज में **Error code** और **Error message** भी दिखते हैं। सिर्फ़ उसी ब्रॉडकास्ट की एंट्री देखनी हों, तो **This broadcast only** पर क्लिक करें। किसी को भेजने के लिए **Copy broadcast ID** पर क्लिक करें।

![Delivery Logs में स्टेटस फ़िल्टर, इवेंट की लिस्ट और Replied इवेंट की जानकारी](../assets/screenshots/whatsapp-manage-5-delivery-logs.png)

!!! note "फ़ेल हुए मैसेज"
    **Delivery Logs** सिर्फ़ यह दिखाता है कि क्या हुआ। फ़ेल हुआ मैसेज दोबारा भेजने का बटन इसमें नहीं है। इस पेज का **Retry** बटन सिर्फ़ लिस्ट दोबारा लोड करता है। मैसेज फिर से भेजने के लिए कैंपेन रिपोर्ट का इस्तेमाल करें। देखें [WhatsApp कैंपेन रिपोर्ट पढ़ें](read-campaign-report.md)।

फ़ेल हुई एंट्री तक आप डैशबोर्ड से भी पहुँच सकते हैं: **Review failures** → **Open Delivery Logs**। देखें [WhatsApp डैशबोर्ड पढ़ें](whatsapp-dashboard.md)।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## जुड़ी गाइड { #related }

- [ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)
- [WhatsApp कैंपेन रिपोर्ट पढ़ें](read-campaign-report.md)
- [WhatsApp डैशबोर्ड पढ़ें](whatsapp-dashboard.md)
