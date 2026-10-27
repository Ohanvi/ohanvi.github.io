---
title: कैंपेन और कैंपेन टेम्प्लेट ट्रैक करें
description: CRM कैंपेन बनाएँ, लीड्स, संपर्कों या किसी ग्रुप से उसकी ऑडियंस जोड़ें, खर्च और जवाब ट्रैक करें, और दोबारा इस्तेमाल होने वाले मैसेज टेम्प्लेट रखें।
---

# कैंपेन और कैंपेन टेम्प्लेट ट्रैक करें { #track-campaigns-and-campaign-templates }

CRM में मार्केटिंग कैंपेन दर्ज करें, उसकी तारीखों, खर्च और अपेक्षित कमाई के साथ, और उन लीड्स व संपर्कों के साथ जिन तक वह पहुँचा। आख़िर में कैंपेन में उसके पाने वालों की सूची होगी, और उसका खर्च **Campaign ROI** रिपोर्ट में दिखेगा।

## शुरू करने से पहले { #before-you-start }

- लेफ़्ट रेल में आपको **CRM** दिखता हो, और उसके पैनल में **Campaigns**। अगर नहीं, तो अपने एडमिन से CRM एक्सेस माँगें।
- जिन लीड्स या संपर्कों को जोड़ना है वे पहले से मौजूद हों, या आपके पास तैयार संपर्क समूह हो। संपर्क समूह को सेगमेंट भी कहते हैं।

!!! note "CRM कैंपेन मैसेज नहीं भेजता"
    CRM कैंपेन अपनी ऑडियंस और जवाब दर्ज करता है। वह मैसेज डिलीवर नहीं करता। **Resend** पर **Sending is not wired to a channel yet — a CRM campaign records its audience and responses, it does not dispatch messages.** दिखता है। भेजने के लिए व्हाट्सऐप ब्रॉडकास्ट या ईमेल कैंपेन का इस्तेमाल करें। देखें [ईमेल](../email/index.md)।

## चरण { #steps }

### कैंपेन बनाएँ { #create-a-campaign }

1. लेफ़्ट रेल में **CRM** खोलें, फिर **Campaigns** चुनें।
2. ऊपर दाएँ **New Campaign** पर क्लिक करें। **New Campaign** विंडो **Campaign Details** पर खुलती है।
3. **Campaign Name \*** में नाम लिखें, जैसे `Diwali offer 2026`।
4. एक **Type** चुनें, जैसे **WHATSAPP**, **EMAIL** या **EVENT**।
5. **Start Date** और **End Date** चुनें।
6. वैकल्पिक: **Budgeted Cost**, **Actual Cost**, **Expected Revenue**, **Expected Responses** और **Description** भरें।
7. **Next: Audience** पर क्लिक करें। कैंपेन सेव हो जाता है और **Audience** चरण खुलता है।

### ऑडियंस जोड़ें { #add-the-audience }

1. **Audience** पर **Add Members** पर क्लिक करें। **Members — …** विंडो खुलती है।
2. लोगों को एक-एक करके जोड़ने के लिए **Select Leads / Contacts** का इस्तेमाल करें और उन्हें चुनें।
3. पूरा ग्रुप जोड़ने के लिए **Add entire segment** में उसे चुनें, फिर **Add Segment** पर क्लिक करें। संदेश में दिखता है कि कितने सदस्य जुड़े और कितने पहले से मौजूद थे।
4. किसी को हटाने के लिए उसकी पंक्ति में **Remove** पर क्लिक करें।
5. **Close** पर क्लिक करें, फिर **Done** पर क्लिक करें।

वैकल्पिक: **Mode** में **Broadcast** या **Reply** चुनें, और कैंपेन के साथ फ़ाइल रखने के लिए **Attach File** पर क्लिक करें। दोनों सिर्फ़ आपके ब्राउज़र में सेव होते हैं।

### कैंपेन की समीक्षा करें { #review-a-campaign }

1. **Campaigns** पर सूची में किसी कैंपेन पर क्लिक करें।
2. **Overview**, **Recipients** और **Diagnostics** टैब देखें।
3. टूलबार का इस्तेमाल करें: सदस्य बदलने के लिए **Recipients**, ब्योरा बदलने के लिए **Edit**, और जुड़े टेम्प्लेट का प्रीव्यू देखने के लिए **Message**।

!!! warning "कैंपेन डिलीट करना"
    **Delete** कैंपेन और उसकी सदस्य सूची को हटा देता है। इसे वापस नहीं किया जा सकता। **ACTIVE** कैंपेन डिलीट नहीं हो सकता। पहले उसे पूरा करें या रद्द करें।

### कैंपेन टेम्प्लेट रखें { #keep-campaign-templates }

1. **Campaigns** पर **Templates** पर क्लिक करें। **Campaign Templates** स्क्रीन खुलती है।
2. **New Template** पर क्लिक करें।
3. **Template Name \*** और **Target Model / Type \*** भरें, और एक **Channel** व **Stage** चुनें।
4. ईमेल के लिए **Email Subject** जोड़ें।
5. मैसेज लिखें। `{{firstName}}`, `{{lastName}}`, `{{fullName}}`, `{{email}}`, `{{company}}` और `{{campaignName}}` जैसे प्लेसहोल्डर इस्तेमाल करें।
6. नमूना मानों के साथ देखने के लिए **Preview** पर क्लिक करें, फिर **Save** पर क्लिक करें।

हर टेम्प्लेट पर **Preview**, **Duplicate**, **Edit** और **Delete** का इस्तेमाल करें। **All**, **Email** या **WhatsApp** से फ़िल्टर करें।

!!! warning "टेम्प्लेट सिर्फ़ इसी ब्राउज़र में सेव होते हैं"
    कैंपेन टेम्प्लेट उसी डिवाइस और ब्राउज़र में रखे जाते हैं जहाँ आप उन्हें बनाते हैं। आपके टीम के सदस्य उन्हें नहीं देख पाते, और साइट डेटा साफ़ करने पर वे हट जाते हैं।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Campaign name is required.** | **Campaign Name \*** खाली है। | नाम लिखें। |
| **End date cannot be before start date.** | **End Date**, **Start Date** से पहले की है। | तारीखें ठीक करें। |
| **Campaign members can only be edited in DRAFT or SCHEDULED state.** | कैंपेन **ACTIVE**, **COMPLETED** या **CANCELLED** है। | कैंपेन चलने के बाद सदस्य बदले नहीं जा सकते। नई ऑडियंस के लिए नया कैंपेन बनाएँ। |
| **Campaign is ACTIVE — complete or cancel it before deleting.** | आपने चल रहे कैंपेन को डिलीट करने की कोशिश की। | उसे पूरा करें या रद्द करें, फिर डिलीट करें। |
| **No template linked to this campaign yet — pick one in Edit.** | कैंपेन से कोई टेम्प्लेट जुड़ा नहीं है। | कैंपेन से एक टेम्प्लेट जोड़ें [VERIFY: where to link a template on desktop]। |
| आपका बनाया टेम्प्लेट नहीं दिख रहा | वह किसी दूसरे ब्राउज़र या डिवाइस में सेव हुआ था। | वही ब्राउज़र खोलें, या टेम्प्लेट दोबारा बनाएँ। |

## संबंधित गाइड { #related }

- [डील बनाएँ और प्रबंधित करें](manage-deals.md)
- [सेल्स परफ़ॉर्मेंस ट्रैक करें](track-sales-performance.md)
- [ईमेल](../email/index.md)
- [CRM ओवरव्यू](../crm/index.md)
