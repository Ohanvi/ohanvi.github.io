---
title: संपर्क इम्पोर्ट और सिंक करें
description: Excel या CSV फ़ाइल से संपर्क इम्पोर्ट करें, अपने कॉलम मैप करें, इम्पोर्ट सारांश पढ़ें और छूटी पंक्तियाँ ठीक करें, या व्हाट्सऐप, स्टोर और Zapier कनेक्ट करें।
---

# संपर्क इम्पोर्ट और सिंक करें { #import-and-sync-contacts }

अपनी मौजूदा संपर्क सूची को Excel या CSV फ़ाइल से Ohanvi में लाएँ, और वे स्रोत कनेक्ट करें जो अपने आप संपर्क जोड़ते हैं। आखिर में हर व्यक्ति का एक ही संपर्क रिकॉर्ड होता है, और जो लोग Ohanvi में पहले से हैं उन्हें दोहराने के बजाय मर्ज कर दिया जाता है।

## शुरू करने से पहले { #before-you-start }

- लेफ़्ट रेल में आपको **Contacts** दिखता हो और उसके पैनल में **Import & sync** हो। अगर नहीं, तो अपने एडमिन से कहें कि आपके रोल को CRM संपर्कों का एक्सेस दें। देखें [सेटिंग्स का ओवरव्यू](../settings/index.md)।
- आपकी सूची `.xlsx` या `.csv` के रूप में सेव हो। पुरानी `.xls` फ़ाइलें स्वीकार नहीं होतीं। उन्हें पहले `.xlsx` में सेव करें।
- फ़ाइल में ज़्यादा से ज़्यादा 100,000 डेटा पंक्तियाँ हों।
- आप जिन लोगों को इम्पोर्ट कर रहे हैं, उन सबने आपसे मैसेज पाने के लिए हामी भरी हो। फ़ाइल से आने वाले नए संपर्कों को व्हाट्सऐप के लिए ऑप्ट-इन मार्क किया जाता है। देखें [संपर्क की सहमति ट्रैक करें](consent-and-compliance.md)।

## चरण { #steps }

### अपने संपर्क स्रोत देखें { #see-your-contact-sources }

1. लेफ़्ट रेल में **Contacts** खोलें, फिर **Import & sync** चुनें।

    ![Import and sync स्क्रीन, जिसमें Sample CSV और History बटन और चार स्रोत हैं: CSV upload, WhatsApp, Shopify and WooCommerce, और Zapier and Pabbly](../assets/screenshots/crm-contacts-4-import-and-sync.png)

2. **Import & sync** स्क्रीन 4 स्रोत दिखाती है, हर एक के साथ लाइव स्टेटस लाइन और एक **Configure** बटन होता है:
    - **CSV upload** — आखिरी रन दिखाता है, जैसे **Last run today · 250 rows, 3 rejected**, या **No file imported yet**।
    - **WhatsApp** — जो भी आपके बिज़नेस नंबर पर मैसेज करता है, वह संपर्क बन जाता है। **Always on · 1 number** या **No number connected** दिखाता है।
    - **Shopify / WooCommerce** — खरीदार और उनकी कार्ट संपर्क के रूप में आते हैं। **1 store connected** या **No store connected** दिखाता है।
    - **Zapier & Pabbly** — दूसरे टूल से संपर्क भेजें। जारी की गई कीज़ दिखाता है, या **No keys issued**।
3. किसी स्रोत को सेट करने के लिए उसके **Configure** पर क्लिक करें। WhatsApp पर **WhatsApp** → **Contact** खुलता है। Shopify / WooCommerce पर **Connect** → **Store Connections** खुलता है। Zapier & Pabbly पर **Connect** → **Zapier** खुलता है।

अगर किसी लाइन में **Status unavailable** लिखा है, तो Ohanvi अभी उस स्रोत की जाँच नहीं कर पाया। इसका मतलब यह नहीं है कि स्रोत बंद है।

### अपनी फ़ाइल तैयार करें { #prepare-your-file }

1. पहली पंक्ति में कॉलम के नाम रखें। उसके नीचे हर पंक्ति में एक संपर्क रखें।
2. फ़ोन नंबर का एक कॉलम रखें। सिर्फ़ यही कॉलम ज़रूरी है। जिन पंक्तियों में फ़ोन नंबर नहीं होता, वे छोड़ दी जाती हैं।
3. इनमें से कोई भी वैकल्पिक कॉलम जोड़ें: first name, last name, email, country code और tags।
4. एक सेल में कई टैग हों तो उन्हें कॉमा या पाइप से अलग करें, जैसे `Festive|VIP`।
5. भारतीय मोबाइल नंबर 10 अंकों में लिखें, आगे `91` या `+91` हो या न हो। दूसरे देशों के लिए कंट्री कोड शामिल करें या उसे कंट्री कोड कॉलम में रखें।

आपके कॉलम के नाम Ohanvi के नामों से मिलना ज़रूरी नहीं है। अगले चरण में आप उन्हें मैप करते हैं। Ohanvi आम नामों को अपने आप पहचान लेता है, जैसे **Mobile**, **WhatsApp number**, **Name**, **Surname** और **E-mail**।

टेम्प्लेट से शुरू करने के लिए इम्पोर्ट डायलॉग खोलें और **Download Sample CSV** पर क्लिक करें। इसमें 6 कॉलम हैं: **Phone Number**, **First Name**, **Last Name**, **Email**, **Country Code** और **Tags**।

!!! tip "दो सैंपल फ़ाइलें"
    Import & sync स्क्रीन का **Sample CSV** और **Import** मेनू का **Download sample CSV** एक लंबा CRM टेम्प्लेट (`contacts-template.csv`) डाउनलोड करते हैं, जिसमें **Designation** और **Account Name** जैसे कॉलम हैं। इम्पोर्टर ऊपर के सिर्फ़ 6 कॉलम और आपके कस्टम फ़ील्ड पढ़ता है। बाकी कॉलम इम्पोर्ट में शामिल नहीं होते [VERIFY: confirm the longer template is intended for this importer]।

### फ़ाइल अपलोड करें { #upload-the-file }

1. **Import & sync** पर **CSV upload** के **Configure** पर क्लिक करें। आप **All contacts** पर **Import** → **Import from CSV** पर भी क्लिक कर सकते हैं। **Import contacts** डायलॉग खुलता है।
2. **Choose an Excel or CSV file** पर क्लिक करें और अपनी फ़ाइल चुनें। फ़ुटर में **Reading file…** दिखता है।
3. मैपिंग वाला चरण आपकी फ़ाइल के नाम और गिनती के साथ खुलता है, जैसे **250 contacts detected**। कोई दूसरी फ़ाइल चुनने के लिए **Change File** पर क्लिक करें।

### अपने कॉलम मैप करें { #map-your-columns }

1. **Header identifiers** के नीचे हर **ATTRIBUTE** के लिए **COLUMN IN YOUR FILE** का एक ड्रॉपडाउन होता है। जिन कॉलम को Ohanvi ने पहचान लिया है, वे पहले से चुने होते हैं।
2. **Phone Number** (जिस पर **\*** लगा है) जाँचें। अगर उस पर **Select a column** लिखा है, तो अपना फ़ोन कॉलम चुनें। जब तक आप ऐसा नहीं करते, **Import** बंद रहता है।
3. बाकी हर एट्रिब्यूट के लिए उसका कॉलम चुनें, या **— Not in file —** रहने दें।
4. अगर आपके कस्टम फ़ील्ड हैं, तो वे **YOUR CUSTOM ATTRIBUTES** के नीचे दिखते हैं। उन्हें इसी तरह मैप करें। देखें [कस्टम संपर्क फ़ील्ड जोड़ें](custom-fields.md)।
5. **Options** के नीचे **Default Country Code** सेट करें। यह उन नंबरों पर लागू होता है जिनका अपना कंट्री कोड नहीं है। डिफ़ॉल्ट भारत (+91) है।
6. अगर फ़ाइल के टैग संपर्क के मौजूदा टैग की जगह लें, तो **Replace Tags** चालू करें। उन्हें साथ में जोड़ना हो तो इसे बंद रखें।

### इम्पोर्ट करें और नतीजे देखें { #import-and-review-the-results }

1. **Import** पर क्लिक करें। फ़ुटर में पहले **Validating contacts…**, फिर **Importing contacts…** दिखता है।
2. खत्म होने पर **Import complete** सारांश खुलता है। इसमें ये दिख सकता है:
    - **N new contacts added**
    - **N already in contacts — details merged**
    - **N repeated in the file — merged**
    - **N rows skipped (no phone number)**
3. **Done** पर क्लिक करें। नए संपर्क **All contacts** में दिखने लगते हैं।

**Import & sync** पर **CSV upload** की लाइन अब यही रन दिखाती है। हर पुराना अपलोड उसके **Total Rows**, **Processed Rows** और **Failed Rows** के साथ देखने के लिए **History** पर क्लिक करें। इससे **Uploaded Documents** खुलता है, जिसके लिए अलग अनुमति चाहिए।

### डुप्लिकेट कैसे संभाले जाते हैं { #how-duplicates-are-handled }

- Ohanvi लोगों को फ़ोन नंबर से मिलाता है, आखिरी 10 अंक देखकर। `9820041122`, `919820041122` और `+91 98200 41122` एक ही व्यक्ति हैं।
- जिस पंक्ति का नंबर पहले से मौजूद है, वह उसी संपर्क में मर्ज हो जाती है। खाली नाम और ईमेल फ़ाइल से भर दिए जाते हैं। मौजूदा वैल्यू बदली नहीं जातीं।
- फ़ाइल के टैग संपर्क के टैग में जुड़ जाते हैं, या **Replace Tags** चालू होने पर उनकी जगह ले लेते हैं।
- एक ही फ़ाइल में एक ही नंबर वाली 2 पंक्तियाँ 1 संपर्क बन जाती हैं।
- आपने जो संपर्क पहले डिलीट किया था, वह उसका नंबर दोबारा इम्पोर्ट करने पर वापस आ जाता है।

क्योंकि कुछ भी दो बार नहीं जुड़ता, फ़ाइल ठीक करने के बाद आप उसी फ़ाइल को बेफ़िक्र होकर दोबारा इम्पोर्ट कर सकते हैं।

### छूटी हुई पंक्तियाँ ठीक करें { #fix-skipped-rows }

सारांश छूटी पंक्तियों की गिनती बताता है, लेकिन उनकी सूची नहीं देता। नीचे दिए नियमों से उन्हें अपनी फ़ाइल में ढूँढें, ठीक करें और फ़ाइल दोबारा इम्पोर्ट करें। जो पंक्तियाँ पहले इम्पोर्ट हो चुकी हैं, वे बिना किसी बदलाव के मर्ज हो जाती हैं।

| पंक्ति छूटने का कारण | समाधान |
| --- | --- |
| **Phone number is required** | नंबर जोड़ें, या पंक्ति हटा दें। |
| **An Indian (+91) mobile number is exactly 10 digits — this one has 9** | नंबर सही करें। जाँचें कि कोई अंक छूटा नहीं है और आगे एक्स्ट्रा `0` नहीं है। |
| **Phone number is too short — including the country code it must be at least 8 digits** | छूटे अंक या कंट्री कोड जोड़ें। |
| **Phone number is too long — including the country code it cannot exceed 15 digits** | एक्स्ट्रा अंक हटाएँ, या एक सेल में लिखे 2 नंबरों को 2 पंक्तियों में बाँटें। |
| **First name must not exceed 150 characters** (last name भी) | नाम छोटा करें, या कॉलम मैपिंग जाँचें। बहुत लंबी वैल्यू का मतलब अक्सर यही होता है कि गलत कॉलम मैप हुआ। |
| **Email must not exceed 255 characters** | ईमेल सही करें। |
| **Phone number must not exceed 20 characters** | फ़ोन सेल से टेक्स्ट या एक्स्ट्रा अक्षर हटाएँ। |

!!! note "ध्यान दें"
    सारांश में हमेशा **(no phone number)** लिखा आता है, भले ही असली वजह गलत लंबाई का नंबर या बहुत लंबी फ़ील्ड हो।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Could not read the file's column headers — make sure the first row of the file holds the column names.** | पहली पंक्ति खाली है या हेडर पंक्ति नहीं है, या फ़ाइल खराब है। | पंक्ति 1 में कॉलम के नाम रखें और दोबारा `.xlsx` या `.csv` में सेव करें। |
| **No importable rows found — check the Phone Number column mapping.** | हर पंक्ति फ़ेल हुई, आमतौर पर इसलिए कि **Phone Number** गलत कॉलम से मैप है। | **Phone Number** को उस कॉलम से मैप करें जिसमें नंबर हैं, फिर दोबारा **Import** पर क्लिक करें। |
| **The file has more than 100000 rows, which is the import limit.** | फ़ाइल बहुत बड़ी है। | उसे 100,000 या उससे कम पंक्तियों की फ़ाइलों में बाँटें और हर एक को इम्पोर्ट करें। |
| **These contacts have already been imported — upload the file again to import it once more.** | आपने ऐसी फ़ाइल पर दोबारा **Import** दबाया जो पहले ही पूरी हो चुकी है। | डायलॉग बंद करें, उसे फिर से खोलें और फ़ाइल चुनें। |
| नंबर गलत कंट्री कोड के साथ आते हैं | फ़ाइल में कंट्री कोड नहीं था और **Default Country Code** गलत था। | **Country Code** कॉलम जोड़ें, या सही **Default Country Code** चुनें, फिर दोबारा इम्पोर्ट करें। |
| मेरी `.xls` फ़ाइल फ़ाइल पिकर में नहीं दिखती | सिर्फ़ `.xlsx` और `.csv` स्वीकार होती हैं। | फ़ाइल को Excel में खोलें और `.xlsx` में सेव करें। |

## संबंधित गाइड { #related }

- [संपर्क प्रबंधित करें](manage-contacts.md)
- [कस्टम संपर्क फ़ील्ड जोड़ें](custom-fields.md)
- [संपर्क समूह बनाएँ और प्रबंधित करें](contact-groups.md)
- [संपर्क की सहमति ट्रैक करें](consent-and-compliance.md)
- [व्हाट्सऐप ब्रॉडकास्ट कैंपेन भेजें](../whatsapp/send-broadcast-campaign.md)
