---
title: व्हाट्सऐप मैसेज टेम्प्लेट बनाएँ
description: व्हाट्सऐप टेम्प्लेट लिखें, मंज़ूरी के लिए Meta को भेजें, उसका स्टेटस ट्रैक करें, रिजेक्शन ठीक करें, और टेम्प्लेट एडिट या डिलीट करें।
---

# व्हाट्सऐप मैसेज टेम्प्लेट बनाएँ { #create-a-whatsapp-message-template }

हेडर, बॉडी, फ़ुटर और बटन वाला मैसेज टेम्प्लेट लिखें, फिर उसे Meta को भेजें। आखिर में आपका टेम्प्लेट Meta के पास **In review** होता है, और जब वह **Approved** दिखे तो आप उसे कैंपेन, फ़्लो और 24 घंटे की चैट विंडो के बाहर के जवाबों में इस्तेमाल कर सकते हैं।

## शुरू करने से पहले { #before-you-start }

- आपका व्हाट्सऐप नंबर Ohanvi से कनेक्ट है। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आपको **WhatsApp** पैनल में **Template** दिखता है। न दिखे तो अपने एडमिन से अपने रोल को टेम्प्लेट एक्सेस देने को कहें। देखें [रोल और अनुमतियाँ](../settings/roles-and-permissions.md)।
- आपको पता है कि आपका मैसेज किस श्रेणी का है। नीचे [श्रेणी चुनें](#choose-a-category) देखें।

## टेम्प्लेट क्या है { #what-a-template-is }

व्हाट्सऐप में कोई बिज़नेस बातचीत तभी शुरू कर सकता है, या 24 घंटे की चुप्पी के बाद तभी लिख सकता है, जब वह Meta से Approved टेम्प्लेट इस्तेमाल करे। 24 घंटे की विंडो के बाहर आप जो भी कैंपेन और ऑटोमैटिक मैसेज भेजते हैं, वह एक टेम्प्लेट इस्तेमाल करता है।

### श्रेणी चुनें { #choose-a-category }

Meta टेम्प्लेट की कीमत और समीक्षा श्रेणी के हिसाब से करता है। वह श्रेणी चुनें जो मैसेज के काम से मेल खाती हो।

| श्रेणी | किसके लिए इस्तेमाल करें | उदाहरण |
| --- | --- | --- |
| **MARKETING** | ऑफ़र, लॉन्च, त्योहार की सेल, दोबारा जोड़ना, और हर प्रमोशनल चीज़। | "Diwali sale: 20% off until Sunday." |
| **UTILITY** | ग्राहक की की हुई किसी चीज़ की जानकारी: ऑर्डर, बुकिंग, भुगतान, शिपिंग। | "Your order {{1}} has shipped." |
| **AUTHENTICATION** | सिर्फ़ वन-टाइम पासकोड। शब्द Meta खुद लिखता है। | "{{1}} is your verification code." |

कुछ **Template type** विकल्प श्रेणी अपने आप तय कर देते हैं। **Carousel**, **Catalog**, **Multi-product** और **Limited Time Offer** हमेशा **MARKETING** होते हैं। **Order details (Payment)**, **Order Status** और **Call Permission Request** हमेशा **UTILITY** होते हैं।

### टेम्प्लेट का प्रकार चुनें { #choose-a-template-type }

| टेम्प्लेट का प्रकार | यह क्या भेजता है |
| --- | --- |
| **Default** | साधारण मैसेज, जिसमें वैकल्पिक हेडर और बटन हो सकते हैं। |
| **Carousel** | दो से दस स्वाइप होने वाले कार्ड, हर एक की अपनी तस्वीर और बटन के साथ। |
| **Order details (Payment)** | ग्राहक से भुगतान करने को कहता है। इसके लिए Meta के साथ पेमेंट सेट होना चाहिए। |
| **Catalog** | आपका व्हाट्सऐप कैटलॉग खोलता है। इसके लिए इस नंबर पर कैटलॉग होना चाहिए। |
| **Multi-product** | चुने हुए प्रोडक्ट सेक्शन में दिखाता है। इसके लिए कैटलॉग चाहिए। |
| **Authentication** | वन-टाइम पासकोड। शब्द Meta खुद लिखता है। |
| **Flows** | पब्लिश किया हुआ Flow खोलता है, यानी ऐसा फ़ॉर्म जिसे ग्राहक व्हाट्सऐप के अंदर भरता है। |
| **Order Status** | ग्राहक को बताता है कि उसका ऑर्डर कहाँ तक पहुँचा है। |
| **Call Permission Request** | कॉल करने की अनुमति माँगता है। इसमें बटन नहीं होते, और कॉलिंग चालू होनी चाहिए। |
| **Limited Time Offer** | काउंटडाउन के साथ ऑफ़र कोड। इसमें फ़ुटर नहीं होता। |

## चरण { #steps }

### टेम्प्लेट बनाएँ { #create-the-template }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Template** चुनें। **Templates** पेज खुलता है।
2. **New template** पर क्लिक करें। **Add Template** फ़ॉर्म खुलता है, जिसके बगल में **Template Preview** है।

    ![demo_booking_confirmation के लिए भरा हुआ Add Template फ़ॉर्म, दाईं ओर Template Preview के साथ](../assets/screenshots/whatsapp-template-1-add-template.png)
3. अगर आपके पास 1 से ज़्यादा हैं, तो अपना **Organization** चुनें।
4. **Template type** चुनें। फ़ील्ड के नीचे का संकेत बताता है कि हर प्रकार क्या करता है।
5. **Template Category** चुनें: **UTILITY**, **MARKETING** या **AUTHENTICATION**।
6. **Template name** लिखें, जैसे `order_shipped`। सिर्फ़ छोटे अक्षर, अंक और अंडरस्कोर इस्तेमाल करें। अगर नाम किसी नियम को तोड़ता है, तो फ़ील्ड के नीचे के **Use "…"** सुझाव पर क्लिक करें।
7. **Template Language** चुनें। उसे खोजने के लिए **Search language or code** में लिखें, जैसे `Hindi` या `en_US`।

    ![Template Category UTILITY, Template Language English (US), और टेम्प्लेट का नाम demo_booking_confirmation](../assets/screenshots/whatsapp-template-4-name-language.png)

!!! tip "सुझाव: बने-बनाए टेम्प्लेट से शुरू करें"
    लाइब्रेरी से टेम्प्लेट क्लोन करने के लिए **Browse Library** पर क्लिक करें, या **Generate** पर क्लिक करके मैसेज का वर्णन लिखें ताकि AI उसे लिख दे। भेजने से पहले नतीजा जाँच लें।

### हेडर जोड़ें { #add-the-header }

हेडर वैकल्पिक है और मैसेज के सबसे ऊपर रहता है।

1. **Header (top of the message)** चुनें: **Text heading**, **Image**, **Video** या **Document**। "none" का कोई विकल्प नहीं है: हेडर न चाहिए तो **Text heading** रखें और **Header text** खाली छोड़ दें।

    ![हेडर के विकल्प: Text heading, Image, Video और Document](../assets/screenshots/whatsapp-template-5-header-options.png)

2. **Text heading** के लिए **Header text** लिखें। इसमें 60 अक्षर तक और ज़्यादा से ज़्यादा 1 वेरिएबल हो सकता है।
3. **Image**, **Video** या **Document** के लिए सैंपल फ़ाइल अपलोड करें। Meta टेम्प्लेट की समीक्षा के लिए सैंपल इस्तेमाल करता है। असली फ़ाइल आप हर बार कैंपेन भेजते समय चुनते हैं।

अपलोड की सीमाएँ: इमेज 5 MB तक, वीडियो 16 MB तक, डॉक्यूमेंट 100 MB तक। **Video** हेडर के लिए हमेशा सैंपल चाहिए। **Image** और **Document** में, सैंपल खाली छोड़ने पर Ohanvi एक न्यूट्रल प्लेसहोल्डर भेज देता है।

### बॉडी और फ़ुटर लिखें { #write-the-body-and-footer }

1. **Template Format** में मैसेज लिखें। इसमें 1,024 अक्षर तक हो सकते हैं।
2. जहाँ हर ग्राहक की अपनी वैल्यू आनी है, वहाँ वेरिएबल जोड़ें। इसे `{{1}}`, फिर `{{2}}` और इसी तरह क्रम से लिखें।
3. वैकल्पिक: **Template Footer (optional)** लिखें, 60 अक्षर तक। फ़ुटर में वेरिएबल नहीं हो सकते।
4. वैकल्पिक: **Message TTL in seconds (optional)** सेट करें, जैसे `3600`। यह वह समय है जितनी देर Meta मैसेज पहुँचाने की कोशिश करता रहता है।

बॉडी को Meta के नियम मानने होंगे:

- वेरिएबल `{{1}}` से शुरू होते हैं और बिना किसी छूट के क्रम से चलते हैं।
- 2 वेरिएबल आपस में सटे नहीं हो सकते। `{{1}}` और `{{2}}` के बीच शब्द रखें।
- बॉडी सिर्फ़ वेरिएबल की नहीं हो सकती, और उसकी शुरुआत या अंत वेरिएबल से नहीं होना चाहिए।
- लगातार 3 से ज़्यादा खाली लाइनें नहीं।

### हर वेरिएबल को नाम और सैंपल दें { #name-each-variable-and-give-a-sample }

1. **Variables** के नीचे हर वेरिएबल के लिए **Name** भरें, जैसे `customer name`। रिसीवर की सूची अपलोड करते समय यह नाम कॉलम का हेडिंग बन जाता है।
2. हर वेरिएबल के लिए **Example** भरें, जैसे `Lakshmi` या `ORD-10482`। Meta टेम्प्लेट की समीक्षा करते समय यह उदाहरण देखता है।

    ![{{1}} और {{2}} के लिए Name और Example भरे हुए Variables](../assets/screenshots/whatsapp-template-2-variables.png)

असली जैसे दिखने वाले उदाहरण दें, `xxx` जैसे प्लेसहोल्डर नहीं। जो टेम्प्लेट Meta को असली मैसेज की तरह नहीं पढ़ा जाता, उसे वह रिजेक्ट कर देता है।

### बटन जोड़ें { #add-buttons }

1. **Interactive Actions** के नीचे **Add link or call button** या **Add quick reply** पर क्लिक करें। हर बटन दिखाता है कि और कितने बचे हैं।
2. लिंक बटन के लिए **Button label** और `https://` से शुरू होने वाला URL लिखें। आप URL के आखिर में `{{1}}` जोड़ सकते हैं, जैसे `https://example.com/{{1}}`।
3. कॉल बटन के लिए **Button label** और देश के कोड के साथ फ़ोन नंबर लिखें।
4. **Quick reply** के लिए वह **Button label** लिखें जिस पर ग्राहक टैप करेगा।
5. वैकल्पिक: कैंपेन रिपोर्ट में लिंक क्लिक गिनने के लिए **Enable Click Tracking** चालू करें। ग्राहक फिर भी आपके डाले हुए URL पर ही पहुँचते हैं।

बटन की सीमाएँ:

- कुल मिलाकर 10 बटन तक।
- 2 लिंक बटन और 1 कॉल बटन तक।
- 10 क्विक रिप्लाई तक।
- बटन के लेबल 25 अक्षर तक, और किन्हीं 2 बटन का लेबल एक जैसा नहीं।
- लिंक और कॉल बटन साथ रखें, और क्विक रिप्लाई साथ रखें।

### वन-टाइम कोड वाला टेम्प्लेट बनाएँ { #set-up-a-one-time-code-template }

**Template type** में **Authentication** चुनें। **One-time code template** सेक्शन बॉडी की जगह ले लेता है।

1. Meta की "यह कोड किसी से शेयर न करें" वाली लाइन जोड़ने के लिए **Add security recommendation** चालू रखें।
2. **Code expires in (minutes)** सेट करें।
3. **Button** के नीचे **Copy code** चुनें, या Android ऐप के लिए **One-tap autofill**।
4. **One-tap autofill** के लिए **Android package name** और **App signature hash** भरें। दोनों के बिना टेम्प्लेट **Copy code** के रूप में भेजा जाता है।

Authentication टेम्प्लेट में मीडिया हेडर या कॉल-टू-एक्शन बटन नहीं हो सकते।

### मंज़ूरी के लिए भेजें { #submit-for-approval }

1. **Template Preview** जाँचें। फ़ॉर्म के नीचे बताई कोई भी समस्या ठीक करें।
2. **Save & Submit for Approval** पर क्लिक करें। **Template submitted to WhatsApp. Awaiting approval.** संदेश दिखता है। टेम्प्लेट **In review** दिखाता है और **Pending** टैब में गिना जाता है।

    ![Templates सूची, जिसमें नया टेम्प्लेट In review चिह्नित है](../assets/screenshots/whatsapp-template-3-in-review.png)

3. Meta को भेजे बिना सेव करने के लिए इसके बजाय **Save as Draft** पर क्लिक करें। जब तक आप इसे भेजते नहीं, टेम्प्लेट **Draft** दिखाता है।

फ़्री ट्रायल में फ़ॉर्म **Free trial: a “Powered by Ohanvi” footer is added to your templates.** दिखाता है।

Meta आमतौर पर कुछ मिनटों में फ़ैसला कर देता है, कभी-कभी 24 घंटे तक लग जाते हैं। Ohanvi आपके लिए स्टेटस जाँचता रहता है। अभी जाँचने के लिए सर्च फ़ील्ड के बगल में **Sync from Meta — pull the latest approval status** आइकन पर क्लिक करें। आप 2 मिनट बाद फिर सिंक कर सकते हैं।

## टेम्प्लेट के स्टेटस { #template-statuses }

सूची को फ़िल्टर करने के लिए **All**, **Favorites**, **Pending**, **Approved** और **Action Required** टैब इस्तेमाल करें। **Action Required** में वे सभी टेम्प्लेट रहते हैं जिन्हें आपको ठीक करना है।

| स्टेटस | इसका मतलब | क्या करें |
| --- | --- | --- |
| **Draft** | अभी Meta को नहीं भेजा गया। | इसे खोलें और मंज़ूरी के लिए भेजें। |
| **In review** | Meta इसकी समीक्षा कर रहा है। | इंतज़ार करें। मंज़ूरी आमतौर पर कुछ मिनटों में मिलती है, कभी-कभी 24 घंटे तक लगते हैं। |
| **Approved** | भेजने के लिए तैयार। | इसे कैंपेन या फ़्लो में इस्तेमाल करें। |
| **Rejected** | Meta ने इसे नामंज़ूर कर दिया। | **Rejection reason** पढ़ें, शब्द बदलें और दोबारा भेजें। |
| **Paused** | बहुत से रिसीवर ने इसे ब्लॉक या रिपोर्ट किया। | इंतज़ार करें। रोक हटते ही भेजना अपने आप फिर शुरू हो जाता है। |
| **Disabled** | क्वालिटी की बार-बार समस्याओं के बाद Meta ने इसे हमेशा के लिए बंद कर दिया। | अलग शब्दों के साथ नया टेम्प्लेट बनाएँ। |
| **In appeal** | आपने Meta के फ़ैसले की अपील की है और उसकी दोबारा समीक्षा हो रही है। | नतीजे का इंतज़ार करें। |
| **Deleting** / **Deleted** | Meta इसे हटा रहा है, या यह Meta के पास अब मौजूद नहीं है। | इसकी जगह नया बनाएँ। |

Approved टेम्प्लेट पर क्वालिटी रेटिंग भी दिख सकती है: **High quality**, **Medium quality** या **Low quality**। **Medium quality** या **Low quality** होने पर जल्दी ही शब्दों को नरम करें। जिस टेम्प्लेट की क्वालिटी लगातार गिरती रहती है, उसे Meta रोक देता है।

## रिजेक्ट हुआ टेम्प्लेट ठीक करें { #fix-a-rejected-template }

1. **Action Required** टैब खोलें और टेम्प्लेट पर क्लिक करें। **Rejection reason** प्रीव्यू के नीचे Meta के अपने शब्दों में दिखता है, जैसे `INVALID_FORMAT`।

    ![Action Required टैब, जिसमें रिजेक्ट हुआ टेम्प्लेट और प्रीव्यू के नीचे उसका Rejection reason दिख रहा है](../assets/screenshots/whatsapp-template-6-rejection-reason.png)
2. वजह को नीचे की तालिका से मिलाएँ और टेम्प्लेट बदलें।
3. **Edit** पर क्लिक करें, बदलाव करें, फिर **Save Changes** पर क्लिक करें। टेम्प्लेट फिर से Meta को भेजा जाता है।

अगर आप रिजेक्ट हुए टेम्प्लेट को कैंपेन में भेजने की कोशिश करते हैं, तो Ohanvi उसे रोक देता है और दूसरे कॉलम में दिखाए वाक्य में वजह बताता है।

| Meta की ओर से वजह | Ohanvi आपको क्या बताता है | क्या बदलें |
| --- | --- | --- |
| `INVALID_FORMAT` | **WhatsApp says the layout is wrong — usually a placeholder like {{1}} at the very start or end of the text, two placeholders touching, or an example value missing.** | हर वेरिएबल के पहले और बाद में शब्द जोड़ें, वेरिएबल अलग करें, और हर **Example** भरें। |
| `ABUSIVE_CONTENT` | **WhatsApp says the wording breaks its content rules.** | धमकियाँ, एडल्ट कंटेंट और भ्रामक दावे हटाएँ। |
| `SCAM` | **WhatsApp flagged the wording as looking like a scam.** | इनाम, लॉटरी, रिफ़ंड और तुरंत भुगतान वाली भाषा से बचें। |
| `PROMOTIONAL` | **WhatsApp says this is promotional, but it was submitted as a utility template.** | इसे **MARKETING** श्रेणी में दोबारा भेजें। |
| `INCORRECT_CATEGORY` / `TAG_CONTENT_MISMATCH` | **WhatsApp says the category is wrong for this wording.** | श्रेणी बदलें, या मैसेज को उससे मेल खाने के लिए दोबारा लिखें। |

## टेम्प्लेट एडिट, डुप्लिकेट या डिलीट करें { #edit-duplicate-or-delete-a-template }

- **Edit**: टेम्प्लेट पर माउस ले जाएँ और **Edit** पर क्लिक करें। बदलाव करें, फिर **Save Changes** पर क्लिक करें। भेजा हुआ टेम्प्लेट तब तक वापस **In review** में रहता है जब तक Meta नए वर्शन को मंज़ूर नहीं करता।
- **Duplicate**: **Duplicate Template** फ़ॉर्म में कॉपी खोलने के लिए **Duplicate** पर क्लिक करें। इसका इस्तेमाल नई भाषा का वर्शन या दूसरा रूप बनाने के लिए करें।
- **Favorites**: किसी टेम्प्लेट को **Favorites** टैब में पिन करने के लिए उस पर **Add to favorites** पर क्लिक करें।
- **Delete**: **Delete** पर क्लिक करें, फिर **Delete template?** विंडो में दोबारा **Delete** पर क्लिक करें। **Template deleted.** संदेश दिखता है।

!!! warning "डिलीट करने पर टेम्प्लेट Meta से भी हट जाता है"
    Ohanvi टेम्प्लेट को Ohanvi के साथ-साथ Meta पर आपके व्हाट्सऐप अकाउंट से भी डिलीट कर देता है। इसे वापस नहीं किया जा सकता। जिन कैंपेन और फ़्लो में यह इस्तेमाल होता है, वे इसे अब नहीं भेज सकते।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Meta only allows lowercase letters, numbers and underscores** | नाम में स्पेस, बड़े अक्षर या चिह्न हैं। | **Use "…"** सुझाव पर क्लिक करें, या नाम बदलें, जैसे `order_shipped`। |
| **Template with this name and language already exists** | इस भाषा में इसी नाम का टेम्प्लेट आपके पास पहले से है। | कोई दूसरा नाम चुनें, या मौजूदा टेम्प्लेट एडिट करें। |
| **Could not save this template. Your WhatsApp account may not be connected, or Meta could not be reached — check WhatsApp Settings, then try again.** | आपका नंबर कनेक्ट नहीं है, या Meta ने जवाब नहीं दिया। | **Settings** → **WhatsApp** → **Configuration** में अपना कनेक्शन जाँचें, फिर दोबारा कोशिश करें। |
| **You have reached WhatsApp's limit of 250 templates.** | Meta हर WhatsApp Business अकाउंट पर 250 टेम्प्लेट की अनुमति देता है। | जो टेम्प्लेट अब इस्तेमाल नहीं करते उन्हें डिलीट करें, फिर नया बनाएँ। |
| **Add a sample video — Meta needs one to approve a media header.** | **Video** हेडर का कोई सैंपल नहीं है। | सैंपल वीडियो अपलोड करें, फिर दोबारा भेजें। |
| **This template could not be deleted. It may still be used by a campaign, or your role may not allow deleting templates.** | कोई कैंपेन अब भी इसका इस्तेमाल करता है, या आपका रोल टेम्प्लेट डिलीट नहीं कर सकता। | पहले इसे कैंपेन से हटाएँ, या अपने एडमिन से कहें। |

## संबंधित गाइड { #related }

- [ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)
- [कैंपेन रिपोर्ट पढ़ें](read-campaign-report.md)
- [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [व्हाट्सऐप कैटलॉग सेट करें](set-up-whatsapp-catalog.md)
