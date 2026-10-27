---
title: ईमेल कॉन्टैक्ट, लिस्ट और सेगमेंट जोड़ें
description: जिन्हें आप ईमेल भेजते हैं, उन्हें जोड़ें या इम्पोर्ट करें, उन्हें लिस्ट में बाँटें, और ऐसे सेगमेंट बनाएँ जो कैंपेन को लिस्ट के एक हिस्से तक पहुँचाएँ।
---

# ईमेल कॉन्टैक्ट, लिस्ट और सेगमेंट जोड़ें { #add-email-contacts-lists-and-segments }

जिन लोगों को ईमेल भेजना है, उन्हें जोड़ें और फिर ग्रुप में बाँटें। आख़िर में आपके पास **Subscribed** मार्क किए हुए कॉन्टैक्ट होंगे, कैंपेन भेजने के लिए कम से कम 1 लिस्ट होगी, और चाहें तो सेगमेंट भी होंगे। सेगमेंट लिस्ट को आपकी शर्तों से मेल खाने वाले लोगों तक सीमित कर देते हैं।

## शुरू करने से पहले { #before-you-start }

- लेफ़्ट रेल में आपको **Email** दिखे और उसके पैनल में **Audience** हो। अगर नहीं दिखता, तो अपने एडमिन से एक्सेस माँगें।
- आपके पास इन लोगों को ईमेल भेजने की अनुमति हो। मार्केटिंग ईमेल सिर्फ़ **Subscribed** कॉन्टैक्ट को जाते हैं।
- इम्पोर्ट करने के लिए आपकी फ़ाइल CSV, XLSX या XLS हो, जिसमें **Email**, **First Name**, **Last Name** और **Phone** कॉलम हों।

## स्टेप { #steps }

### कॉन्टैक्ट एक-एक करके या कई एक साथ जोड़ें { #add-contacts-one-at-a-time-or-several-at-once }

1. लेफ़्ट रेल में **Email** खोलें, फिर **Audience** चुनें, फिर **Emails** टैब।
2. 1 व्यक्ति को जोड़ने के लिए **Add Contact** पर क्लिक करें। **Email** भरें। चाहें तो **First Name**, **Last Name**, **Phone**, **Birthday**, **Subscription Status** और **Tags (comma-separated) — e.g. vip,newsletter** भी भरें। फ़ॉर्म सेव करें।
3. कई लोगों को जोड़ने के लिए **Bulk Import Contacts** के बगल के तीर पर क्लिक करें, फिर **Add Multiple** पर क्लिक करें। **Add Multiple Contacts** डायलॉग खुलेगा।
4. हर **Email** लाइन में 1 पता लिखें। और जोड़ने के लिए **Add another row** पर क्लिक करें।
5. चाहें तो **Add to Mailing List (optional)** में कोई लिस्ट चुनें, या **Create New List…** पर क्लिक करें।
6. **Subscription Type** में **Marketing (Subscribed)** रहने दें, जब तक इन लोगों ने मार्केटिंग ईमेल के लिए अपनी सहमति न दी हो।
7. **Add** पर क्लिक करें। **Result** सेक्शन में दिखता है कि कौन-सी लाइनें जुड़ीं। जो लाइनें फ़ेल हुईं, उन्हें दोबारा आज़माने के लिए **Retry Failed** पर क्लिक करें।

नए अकाउंट में **Add the people you want to email** कार्ड पर **Add contacts** मिलता है। इससे भी यही डायलॉग खुलता है।

### फ़ाइल से कॉन्टैक्ट इम्पोर्ट करें { #import-contacts-from-a-file }

1. **Emails** टैब पर **Bulk Import Contacts** पर क्लिक करें। **Import Contacts** विज़ार्ड खुलेगा।
2. **How would you like to add contacts?** के नीचे **Upload a file** या **Copy and paste** चुनें। **Continue** पर क्लिक करें।
3. अपनी फ़ाइल चुनें, या हर लाइन में 1 कॉन्टैक्ट `email, first name, last name, phone` के फ़ॉर्मेट में पेस्ट करें। **Continue** पर क्लिक करें।
4. **Organize your contacts** के नीचे चाहें तो **Mailing List (optional)** में लिस्ट चुनें। **Continue** पर क्लिक करें।
5. **Tag your contacts** के नीचे चाहें तो **Tags (comma-separated)** में टैग लिखें, जैसे `vip,newsletter`। **Continue** पर क्लिक करें।
6. **Match Columns** के नीचे अपनी फ़ाइल के हर कॉलम को **Email**, **First Name**, **Last Name**, **Phone** या **Skip this column** से मिलाएँ। कम से कम 1 कॉलम **Email** से मिलना चाहिए। **Continue** पर क्लिक करें।
7. **Set a marketing status** के नीचे इस फ़ाइल के सभी कॉन्टैक्ट के लिए स्टेटस चुनें। मार्केटिंग ईमेल सिर्फ़ subscribed कॉन्टैक्ट को जाते हैं। **Continue** पर क्लिक करें।
8. **Review and complete your import** के नीचे जानकारी जाँचें, फिर **Complete Import** पर क्लिक करें।
9. **Import complete** में **New contacts detected** दिखता है। यह भी दिखता है कि कितने कॉन्टैक्ट लिस्ट में जुड़े और टैग हुए। जो लाइनें फ़ेल रहीं, वे कारण के साथ लिस्ट में आती हैं। **Done** पर क्लिक करें।

!!! note "ध्यान दें"
    कॉलम मैचिंग सिर्फ़ CSV फ़ाइलों के लिए काम करती है। Excel फ़ाइलों में कॉलम इसी क्रम में होने चाहिए: **Email**, **First Name**, **Last Name**, **Phone**।

पहले के इम्पोर्ट देखने के लिए **Emails** टैब पर **Manage audience** पर क्लिक करें, फिर **Import history** पर क्लिक करें।

### लिस्ट बनाएँ और उसमें लोगों को जोड़ें { #create-a-list-and-add-people-to-it }

1. लेफ़्ट रेल में **Email** खोलें, फिर **Audience** चुनें, फिर **Email Groups** टैब और **Fixed**।
2. **Create list** पर क्लिक करें। **List name** में `Newsletter` जैसा नाम लिखें। **Description (optional)** जोड़ें, फिर **Create list** पर क्लिक करें।
3. नई लिस्ट पर **Add contacts — this list is empty** पर क्लिक करें। **Members** डायलॉग खुलेगा।
4. **Search contacts to add…** में जिन लोगों को जोड़ना है, उन्हें खोजकर टिक करें, फिर **Add** पर क्लिक करें।
5. **Close** पर क्लिक करें।

किसी मौजूदा लिस्ट के साथ काम करने के लिए उसका **⋮** मेन्यू खोलें। **Manage Members** लोगों को जोड़ता या हटाता है। **Duplicate** उसकी कॉपी बनाता है। **Merge Into Another List** उसके सदस्यों को दूसरी लिस्ट में ले जाता है।

फ़ाइल से लोगों को सीधे लिस्ट में जोड़ने के लिए **Manage Members** खोलें, फिर **Import to This List** पर क्लिक करें।

### सेगमेंट बनाएँ { #build-a-segment }

सेगमेंट लिस्ट को आपकी शर्तों से मेल खाने वाले लोगों तक सीमित करता है। वह उन लोगों को कभी नहीं जोड़ता जो लिस्ट में नहीं हैं।

1. लेफ़्ट रेल में **Email** खोलें, फिर **Audience** चुनें, फिर **Email Groups** टैब और **Rule**।
2. **Create segment** पर क्लिक करें। **New segment** स्क्रीन खुलेगी।
3. **Start with a common segment** के नीचे कोई कार्ड चुनें, या **Build from scratch** पर क्लिक करें।
4. **Add filter** पर क्लिक करें, **Choose a filter** में फ़िल्टर चुनें, फिर उसकी वैल्यू सेट करें।
5. शर्तों को मिलाने के लिए **Contacts match** को **all** या **any** पर सेट करें। ग्रुप के अंदर ग्रुप बनाने के लिए **Add AND group** या **Add OR group** पर क्लिक करें।
6. प्रीव्यू जाँचें। **WHO MATCHES THIS SEGMENT** में गिनती और **SAMPLE CONTACTS** दिखते हैं।
7. **Untitled segment** में नाम लिखें, फिर **Save segment** पर क्लिक करें।

कैंपेन को सेगमेंट तक पहुँचाने के लिए कैंपेन में लिस्ट और सेगमेंट चुनें। इसके लिए [ईमेल कैंपेन भेजें](send-email-campaign.md) देखें।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **A contact with email '…' already exists.** | यह पता पहले से **Contacts** में है। | इसके बजाय मौजूदा कॉन्टैक्ट एडिट करें। |
| **A deleted contact with this email exists — reactivate it instead of recreating.** | कॉन्टैक्ट पहले डिलीट किया गया था। | डिलीट किया गया कॉन्टैक्ट ढूँढें और उसे फिर से चालू करें। |
| इम्पोर्ट की लाइन में **Contact with this email already exists** या **Invalid email address '…'** दिखता है | लाइन में पहले से मौजूद कॉन्टैक्ट दोहराया गया है या पता गलत है। | अपनी फ़ाइल में लाइन ठीक करें और दोबारा इम्पोर्ट करें। |
| **Map at least one column to Email before continuing** | कोई कॉलम **Email** से मैच नहीं किया गया। | अपने ईमेल वाले कॉलम को **Email** से मैच करें। |
| **Add at least one complete condition before saving.** | सेगमेंट के किसी फ़िल्टर में वैल्यू नहीं है। | अधूरा फ़िल्टर भरें या हटा दें। |
| **No contacts match these conditions yet.** | शर्तें बहुत सख़्त हैं। | कोई फ़िल्टर ढीला करें, या **all** को **any** कर दें। |

## संबंधित गाइड { #related }

- [ईमेल कैंपेन भेजें](send-email-campaign.md)
- [नतीजे ट्रैक करें और अनसब्सक्राइब व बाउंस संभालें](track-email-results.md)

<!-- Menu paths updated: Contacts, Lists and Segments are now in Audience. -->
