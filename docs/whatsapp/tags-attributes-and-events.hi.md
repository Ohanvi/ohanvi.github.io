---
title: टैग, यूज़र एट्रिब्यूट और कस्टम इवेंट प्रबंधित करें
description: अपने संपर्कों की टैग सूची रखें, हर संपर्क में कस्टम फ़ील्ड जोड़ें, और वे इवेंट सेट करें जो आपके अपने सिस्टम फ़्लो शुरू करने के लिए भेजते हैं।
---

# टैग, यूज़र एट्रिब्यूट और कस्टम इवेंट प्रबंधित करें { #manage-tags-user-attributes-and-custom-events }

टैग आपके संपर्कों को समूह में रखते हैं, यूज़र एट्रिब्यूट हर संपर्क पर अतिरिक्त जानकारी रखते हैं, और कस्टम इवेंट आपके अपने सिस्टम को फ़्लो शुरू करने देते हैं। आख़िर में आप जान जाते हैं कि हर सूची कहाँ है और उसमें कैसे जोड़ना है।

## शुरू करने से पहले { #before-you-start }

- आपका रोल व्हाट्सऐप **Manage** खोल सकता हो। ये एडमिन स्क्रीन हैं। देखें [टीम के सदस्य, रोल और अनुमतियाँ प्रबंधित करें](../settings/roles-and-permissions.md)।

## चरण { #steps }

### सूचियाँ खोलें { #open-the-lists }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Manage** चुनें।
2. बाईं ओर की **Manage** सूची में **Tags**, **User Attributes** या **Custom Events** चुनें।

### टैग { #tags }

**Tags** हर टैग को उसके **Tag Name**, **Category**, **Created At** और **Action** के साथ सूचीबद्ध करता है।

![Tags सूची, जिसमें Tag Name, Category, Created At, Action और Create बटन दिख रहे हैं](../assets/screenshots/whatsapp-manage-1-tags.png)

1. **Create** पर क्लिक करें। **Create Tag** खुलता है।
2. **Tag Name** लिखें। **Category (optional)** टैग को समूह में रखने में मदद करती है।
3. **Save** पर क्लिक करें।

टैग का नाम बदलने के लिए पेंसिल आइकन और उसे डिलीट करने के लिए बिन आइकन इस्तेमाल करें। संपर्कों पर टैग लगाने के लिए देखें [व्हाट्सऐप संपर्क प्रबंधित करें](manage-whatsapp-contacts.md)।

### यूज़र एट्रिब्यूट { #user-attributes }

**User Attributes** हर संपर्क पर रखे जाने वाले अतिरिक्त फ़ील्ड हैं। सूची में **Attribute Name**, उसका **Label**, **Type** और **Created At** दिखते हैं।

![User Attributes सूची, जिसमें Attribute Name, Label, Type, Created At और Create बटन दिख रहे हैं](../assets/screenshots/whatsapp-manage-2-user-attributes.png)

1. एट्रिब्यूट जोड़ने के लिए **Create** पर क्लिक करें।
2. कोई एट्रिब्यूट खोजने के लिए **Search attribute name** से खोजें।

एट्रिब्यूट हर संपर्क पर **Custom Attributes** के नीचे दिखते हैं, और आप उन्हें **@** आइकन से ब्रॉडकास्ट में डाल सकते हैं। देखें [ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)।

### कस्टम इवेंट { #custom-events }

**Custom Events** वे इवेंट हैं जो आपके अपने सिस्टम API के ज़रिए फ़्लो शुरू करने के लिए भेजते हैं, जैसे ऑर्डर का शिप होना, नतीजे का पब्लिश होना या पेमेंट का क्लियर होना। हर इवेंट के फ़ील्ड फ़्लो में `{{event.*}}` वेरिएबल बन जाते हैं।

![Custom Events सूची, जिसमें एक सक्रिय इवेंट, उसकी key और प्रॉपर्टी की गिनती, और Create बटन दिख रहे हैं](../assets/screenshots/whatsapp-manage-3-custom-events.png)

हर इवेंट अपना नाम, **Active** स्टेटस, अपनी key (जैसे `order_cancelled`) और उसमें कितनी प्रॉपर्टी हैं, यह दिखाता है। इवेंट जोड़ने के लिए **Create** पर क्लिक करें। कोई इवेंट खोजने के लिए key या लेबल से खोजें।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## संबंधित गाइड { #related }

- [व्हाट्सऐप संपर्क प्रबंधित करें](manage-whatsapp-contacts.md)
- [ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)
- [अपनी व्हाट्सऐप बिज़नेस प्रोफ़ाइल सेट करें](whatsapp-business-profile.md)
