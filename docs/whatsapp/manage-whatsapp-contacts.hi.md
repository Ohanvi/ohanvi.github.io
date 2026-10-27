---
title: व्हाट्सऐप संपर्क प्रबंधित करें
description: व्हाट्सऐप संपर्क जोड़ें और इम्पोर्ट करें, उन्हें संपर्क समूहों में रखें, टैग करें, और नियंत्रित करें कि किसने आपके संदेशों के लिए ऑप्ट-इन या ऑप्ट-आउट किया है।
---

# व्हाट्सऐप संपर्क प्रबंधित करें { #manage-whatsapp-contacts }

अपनी व्हाट्सऐप ऑडियंस बनाएँ और उसकी सहमति अपडेट रखें। इस पेज के अंत तक आप संपर्क जोड़ या इम्पोर्ट कर सकते हैं, उन्हें ग्रुप और टैग कर सकते हैं, संपर्कों को ऑप्ट-इन या ऑप्ट-आउट कर सकते हैं, और वे अतिरिक्त शब्द सेट कर सकते हैं जो ग्राहक आपके संदेश रोकने के लिए भेज सकते हैं।

## शुरू करने से पहले { #before-you-start }

- आपको **WhatsApp** पैनल में **Contact** दिखता हो। न दिखे तो अपने एडमिन से पूछें। देखें [टीम के सदस्य, रोल और अनुमतियाँ प्रबंधित करें](../settings/roles-and-permissions.md)।
- इम्पोर्ट करने के लिए आपके पास फ़ोन नंबर कॉलम वाली CSV या Excel फ़ाइल हो।
- CRM के संपर्क रिकॉर्ड, डील और गतिविधियों के लिए देखें [CRM ओवरव्यू](../crm/index.md)।

## चरण { #steps }

### अपने संपर्क खोलें { #open-your-contacts }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Contact** चुनें। **Contacts** स्क्रीन खुलती है।
2. ऊपर की पंक्ति स्टेटस से फ़िल्टर करती है: **All Status**, **Active** और **Inactive**, हर एक अपनी गिनती के साथ। उसके नीचे **Contacts** और **Groups** टैब दिखाते हैं कि आपके पास हर एक के कितने हैं।

    ![एक संपर्क पर फ़िल्टर की गई Contacts सूची, जिसमें All Status, Active और Inactive फ़िल्टर और Contacts व Groups टैब दिख रहे हैं](../assets/screenshots/whatsapp-contacts-1-list.png)

3. किसी को खोजने के लिए **Search name, phone or email…** में टाइप करें। किसी पंक्ति पर क्लिक करके दाईं ओर संपर्क देखें, जिसके सेक्शन हैं **Identity**, **Messaging**, **Custom Attributes**, **Activity** और **Record**।

### संपर्क जोड़ें { #add-a-contact }

1. ऊपर दाईं ओर **Add contact** पर क्लिक करें। **Add Contact** खुलता है।
2. **Phone number \*** में देश चुनें और नंबर लिखें। बाकी सब वैकल्पिक है।
3. अगर आपके पास हों तो **First name**, **Last name** और **Email** भरें। आप **Tags** और **Custom Attributes** भी जोड़ सकते हैं।
4. **Opted In** पर तभी टिक लगाएँ जब व्यक्ति आपके संदेश पाने के लिए सहमत हो। यह डिफ़ॉल्ट रूप से बंद है।

    ![Priya Sharma के लिए भरा हुआ Add Contact फ़ॉर्म, जिसमें Opted In पर टिक नहीं है](../assets/screenshots/whatsapp-contacts-2-add-contact.png)

5. **Save Contact** पर क्लिक करें। संपर्क सूची में जुड़ जाता है। उसे खोजने के लिए नाम खोजें।

### संपर्क इम्पोर्ट करें { #import-contacts }

1. ऊपर दाईं ओर **Import** (अपलोड) आइकन पर क्लिक करें। **Import WhatsApp Contacts** खुलता है।

    ![Import WhatsApp Contacts विंडो, जिसमें Add to List और Choose an Excel or CSV file दिख रहे हैं](../assets/screenshots/whatsapp-contacts-3-import.png)

2. ऊपर **Add to List** में कोई संपर्क समूह चुनें, या **Business Contact** समूह इस्तेमाल करने के लिए **— None —** रहने दें। नया बनाने के लिए **New Contact Group** पर क्लिक करें।
3. अगर आपको टेम्प्लेट चाहिए तो **Download Sample CSV** पर क्लिक करें।
4. **Choose an Excel or CSV file** पर क्लिक करें और अपनी फ़ाइल चुनें। यह `.xlsx` या `.csv` हो सकती है, कॉलम किसी भी क्रम में।
5. **Header identifiers** के नीचे हर फ़ील्ड के लिए अपनी फ़ाइल का कॉलम चुनें, जैसे **Phone Number** और **First Name**।
6. **Options** के नीचे, बिना कोड वाले नंबरों के लिए **Default Country Code** सेट करें। मौजूदा टैग को फ़ाइल के टैग से बदलने के लिए **Replace Tags** चालू करें।
7. **Import** पर क्लिक करें। पूरा होने पर **Import complete** दिखता है।

जो फ़ोन नंबर पहले से मौजूद है, वह उसी संपर्क में मिला दिया जाता है। बिना फ़ोन नंबर वाली पंक्तियाँ छोड़ दी जाती हैं। पिछले इम्पोर्ट देखने के लिए **Import history** पर क्लिक करें।

इम्पोर्ट करके तुरंत कैंपेन भेजने के लिए इसकी जगह **Import and broadcast** चुनें।

### संपर्क इम्पोर्ट करें और उन्हें ब्रॉडकास्ट करें { #import-contacts-and-broadcast-to-them }

इसे तब इस्तेमाल करें जब आप फ़ाइल के लोगों को तुरंत संदेश भेजना चाहते हों। यह वही फ़ाइल इम्पोर्ट है, पर संपर्क समूह ज़रूरी है।

1. ऊपर **Actions** पर क्लिक करें, फिर **Import and Broadcast** पर। आप **Import** आइकन पर राइट-क्लिक करके **Import and broadcast** भी चुन सकते हैं। **Import WhatsApp Contacts** खुलता है।
2. **Add to List** में कोई संपर्क समूह चुनें। हेल्प टेक्स्ट में **The contact group these contacts will be broadcast to.** लिखा है। यहाँ **— None —** विकल्प नहीं है।
3. अगर समूह अभी है नहीं, तो **New Contact Group** पर क्लिक करें।
4. **Choose an Excel or CSV file** पर क्लिक करें और अपनी फ़ाइल चुनें।
5. **Header identifiers** के नीचे हर फ़ील्ड का कॉलम चुनें, जैसा ऊपर **Import contacts** में है।
6. **Import** पर क्लिक करें। पूरा होने पर **Import complete** दिखता है।
7. संदेश पढ़ें **Contacts imported — pick that group in the Audience step to broadcast to them.** **Campaign** कंपोज़ स्क्रीन खुलती है।
8. **Audience** चरण में वही समूह चुनें जो आपने चरण 2 में चुना था। फिर [व्हाट्सऐप ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md) की तरह आगे बढ़ें।

!!! warning "पहले ऑप्ट-इन जाँचें"
    सिर्फ़ उन्हीं लोगों को संदेश भेजें जो आपसे सुनने के लिए सहमत हैं। नीचे देखें [संपर्कों को ऑप्ट-इन या ऑप्ट-आउट करें](#opt-contacts-in-or-out)।

### इम्पोर्ट की हिस्ट्री पढ़ें { #read-the-import-history }

1. ऊपर **Actions** पर क्लिक करें, फिर **Import History** पर। आप **Import** आइकन पर राइट-क्लिक करके **Import history** भी चुन सकते हैं। **Import History** विंडो खुलती है।
2. सूची पढ़ें, सबसे नई पहले। हर पंक्ति में **Date**, **Status**, **Total**, **Imported**, **Failed** और **Details** दिखते हैं।
3. **Failed** जाँचें। 0 से ज़्यादा संख्या लाल रंग में दिखती है। **Details** बताता है कि वे पंक्तियाँ क्यों फ़ेल हुईं, या कुछ फ़ेल न होने पर **—** दिखाता है।
4. काम पूरा होने पर क्लोज़ आइकन पर क्लिक करें।

विंडो सिर्फ़ संपर्क फ़ाइल के इम्पोर्ट सूचीबद्ध करती है। कोई न होने पर उसमें **No imports yet** लिखा होता है।

### संपर्कों को ग्रुप और टैग करें { #group-and-tag-contacts }

1. जो संपर्क चाहिए उन पर टिक लगाएँ। एक गहरी बार दिखती है जिसमें चुने हुए संपर्कों के लिए **Add tag**, **Add to group**, **Send broadcast** और **Export** हैं।

    ![गहरी सिलेक्शन बार, जिसमें Add tag, Add to group, Send broadcast और Export दिख रहे हैं](../assets/screenshots/whatsapp-contacts-5-selection-bar.png)

2. **Add to group** पर क्लिक करें। **Add to contact group** खुलता है। **Contact Group** में कोई समूह चुनें, या **New Contact Group** पर क्लिक करें, फिर **Confirm** पर क्लिक करें।

    ![Add to contact group विंडो, जिसमें All Customers चुना हुआ है और Confirm बटन दिख रहा है](../assets/screenshots/whatsapp-contacts-6-add-to-group.png)

    किसी संपर्क को समूह से निकालने के लिए संपर्क पर क्लिक करें, फिर दाईं ओर **Groups** के पास **Remove…** पर क्लिक करें। संदेश **Removed 1 contact from "All Customers".** दिखता है, जिसमें आपके समूह का नाम होता है।

3. **Tags** पर क्लिक करें, **Type to search or add a tag…** में टाइप करें, फिर **Add Tags** पर क्लिक करें।

समूह बनाने या एडिट करने के लिए **Contact Groups** पर क्लिक करें, या **Groups** टैब खोलें। समूह CRM के साथ साझा रहते हैं। देखें [संपर्क समूह बनाएँ और प्रबंधित करें](../crm/contact-groups.md)।

### संपर्कों को ऑप्ट-इन या ऑप्ट-आउट करें { #opt-contacts-in-or-out }

ऑप्ट-आउट हुए संपर्क तब तक आपका कोई व्हाट्सऐप संदेश नहीं पा सकते जब तक वे वापस ऑप्ट-इन न करें।

एक संपर्क के लिए:

1. संपर्क पर क्लिक करें। ब्योरा दाईं ओर खुलता है।
2. **Messaging** के नीचे **Opted in** को चालू या बंद करें। यह **Can receive campaigns** या **Campaigns will skip this contact** दिखाता है।
3. **Save** पर क्लिक करें।

कई संपर्कों के लिए:

1. संपर्कों पर टिक लगाएँ।
2. **Block & opt** पर क्लिक करें। **Opt in/out** खुलता है।
3. **Opt Out** या **Opt In** पर क्लिक करें।

हर बदलाव संपर्क की **Consent History** में उसके स्रोत के साथ दर्ज होता है, जैसे STOP/START कीवर्ड, मैन्युअल बदलाव या इम्पोर्ट।

### ऑप्ट-आउट और ऑप्ट-इन शब्द सेट करें { #set-opt-out-and-opt-in-words }

जो ग्राहक **stop** भेजता है, वह तुरंत ऑप्ट-आउट हो जाता है और हर ब्रॉडकास्ट से बाहर रहता है। **start**, **subscribe** या **unstop** भेजने पर वह वापस ऑप्ट-इन हो जाता है। ये शब्द हमेशा चालू रहते हैं और बंद नहीं किए जा सकते।

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Manage** चुनें।
2. **Opt-in Management** चुनें।

    ![Opt-in Management, जिसमें हमेशा चालू रहने वाला stop शब्द और Your own words बॉक्स दिख रहे हैं](../assets/screenshots/whatsapp-contacts-4-opt-in-management.png)

3. **Opt-out words** के नीचे **Your own words** में अपने शब्द कॉमा से अलग करके लिखें। जैसे, आपके ग्राहकों की भाषा के शब्द। वे किसी भी कैपिटलाइज़ेशन में पूरे शब्द के रूप में मेल खाते हैं।
4. **Opt-in words** के नीचे वे शब्द जोड़ें जो संपर्क को वापस ऑप्ट-इन करते हैं।
5. **Confirmation replies** के नीचे **After opting out** और **After opting back in** एडिट करें। मानक शब्दों के लिए उन्हें खाली छोड़ें।
6. **Save changes** पर क्लिक करें। संदेश **Opt-in settings saved.** दिखता है।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **No importable rows found — check the Phone Number column mapping.** | किसी कॉलम को **Phone Number** से मैप नहीं किया गया, या वह खाली है। | **Header identifiers** के नीचे **Phone Number** के लिए सही कॉलम चुनें। |
| **Could not update opt-in status — try again.** | बदलाव सेव नहीं हुआ। | दोबारा कोशिश करें। फ़ेल होता रहे तो पेज रिफ़्रेश करें। |
| संपर्क पर **Needs attention — invalid number** दिखता है | उन्हें भेजे गए पिछले 3 ब्रॉडकास्ट सब फ़ेल हुए, और कोई कभी उन तक नहीं पहुँचा। | जाँचें कि नंबर व्हाट्सऐप पर है। **Stop sending** या **Keep sending** पर क्लिक करें। |
| संपर्क पर **Needs attention — possibly blocked** दिखता है | उन्हें पहले संदेश मिले थे, पर हाल के संदेश लगातार फ़ेल हो रहे हैं। व्हाट्सऐप ब्लॉक की पुष्टि कभी नहीं करता। | देखें, फिर **Stop sending** या **Keep sending** पर क्लिक करें। |
| **stop** भेजने वाला ग्राहक अब भी दिखता है | ऑप्ट-आउट संदेश रोकता है, संपर्क को डिलीट नहीं करता। | यह अपेक्षित है। उनका स्टेटस **Opted out** दिखता है। |

## संबंधित गाइड { #related }

- [व्हाट्सऐप इनबॉक्स का इस्तेमाल करें](use-whatsapp-inbox.md)
- [संपर्क समूह बनाएँ और प्रबंधित करें](../crm/contact-groups.md)
- [संपर्क इम्पोर्ट और सिंक करें](../crm/import-and-sync-contacts.md)
- [संपर्क की सहमति ट्रैक करें](../crm/consent-and-compliance.md)
- [कस्टम संपर्क फ़ील्ड जोड़ें](../crm/custom-fields.md)
