---
title: कैंपेन और कैंपेन टेम्प्लेट ट्रैक करें
description: CRM कैंपेन बनाएँ, लीड्स, कॉन्टैक्ट या किसी ग्रुप से ऑडियंस जोड़ें, खर्च और जवाब ट्रैक करें, और बार-बार काम आने वाले मैसेज टेम्प्लेट रखें।
---

# कैंपेन और कैंपेन टेम्प्लेट ट्रैक करें { #track-campaigns-and-campaign-templates }

अपना मार्केटिंग कैंपेन CRM में दर्ज करें। उसकी तारीखें, खर्च और उम्मीद की कमाई लिखें, और जोड़ें कि वह किन लीड्स और कॉन्टैक्ट तक पहुँचा। इसके बाद कैंपेन में उसे पाने वालों की लिस्ट होगी, और उसका खर्च **Campaign ROI** रिपोर्ट में दिखेगा।

## शुरू करने से पहले { #before-you-start }

- लेफ़्ट रेल में आपको **CRM** दिखे, और उसके पैनल में **Campaigns**। न दिखे, तो अपने एडमिन से CRM एक्सेस माँगें।
- जिन लीड्स या कॉन्टैक्ट को जोड़ना है, वे पहले से बने हों। या आपके पास कॉन्टैक्ट ग्रुप तैयार हो। कॉन्टैक्ट ग्रुप को सेगमेंट भी कहते हैं।

!!! note "CRM कैंपेन मैसेज नहीं भेजता"
    CRM कैंपेन सिर्फ़ अपनी ऑडियंस और जवाब दर्ज करता है। वह मैसेज नहीं भेजता। **Resend** पर **Sending is not wired to a channel yet — a CRM campaign records its audience and responses, it does not dispatch messages.** लिखा आता है। मैसेज भेजने के लिए WhatsApp Broadcast या ईमेल कैंपेन इस्तेमाल करें। देखें [ईमेल](../email/index.md)।

## स्टेप { #steps }

### कैंपेन बनाएँ { #create-a-campaign }

1. लेफ़्ट रेल में **CRM** खोलें, फिर **Campaigns** चुनें।
2. ऊपर दाएँ **New Campaign** पर क्लिक करें। **New Campaign** विंडो खुलती है, जिसमें पहले **Campaign Details** दिखता है।
3. **Campaign Name \*** में नाम लिखें, जैसे `Diwali offer 2026`।
4. कोई **Type** चुनें, जैसे **WHATSAPP**, **EMAIL** या **EVENT**।
5. **Start Date** और **End Date** चुनें।
6. चाहें तो **Budgeted Cost**, **Actual Cost**, **Expected Revenue**, **Expected Responses** और **Description** भरें।
7. **Next: Audience** पर क्लिक करें। कैंपेन सेव हो जाता है और **Audience** स्टेप खुलता है।

### ऑडियंस जोड़ें { #add-the-audience }

1. **Audience** में **Add Members** पर क्लिक करें। **Members — …** विंडो खुलती है।
2. लोगों को एक-एक करके जोड़ना हो, तो **Select Leads / Contacts** में उन्हें चुनें।
3. पूरा ग्रुप जोड़ना हो, तो **Add entire segment** में उसे चुनें और **Add Segment** पर क्लिक करें। मैसेज में दिखता है कि कितने सदस्य जुड़े और कितने पहले से मौजूद थे।
4. किसी को हटाना हो, तो उसकी लाइन में **Remove** पर क्लिक करें।
5. **Close** पर क्लिक करें, फिर **Done** पर क्लिक करें।

चाहें तो **Mode** में **Broadcast** या **Reply** चुनें। कैंपेन के साथ कोई फ़ाइल रखने के लिए **Attach File** पर क्लिक करें। ये दोनों सिर्फ़ आपके ब्राउज़र में सेव होते हैं।

### कैंपेन देखें { #review-a-campaign }

1. **Campaigns** की लिस्ट में किसी कैंपेन पर क्लिक करें।
2. **Overview**, **Recipients** और **Diagnostics** टैब देखें।
3. टूलबार इस्तेमाल करें। सदस्य बदलने के लिए **Recipients**, जानकारी बदलने के लिए **Edit**, और जुड़े टेम्प्लेट का प्रीव्यू देखने के लिए **Message**।

!!! warning "कैंपेन डिलीट करना"
    **Delete** कैंपेन और उसकी सदस्य लिस्ट हटा देता है। इसे वापस नहीं लाया जा सकता। **ACTIVE** कैंपेन डिलीट नहीं होता। पहले उसे पूरा करें या कैंसिल करें।

### कैंपेन टेम्प्लेट रखें { #keep-campaign-templates }

1. **Campaigns** में **Templates** पर क्लिक करें। **Campaign Templates** स्क्रीन खुलती है।
2. **New Template** पर क्लिक करें।
3. **Template Name \*** और **Target Model / Type \*** भरें। फिर कोई **Channel** और **Stage** चुनें।
4. ईमेल के लिए **Email Subject** जोड़ें।
5. मैसेज लिखें। इसमें `{{firstName}}`, `{{lastName}}`, `{{fullName}}`, `{{email}}`, `{{company}}` और `{{campaignName}}` जैसे प्लेसहोल्डर लगा सकते हैं।
6. नमूने की वैल्यू के साथ देखने के लिए **Preview** पर क्लिक करें, फिर **Save** पर क्लिक करें।

हर टेम्प्लेट पर **Preview**, **Duplicate**, **Edit** और **Delete** मिलते हैं। **All**, **Email** या **WhatsApp** से फ़िल्टर करें।

!!! warning "टेम्प्लेट सिर्फ़ इसी ब्राउज़र में सेव होते हैं"
    कैंपेन टेम्प्लेट उसी डिवाइस और ब्राउज़र में रहते हैं जहाँ आपने उन्हें बनाया है। आपकी टीम के लोग उन्हें नहीं देख पाते। साइट डेटा साफ़ करने पर वे हट जाते हैं।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Campaign name is required.** | **Campaign Name \*** खाली है। | नाम लिखें। |
| **End date cannot be before start date.** | **End Date**, **Start Date** से पहले की है। | तारीखें ठीक करें। |
| **Campaign members can only be edited in DRAFT or SCHEDULED state.** | कैंपेन **ACTIVE**, **COMPLETED** या **CANCELLED** है। | कैंपेन चल पड़ने के बाद सदस्य नहीं बदल सकते। नई ऑडियंस के लिए नया कैंपेन बनाएँ। |
| **Campaign is ACTIVE — complete or cancel it before deleting.** | आपने चालू कैंपेन डिलीट करना चाहा। | उसे पूरा करें या कैंसिल करें, फिर डिलीट करें। |
| **No template linked to this campaign yet — pick one in Edit.** | कैंपेन से कोई टेम्प्लेट जुड़ा नहीं है। | कैंपेन में एक टेम्प्लेट जोड़ें [VERIFY: where to link a template on desktop]। |
| आपका बनाया टेम्प्लेट नहीं दिख रहा | वह किसी दूसरे ब्राउज़र या डिवाइस में सेव हुआ था। | वही ब्राउज़र खोलें, या टेम्प्लेट दोबारा बनाएँ। |

## संबंधित गाइड { #related }

- [डील्स बनाएँ और मैनेज करें](manage-deals.md)
- [सेल्स परफ़ॉर्मेंस ट्रैक करें](track-sales-performance.md)
- [ईमेल](../email/index.md)
- [CRM ओवरव्यू](../crm/index.md)
