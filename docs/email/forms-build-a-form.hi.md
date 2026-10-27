---
title: फ़ॉर्म बनाएँ
description: सवाल जोड़ें, पेज का लुक सेट करें, सबमिशन के बाद क्या होगा यह चुनें और पब्लिश करें।
---

# फ़ॉर्म बनाएँ { #build-a-form }

फ़ॉर्म बिल्डर में 3 टैब हैं: **Questions**, **Responses** और **Settings**। आख़िर में आपके पास ऐसा फ़ॉर्म होगा जो वही पूछता है जो आपको चाहिए, और जवाबों को सही जगह भेज देता है।

## शुरू करने से पहले { #before-you-start }

- आपने एक फ़ॉर्म बना लिया हो। इसके लिए [फ़ॉर्म बनाएँ और संभालें](forms-create-and-manage.md) देखें।

## स्टेप { #steps }

### सवाल जोड़ें { #add-questions }

1. फ़ॉर्म खोलें। **Questions** टैब खुलेगा।
2. सवाल के किसी टाइप पर क्लिक करें। आम टाइप पहले दिखते हैं। बाकी के लिए **More types** पर क्लिक करें।
3. इनमें से चुनें: **Short answer**, **Paragraph**, **Number**, **Multiple choice**, **Checkboxes**, **Dropdown**, **Yes / No**, **Rating**, **Net Promoter Score (0–10)**, **Grid**, **Phone**, **Email**, **Date**, **Time**, **File upload**, **Location** या **Statement**।
4. सवाल लिखें। चाहें तो **Help text (optional)** जोड़ें।
5. जिन सवालों का जवाब देना ज़रूरी है, उनके लिए required स्विच चालू करें।
6. विकल्पों के लिए हर लाइन में 1 विकल्प लिखें, या **Add option** पर क्लिक करें। **Grid** में **Rows** और **Columns** होते हैं।
7. कोई सवाल पिछले जवाब के बाद ही दिखाना हो, तो **Only ask this sometimes** खोलें।
8. सवालों में बदलाव के लिए **Duplicate this question** या **Delete this question** इस्तेमाल करें।
9. किसी सवाल को छिपाने के लिए **Stop asking this — it stays here** इस्तेमाल करें। **Ask this again** उसे वापस ले आता है।

### ढाँचा जोड़ें { #add-structure }

1. पेज ब्रेक जोड़ने के लिए **Break the form up** पर क्लिक करें।
2. अपनी टीम के लिए स्टिकी नोट जोड़ने के लिए **Leave a note** पर क्लिक करें।
3. जवाबों के बाद होने वाला काम जोड़ने के लिए **Do something with the answers** पर क्लिक करें।

### सवाल इम्पोर्ट करें { #import-questions }

1. **Import questions** पर क्लिक करें।
2. **From a file** चुनें। फ़ाइल में `question`, `type`, `required`, `help` और `choices` कॉलम होने चाहिए। विकल्पों को सेमीकोलन से अलग करें। फ़ॉर्मेट देखने के लिए **Copy a sample** पर क्लिक करें।
3. या **From another form** चुनें।

### पेज को सजाएँ { #style-the-page }

1. थीम बटन पर क्लिक करें: **Colour, typeface, layout and how to reach you**।
2. हेडलाइन, बटन का टेक्स्ट और उसके नीचे की लाइन सेट करें। रंग और लेआउट चुनें: **Landing page** या **card form**।
3. **Ways to reach you** में **Phone**, **WhatsApp**, **Website** या **Details page** जोड़ें। चाहें तो पता और खुलने का समय भी जोड़ें।

### सेटिंग्स चुनें { #choose-settings }

1. **Settings** टैब खोलें।
2. **General** में **Status** को **Draft**, **Active** या **Archived** पर सेट करें। लिंक के लिए छोटी **Key** सेट करें।
3. **Sharing** में **Share with a public link** चालू करें। इसके लिए फ़ॉर्म **Active** होना चाहिए। चाहें तो **Domain**, **Let search engines find it** और **Analytics tag** भी सेट करें।
4. **Responses** में **Collect email addresses**, **Limit to one response** और **Lead source** चुनें।
5. **After submission** में **Thank-you message**, **Button after submitting** और **Or send them straight on** का लिंक सेट करें।
6. जवाब आने के बाद होने वाले काम चालू करें: CRM में नई Lead बनाना, जवाबों को कॉन्टैक्ट पर कीज़ के नाम से सेव करना, सहमति दर्ज करना, या **Service** और **Staff member** के साथ अपॉइंटमेंट बुक करना।

### सेव और पब्लिश करें { #save-and-publish }

1. **Save** पर क्लिक करें। बार में **All changes saved** या **Unsaved changes** दिखता है।
2. **Publish** पर क्लिक करें। जो भी समस्या बताई जाए, उसे ठीक करें और दोबारा पब्लिश करें।
3. बदलाव सेव किए बिना बाहर जाने पर **Leave without saving?** आता है। इसमें **Keep editing**, **Discard changes** या **Save and leave** चुन सकते हैं।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| पब्लिश नहीं हो रहा। | कोई जाँच फ़ेल हुई। आम वजहें: 2 सवालों की key एक ही है, किसी विकल्प वाले सवाल में विकल्प नहीं हैं, या जवाब कहीं नहीं जा रहे। | मैसेज पढ़ें, उसे ठीक करें और फिर पब्लिश करें। |
| कंडीशनल सवाल की अनुमति नहीं है। | वह बाद वाले सवाल पर निर्भर है। | पहले वाला सवाल चुनें। |
| पब्लिक लिंक काम नहीं करता। | फ़ॉर्म **Active** नहीं है। | **Status** को **Active** पर सेट करें। |

## संबंधित गाइड { #related }

- [फ़ॉर्म बनाएँ और संभालें](forms-create-and-manage.md)
- [फ़ॉर्म का प्रीव्यू देखें और शेयर करें](forms-share-and-preview.md)
- [फ़ॉर्म के जवाब पढ़ें](forms-read-responses.md)
