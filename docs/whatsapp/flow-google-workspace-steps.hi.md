---
title: फ़्लो में Google Sheets, Calendar, Meet और Contacts के स्टेप जोड़ें
description: फ़्लो में Google Sheets, Google Calendar, Google Meet और Google Contacts के स्टेप इस्तेमाल करें। हर फ़ील्ड और हर स्टेप से मिलने वाली वैल्यू समझाई गई है।
---

# फ़्लो में Google Sheets, Calendar, Meet और Contacts के स्टेप जोड़ें { #add-google-sheets-calendar-meet-and-contacts-steps-to-a-flow }

Google स्टेप से आपका फ़्लो आपके Google ऐप के साथ काम कर सकता है। फ़्लो शीट में नई लाइन जोड़ सकता है, Meet लिंक के साथ कैलेंडर इवेंट बुक कर सकता है, मीटिंग लिंक शेयर कर सकता है, या कोई कॉन्टैक्ट सेव कर सकता है। हर स्टेप जोड़ने, उसकी फ़ील्ड भरने और उससे मिली वैल्यू इस्तेमाल करने के लिए इस पेज के स्टेप फ़ॉलो करें।

## शुरू करने से पहले { #before-you-start }

- बिल्डर में आपका एक फ़्लो खुला हो। देखें [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)।
- Google ऐप कनेक्ट हो। देखें [Google Workspace कनेक्ट करें](../settings/connect-google-workspace.md)।
- आपको पता हो कि किसी फ़ील्ड में पिछले स्टेप का डेटा कैसे लगाते हैं। देखें [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)।

## Google स्टेप कैसे काम करते हैं { #how-google-steps-work }

हर Google स्टेप आपके कनेक्ट किए हुए एक Google अकाउंट से चलता है। फ़्लो जब भी चलता है, उस अकाउंट का एक्सेस दोबारा जाँचा जाता है।

Ohanvi सिर्फ़ वही स्प्रेडशीट और फ़ॉर्म खोल सकता है जो आप **Choose from Google Drive** से उसके लिए चुनते हैं। वह अपनी बनाई स्प्रेडशीट भी खोल सकता है। फ़ाइल आप एक बार चुनते हैं। फिर जब तक आप अपने Google अकाउंट से Ohanvi को हटा नहीं देते, फ़्लो उसी फ़ाइल का इस्तेमाल करता रहता है। देखें [Ohanvi कौन-सी फ़ाइलें खोल सकता है](../settings/connect-google-workspace.md#which-files-ohanvi-can-open)।

| ग्रुप | स्टेप | किस काम के लिए |
| --- | --- | --- |
| **Google Sheets** | **Add a row**, **Read rows**, **Create spreadsheet** | स्प्रेडशीट में लाइनें सेव करना या पढ़ना। |
| **Google Calendar** | **Create event**, **Find events**, **Check availability**, **Update event**, **Cancel event** | इवेंट बुक करना, ढूँढना, आगे-पीछे करना और कैंसिल करना। |
| **Google Meet** | **Instant Meet link** | अभी शेयर करने के लिए मीटिंग लिंक पाना। |
| **Google Contacts** | **Find contact**, **Save contact** | किसी व्यक्ति को ढूँढना या सेव करना। |

नीचे की फ़ील्ड में `{{N...}}` का मतलब स्टेप का नंबर है। जैसे `{{2.eventId}}` स्टेप 2 की एक वैल्यू है। `{{` टाइप करें, या पिछले स्टेप के आउटपुट से कोई वैल्यू कॉपी करें।

## स्टेप { #steps }

### Google अकाउंट चुनें { #choose-the-google-account }

1. कोई Google स्टेप जोड़ें। देखें [Google स्टेप जोड़ें](#add-a-google-step)।
2. **Step** पैनल में **Google account** खोलें और **Choose an account** पर क्लिक करें।
3. कनेक्ट किया हुआ कोई एक अकाउंट चुनें। अगर आपके एडमिन ने डिफ़ॉल्ट अकाउंट सेट किया है, तो लिस्ट में **Default account** भी दिखता है।
4. अगर पैनल में लिखा है कि सर्विस तैयार नहीं है, तो **Open Google Workspace** पर क्लिक करें और अनुमति दें। फिर **Check again** पर क्लिक करें।

पैनल में लिखा आता है: **Runs as this account. Access is checked again every time the flow runs.**

### Google स्टेप जोड़ें { #add-a-google-step }

1. जिस स्टेप के बाद इसे चलाना है, उसके बाद वाले **+** पर क्लिक करें।
2. **All steps** पर क्लिक करें, या **Search** में ऐप का नाम लिखें, जैसे `sheets`।
3. **Google Sheets**, **Google Calendar**, **Google Meet** या **Google Contacts** के नीचे से स्टेप चुनें।
4. उसकी फ़ील्ड भरने के लिए कैनवास पर उस स्टेप पर क्लिक करें।

### स्प्रेडशीट में लाइन जोड़ें { #add-a-row-to-a-spreadsheet }

**Add a row** आखिरी लाइन के बाद एक नई लाइन जोड़ता है।

1. **Add a row** जोड़ें। स्टेप का नाम **Add a row to Google Sheets** होता है।
2. **Choose from Google Drive** से स्प्रेडशीट चुनें। देखें [स्प्रेडशीट और उसका टैब चुनें](#set-the-spreadsheet-and-its-tab)।
3. रेंज भरने के लिए किसी टैब के नाम पर क्लिक करें, या डिफ़ॉल्ट रहने दें।
4. **Sheet** में `Sheet1!A1` रहने दें, या अपना टैब लिखें, जैसे `Leads!A1`।
5. **Row to add** में **Column A**, **Column B** और बाकी कॉलम भरें। कोई वैल्यू लिखें, या पिछले स्टेप का डेटा लगाएँ, जैसे `{{trigger.form.name}}`।
6. और कॉलम चाहिए तो **Add a column** पर क्लिक करें। कोई कॉलम हटाना हो तो **Remove column** पर क्लिक करें।
7. **How** वाली लाइन पढ़ें। यह पहले से तय है: **add after the last row**।

स्टेप से `{{N.updatedRange}}` और `{{N.spreadsheetUrl}}` मिलते हैं। स्टेप दोबारा चले, तब भी लाइन दो बार नहीं जुड़ती। जो टेक्स्ट `=`, `+`, `-` या `@` से शुरू होता है, वह टेक्स्ट की तरह ही लिखा जाता है, फ़ॉर्मूला की तरह नहीं।

### स्प्रेडशीट से लाइनें पढ़ें { #read-rows-from-a-spreadsheet }

1. **Read rows** जोड़ें। स्टेप का नाम **Read rows from Google Sheets** होता है।
2. **Choose from Google Drive** से स्प्रेडशीट चुनें। देखें [स्प्रेडशीट और उसका टैब चुनें](#set-the-spreadsheet-and-its-tab)।
3. **Range** में वे सेल लिखें जो पढ़ने हैं, जैसे `Sheet1!A1:D100`। यह ज़रूरी है।
4. आगे के किसी स्टेप में `{{N.data.values}}` इस्तेमाल करें। यह लाइनों की लिस्ट है। इस पर **For each** स्टेप से लूप चलाएँ।

पढ़ने से कुछ नहीं बदलता, इसलिए स्टेप दोबारा चले तो भी कोई दिक्कत नहीं।

### स्प्रेडशीट बनाएँ { #create-a-spreadsheet }

1. **Create spreadsheet** जोड़ें। स्टेप का नाम **Create a Google spreadsheet** होता है।
2. **Title** में नाम लिखें, जैसे `Leads {{trigger.form.name}}`। यह ज़रूरी है।
3. आगे के स्टेप में `{{N.spreadsheetId}}` और `{{N.spreadsheetUrl}}` इस्तेमाल करें।

Ohanvi अपनी बनाई स्प्रेडशीट तुरंत इस्तेमाल कर सकता है। आगे का कोई स्टेप **Spreadsheet** में `{{N.spreadsheetId}}` डाल सकता है। इसके लिए उसे Google Drive से चुनना नहीं पड़ता।

स्टेप दोबारा चले, तब भी दूसरी स्प्रेडशीट नहीं बनती।

### उपलब्धता जाँचें { #check-availability }

1. **Check availability** जोड़ें। स्टेप का नाम **Find availability in Google Calendar** होता है।
2. **From** में समय की शुरुआत लिखें, जैसे `2026-10-01T09:00:00+05:30`। यह ज़रूरी है।
3. **To** में आखिरी समय लिखें, जैसे `2026-10-01T18:00:00+05:30`। यह ज़रूरी है।
4. **Time zone** में `Asia/Kolkata` या अपना ज़ोन लिखें।
5. स्टेप के बाद `{{N.isFree}}` और `{{N.busy}}` इस्तेमाल करें। `{{N.isFree}}` तभी true होता है जब कोई भी बिज़ी न हो और हर कैलेंडर पढ़ा जा सका हो। बुक करने से पहले इसी पर ब्रांच बनाएँ। देखें [नाम, फ़ोन, ईमेल और पता पूछें](chatbot-ask-details-blocks.md)।

### इवेंट ढूँढें { #find-events }

1. **Find events** जोड़ें। स्टेप का नाम **Find Google Calendar events** होता है।
2. **From** और **To** में समय की सीमा लिखें। दोनों ज़रूरी हैं।
3. **Matching words** में मिलाने के लिए कोई शब्द लिखें, जैसे `Demo call`। यह बॉक्स ज़रूरी नहीं है।
4. **Time zone** में `Asia/Kolkata` लिखें।
5. **At most (events)** में एक संख्या लिखें। डिफ़ॉल्ट `50` है।
6. आगे के स्टेप में `{{N.data.items}}` इस्तेमाल करें। हर इवेंट में `summary`, `start.dateTime`, `htmlLink` और `hangoutLink` होते हैं। जो इवेंट बार-बार होता है, वह जितनी बार होता है उतनी बार अलग-अलग मिलता है।

### इवेंट बनाएँ { #create-an-event }

1. **Create event** जोड़ें। स्टेप का नाम **Create a Google Calendar event** होता है।
2. **Title** में नाम लिखें, जैसे `Call with {{trigger.identity.email}}`। यह ज़रूरी है।
3. **Starts** में शुरू होने का समय लिखें, जैसे `2026-10-01T10:00:00+05:30`। यह ज़रूरी है।
4. **Ends** में खत्म होने का समय लिखें, जैसे `2026-10-01T10:30:00+05:30`। यह ज़रूरी है।
5. **Time zone** में `Asia/Kolkata` लिखें।
6. **Description** में इनवाइट के लिए नोट्स लिखें। यह बॉक्स ज़रूरी नहीं है।
7. **Attendees (optional)** में जिन्हें बुलाना है, उनके ईमेल कॉमा से अलग करके लिखें, जैसे `{{trigger.identity.email}}, sales@example.com`।
8. **Google Meet** खोलें और **Add a Meet link** या **No Meet link** चुनें। डिफ़ॉल्ट **Add a Meet link** है।
9. **Email attendees** खोलें और **Everyone**, **Outside the organisation only** या **Nobody** चुनें। डिफ़ॉल्ट **Everyone** है।

स्टेप से `{{N.eventId}}`, `{{N.htmlLink}}` और `{{N.meetLink}}` मिलते हैं। स्टेप दोबारा चले, तो वह पहले बनाया हुआ इवेंट ही ढूँढ लेता है।

### इवेंट अपडेट करें { #update-an-event }

1. **Update event** जोड़ें। स्टेप का नाम **Update a Google Calendar event** होता है।
2. **Which event** में इवेंट id लिखें, जैसे `{{2.eventId}}`। यह ज़रूरी है।
3. सिर्फ़ वही भरें जो बदलना है: **New title**, **New start**, **New end** और **Time zone**।
4. **Attendees (optional)** में ईमेल कॉमा से अलग करके लिखें, जैसे `sales@example.com`।
5. **Email attendees** चुनें।

आप जो फ़ील्ड भरते हैं, सिर्फ़ वही बदलती हैं।

### इवेंट कैंसिल करें { #cancel-an-event }

1. **Cancel event** जोड़ें। स्टेप का नाम **Cancel a Google Calendar event** होता है।
2. **Which event** में इवेंट id लिखें, जैसे `{{2.eventId}}`। यह ज़रूरी है।
3. **Email attendees** चुनें।

जो इवेंट पहले ही कैंसिल हो चुका है, उसे भी हो गया काम माना जाता है।

### तुरंत Meet लिंक पाएँ { #get-an-instant-meet-link }

1. **Instant Meet link** जोड़ें। स्टेप का नाम **Create an instant Google Meet link** होता है।
2. लिंक शेयर करने के लिए आगे के किसी मैसेज में `{{N.meetingUri}}` इस्तेमाल करें।

इस स्टेप में कोई फ़ील्ड नहीं है। यह कैलेंडर इवेंट नहीं बनाता, इसलिए किसी को इनवाइट नहीं जाता और न ही किसी को रिमाइंडर मिलता है। लोगों को रिमाइंडर के साथ बुलाना हो, तो **Create event** में **Add a Meet link** चुनें।

### कॉन्टैक्ट ढूँढें { #find-a-contact }

1. **Find contact** जोड़ें। स्टेप का नाम **Find a Google contact** होता है।
2. **Email** में ईमेल लिखें, जैसे `{{trigger.identity.email}}`।
3. **Phone** में फ़ोन नंबर लिखें, जैसे `{{trigger.phone}}`।
4. इसके बाद `{{N.found}}`, `{{N.name}}`, `{{N.email}}`, `{{N.phone}}`, `{{N.company}}` और `{{N.url}}` इस्तेमाल करें।

कोई कॉन्टैक्ट न मिले, तो इसे एरर नहीं माना जाता। एक **Condition** जोड़ें जो `{{N.found}}` को जाँचे।

### कॉन्टैक्ट सेव करें { #save-a-contact }

1. **Save contact** जोड़ें। स्टेप का नाम **Save to Google Contacts** होता है।
2. **First name**, **Last name**, **Email**, **Phone**, **Company** और **Notes** भरें। जैसे **Notes** में `Came from the Diwali form` लिखें।
3. **If the contact already exists** खोलें और **Update it** या **Leave it as it is** चुनें। डिफ़ॉल्ट **Update it** है।
4. इसके बाद `{{N.action}}` और `{{N.url}}` इस्तेमाल करें। `{{N.action}}` की वैल्यू `created`, `updated` या `unchanged` होती है।

अपडेट करने से Google में पहले से मौजूद कुछ भी नहीं मिटता। नया ईमेल या फ़ोन नंबर पुराने के साथ जुड़ जाता है। नाम, कंपनी और नोट्स तभी बदलते हैं जब आप उन्हें भरते हैं।

### स्प्रेडशीट और उसका टैब चुनें { #set-the-spreadsheet-and-its-tab }

1. **Spreadsheet** के नीचे **Choose from Google Drive** पर क्लिक करें। जब तक काम चलता है, बटन पर **Opening Google Drive…** दिखता है।
2. अगर Google पूछे, तो वह अकाउंट चुनें जिससे स्टेप चलता है, और एक्सेस की अनुमति दें। पॉप-अप अपने-आप बंद हो जाता है।
3. Google की विंडो में स्प्रेडशीट चुनें और **Select** पर क्लिक करें। Ohanvi **Spreadsheet** भर देता है और टैब लोड कर लेता है।
4. रेंज भरने के लिए किसी टैब के नाम पर क्लिक करें, जैसे `Sheet1!A1`।

सीधे किसी शीट पर पहुँचना हो, तो पहले उसका लिंक **Spreadsheet** में पेस्ट करें, जैसे `https://docs.google.com/spreadsheets/d/…/edit`। तब बटन पर **Confirm in Google Drive** दिखता है और पिकर सीधे उसी शीट पर खुलता है। आपको बस **Select** पर क्लिक करना होता है।

टैब दोबारा पढ़ने के लिए **Load sheet tabs** पर क्लिक करें। जब तक काम चलता है, उस पर **Opening…** दिखता है।

बॉक्स के नीचे का नोट पढ़ें। Ohanvi सिर्फ़ वही स्प्रेडशीट इस्तेमाल कर सकता है जो आप उसके लिए चुनते हैं, या जो उसने खुद बनाई हैं। शीट आप एक बार चुनते हैं। फिर जब तक आप अपने Google अकाउंट से Ohanvi को नहीं हटाते, फ़्लो के पास उसका एक्सेस बना रहता है।

### Google Form में जवाब आने पर फ़्लो शुरू करें { #start-a-flow-when-a-google-form-gets-an-answer }

1. फ़्लो का **Flow trigger** कार्ड खोलें और Google Form response वाला स्टार्ट चुनें।
2. **Google account that can open the form** में एक अकाउंट चुनें। बॉक्स में `Choose an account` दिखता है। लिस्ट में **Default account** भी दिखता है। अगर आपके एडमिन ने कोई अकाउंट सेट नहीं किया, तो **Default account (none set)** दिखता है।
3. **Choose from Google Drive** पर क्लिक करें, Google की विंडो में फ़ॉर्म चुनें और **Select** पर क्लिक करें। Ohanvi **Which Google Form** भर देता है और उसी फ़ॉर्म को इस्तेमाल करता है। सीधे किसी फ़ॉर्म पर पहुँचना हो, तो पहले उसका एडिट लिंक **Which Google Form** में पेस्ट करें, जैसे `https://docs.google.com/forms/d/…/edit`। फ़ॉर्म एडिट करते समय एड्रेस बार में जो लिंक दिखता है, वही लें। **Send** वाला लिंक न लें।
4. अगर आपने ऐसा फ़ॉर्म पेस्ट किया है जिसे Ohanvi पहले से खोल सकता है, तो आप इसकी जगह **Use this form** पर क्लिक कर सकते हैं। जब तक काम चलता है, बटन पर **Checking…** दिखता है। दोनों तरीकों में फ़ॉर्म का वॉच चालू हो जाता है, ताकि फ़्लो शुरू हो सके।
5. उसके नीचे की लाइन पढ़ें। फ़्लो हर नए जवाब पर शुरू होता है। वह हर 5 मिनट में चेक करता है। फ़ॉर्म कनेक्ट करने से पहले आए जवाब दोबारा नहीं चलाए जाते। एडिट किया हुआ जवाब दूसरा रन शुरू नहीं करता।
6. **Answers later steps can use** के नीचे किसी चिप पर क्लिक करके उसे कॉपी करें, जैसे `{{trigger.answers.<question key>}}`। उस जवाब का इस्तेमाल करने के लिए इसे आगे के किसी स्टेप में पेस्ट करें।

Ohanvi सिर्फ़ वही फ़ॉर्म पढ़ सकता है जो आप उसके लिए चुनते हैं। फ़ॉर्म आप एक बार चुनते हैं। फिर जब तक आप अपने Google अकाउंट से Ohanvi को नहीं हटाते, हर नया जवाब फ़्लो को शुरू करता रहता है।

अगर फ़ॉर्म तक नहीं पहुँच पाता, तो यह मैसेज आता है: **Google Forms could not be reached.**

### हर नए Google कॉन्टैक्ट पर फ़्लो शुरू करें { #start-a-flow-for-each-new-google-contact }

1. फ़्लो का **Flow trigger** कार्ड खोलें और नए Google कॉन्टैक्ट वाला स्टार्ट चुनें।
2. **Whose new contacts** में एक Google अकाउंट चुनें। बॉक्स में `Choose a Google account` दिखता है।
3. उसके नीचे की लाइन पढ़ें। अब से उस अकाउंट में जुड़ने वाले हर कॉन्टैक्ट पर फ़्लो शुरू होता है। वह हर 5 मिनट में चेक करता है। जो कॉन्टैक्ट पहले से मौजूद हैं, उन पर फ़्लो दोबारा नहीं चलता। किसी कॉन्टैक्ट को एडिट करने से भी कुछ शुरू नहीं होता।
4. पहली बार का चेक सिर्फ़ एड्रेस बुक को याद रखता है, उससे कुछ शुरू नहीं होता। अगर आपको यह नोट दिखे, तो उसके बाद एक टेस्ट कॉन्टैक्ट जोड़ें।

अगर Google तक नहीं पहुँच पाता, तो यह मैसेज आता है: **Google Contacts could not be reached.**

### स्टेप टेस्ट करें { #test-the-step }

1. **Save** पर क्लिक करें।
2. **Test** पर क्लिक करें, फिर **Run test** पर। देखें [फ़्लो टेस्ट करें और फ़ेल हुए रन ठीक करें](../flows/test-and-monitor-flows.md)।
3. स्टेप पर क्लिक करें और **Output** खोलें। वहाँ दिखता है कि स्टेप से क्या मिला।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| पैनल में लिखा है कि सर्विस तैयार नहीं है | Google ऐप कनेक्ट नहीं है, या उसे अनुमति नहीं दी गई है। | **Open Google Workspace** पर क्लिक करें, उसे कनेक्ट करें, फिर **Check again** पर क्लिक करें। |
| **Ohanvi can't open this spreadsheet yet.** या **Ohanvi can't open this form yet.** | यह फ़ाइल Ohanvi के लिए कभी चुनी नहीं गई। अक्टूबर 2026 से पहले फ़्लो से जोड़ी गई शीट और फ़ॉर्म भी इसी में आते हैं। | **Choose from Google Drive** पर क्लिक करें और स्टेप वाले अकाउंट से साइन इन रहकर फ़ाइल चुनें। |
| **Could not open that spreadsheet.** | अकाउंट शीट नहीं खोल पा रहा, या लिंक गलत है। | शीट को उस अकाउंट के साथ शेयर करें, फिर **Choose from Google Drive** से उसे दोबारा चुनें। |
| **Google sign-in was blocked. Allow pop-ups for this site and try again.** | ब्राउज़र ने Google का पॉप-अप रोक दिया। | Ohanvi के लिए पॉप-अप की अनुमति दें, फिर **Choose from Google Drive** पर दोबारा क्लिक करें। |
| किसी ज़रूरी फ़ील्ड में एरर दिखता है | **Range**, **Title**, **From**, **To**, **Starts**, **Ends** या **Which event** खाली है। | वह फ़ील्ड भरें। |
| कैलेंडर स्टेप गलत समय पर बुक करता है | समय का ऑफ़सेट आपके ज़ोन से मेल नहीं खाता। | वही ऑफ़सेट लगाएँ जो **Time zone** का है, जैसे `Asia/Kolkata` के साथ `+05:30`। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [Google Workspace कनेक्ट करें](../settings/connect-google-workspace.md)
- [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](../flows/connect-apps-for-flows.md)
- [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)
- [फ़्लो टेस्ट करें और फ़ेल हुए रन ठीक करें](../flows/test-and-monitor-flows.md)
- [फ़्लो में Action स्टेप और कंडीशन इस्तेमाल करें](flow-action-and-condition-steps.md)
