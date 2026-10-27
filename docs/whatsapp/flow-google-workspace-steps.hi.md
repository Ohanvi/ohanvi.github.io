---
title: फ़्लो में Google Sheets, Calendar, Meet और Contacts के चरण जोड़ें
description: फ़्लो में Google Sheets, Google Calendar, Google Meet और Google Contacts के चरण इस्तेमाल करें, हर फ़ील्ड की व्याख्या और हर चरण से मिलने वाली वैल्यू के साथ।
---

# फ़्लो में Google Sheets, Calendar, Meet और Contacts के चरण जोड़ें { #add-google-sheets-calendar-meet-and-contacts-steps-to-a-flow }

Google चरण फ़्लो को आपके Google ऐप के साथ काम करने देते हैं। फ़्लो शीट में पंक्ति जोड़ सकता है, Meet लिंक के साथ कैलेंडर इवेंट बुक कर सकता है, मीटिंग लिंक शेयर कर सकता है, या कोई संपर्क सेव कर सकता है। हर चरण जोड़ने, उसके फ़ील्ड भरने और उससे मिली वैल्यू इस्तेमाल करने के लिए इस पेज को फ़ॉलो करें।

## शुरू करने से पहले { #before-you-start }

- आपने बिल्डर में कोई फ़्लो खोला हो। देखें [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)।
- Google ऐप कनेक्ट हो। देखें [Google Workspace कनेक्ट करें](../settings/connect-google-workspace.md)।
- आपको पता हो कि किसी फ़ील्ड में पिछले चरणों का डेटा कैसे इस्तेमाल करें। देखें [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)।

## Google चरण कैसे काम करते हैं { #how-google-steps-work }

हर Google चरण एक कनेक्ट किए हुए Google अकाउंट के रूप में चलता है। फ़्लो जब भी चलता है, उस अकाउंट का एक्सेस दोबारा जाँचा जाता है।

Ohanvi सिर्फ़ वही स्प्रेडशीट और फ़ॉर्म खोल सकता है जिन्हें आप **Choose from Google Drive** से उसके लिए चुनते हैं, और वे स्प्रेडशीट जो वह खुद बनाता है। आप फ़ाइल एक बार चुनते हैं, और जब तक आप अपने Google अकाउंट से Ohanvi को हटा नहीं देते, फ़्लो उसका इस्तेमाल करता रहता है। देखें [Ohanvi कौन-सी फ़ाइलें खोल सकता है](../settings/connect-google-workspace.md#which-files-ohanvi-can-open)।

| समूह | चरण | किस काम के लिए |
| --- | --- | --- |
| **Google Sheets** | **Add a row**, **Read rows**, **Create spreadsheet** | स्प्रेडशीट में पंक्तियाँ सेव करना या पढ़ना। |
| **Google Calendar** | **Create event**, **Find events**, **Check availability**, **Update event**, **Cancel event** | इवेंट बुक करना, खोजना, आगे-पीछे करना और रद्द करना। |
| **Google Meet** | **Instant Meet link** | अभी शेयर करने के लिए मीटिंग लिंक पाना। |
| **Google Contacts** | **Find contact**, **Save contact** | किसी व्यक्ति को खोजना या सेव करना। |

नीचे के फ़ील्ड में `{{N...}}` का मतलब चरण की संख्या है। जैसे `{{2.eventId}}` चरण 2 की एक वैल्यू है। `{{` टाइप करें या पिछले चरण के आउटपुट से कोई वैल्यू कॉपी करें।

## चरण { #steps }

### Google अकाउंट चुनें { #choose-the-google-account }

1. कोई Google चरण जोड़ें। देखें [Google चरण जोड़ें](#add-a-google-step)।
2. **Step** पैनल में **Google account** खोलें और **Choose an account** पर क्लिक करें।
3. कनेक्ट किया हुआ एक अकाउंट चुनें। अगर आपके एडमिन ने सेट किया है, तो सूची में **Default account** भी दिखता है।
4. अगर पैनल कहता है कि सर्विस तैयार नहीं है, तो **Open Google Workspace** पर क्लिक करें और उसे अनुमति दें। फिर **Check again** पर क्लिक करें।

पैनल में लिखा होता है **Runs as this account. Access is checked again every time the flow runs.**

### Google चरण जोड़ें { #add-a-google-step }

1. जिस चरण के बाद इसे चलना है, उसके बाद **+** पर क्लिक करें।
2. **All steps** पर क्लिक करें, या **Search** में ऐप का नाम लिखें, जैसे `sheets`।
3. **Google Sheets**, **Google Calendar**, **Google Meet** या **Google Contacts** के नीचे चरण पर क्लिक करें।
4. उसके फ़ील्ड भरने के लिए कैनवास पर चरण पर क्लिक करें।

### स्प्रेडशीट में पंक्ति जोड़ें { #add-a-row-to-a-spreadsheet }

**Add a row** आखिरी पंक्ति के बाद एक पंक्ति जोड़ता है।

1. **Add a row** जोड़ें। चरण का शीर्षक **Add a row to Google Sheets** होता है।
2. **Choose from Google Drive** से स्प्रेडशीट चुनें। देखें [स्प्रेडशीट और उसका टैब तय करें](#set-the-spreadsheet-and-its-tab)।
3. रेंज भरने के लिए किसी टैब के नाम पर क्लिक करें, या डिफ़ॉल्ट रहने दें।
4. **Sheet** में `Sheet1!A1` रहने दें या अपना टैब लिखें, जैसे `Leads!A1`।
5. **Row to add** के नीचे **Column A**, **Column B** आदि भरें। कोई वैल्यू लिखें, या पिछले चरण का डेटा इस्तेमाल करें, जैसे `{{trigger.form.name}}`।
6. और कॉलम के लिए **Add a column** पर क्लिक करें। किसी को हटाने के लिए **Remove column** पर क्लिक करें।
7. **How** पंक्ति पढ़ें। यह तय है: **add after the last row**।

चरण `{{N.updatedRange}}` और `{{N.spreadsheetUrl}}` लौटाता है। दोबारा चलाया गया चरण पंक्ति दो बार नहीं जोड़ता। जो टेक्स्ट `=`, `+`, `-` या `@` से शुरू होता है, वह टेक्स्ट के रूप में लिखा जाता है, फ़ॉर्मूला के रूप में नहीं।

### स्प्रेडशीट से पंक्तियाँ पढ़ें { #read-rows-from-a-spreadsheet }

1. **Read rows** जोड़ें। चरण का शीर्षक **Read rows from Google Sheets** होता है।
2. **Choose from Google Drive** से स्प्रेडशीट चुनें। देखें [स्प्रेडशीट और उसका टैब तय करें](#set-the-spreadsheet-and-its-tab)।
3. **Range** में पढ़ने वाले सेल लिखें, जैसे `Sheet1!A1:D100`। यह ज़रूरी है।
4. बाद के किसी चरण में `{{N.data.values}}` इस्तेमाल करें। यह पंक्तियों की सूची है। **For each** चरण से इस पर लूप चलाएँ।

पढ़ने से कुछ नहीं बदलता, इसलिए दोबारा चलाना सुरक्षित है।

### स्प्रेडशीट बनाएँ { #create-a-spreadsheet }

1. **Create spreadsheet** जोड़ें। चरण का शीर्षक **Create a Google spreadsheet** होता है।
2. **Title** में नाम लिखें, जैसे `Leads {{trigger.form.name}}`। यह ज़रूरी है।
3. बाद के चरणों में `{{N.spreadsheetId}}` और `{{N.spreadsheetUrl}}` इस्तेमाल करें।

Ohanvi अपनी बनाई स्प्रेडशीट तुरंत इस्तेमाल कर सकता है। बाद का कोई चरण Google Drive से चुने बिना **Spreadsheet** में `{{N.spreadsheetId}}` डाल सकता है।

दोबारा चलाया गया चरण दूसरी स्प्रेडशीट नहीं बनाता।

### उपलब्धता जाँचें { #check-availability }

1. **Check availability** जोड़ें। चरण का शीर्षक **Find availability in Google Calendar** होता है।
2. **From** में विंडो की शुरुआत लिखें, जैसे `2026-10-01T09:00:00+05:30`। यह ज़रूरी है।
3. **To** में अंत लिखें, जैसे `2026-10-01T18:00:00+05:30`। यह ज़रूरी है।
4. **Time zone** में `Asia/Kolkata` या अपना ज़ोन लिखें।
5. चरण के बाद `{{N.isFree}}` और `{{N.busy}}` इस्तेमाल करें। `{{N.isFree}}` तभी true होता है जब कोई व्यस्त न हो और हर कैलेंडर पढ़ा जा सका हो। बुक करने से पहले इस पर ब्रांच करें। देखें [नाम, फ़ोन, ईमेल और पता पूछें](chatbot-ask-details-blocks.md)।

### इवेंट खोजें { #find-events }

1. **Find events** जोड़ें। चरण का शीर्षक **Find Google Calendar events** होता है।
2. **From** और **To** में विंडो लिखें। दोनों ज़रूरी हैं।
3. **Matching words** में मिलान के लिए कोई शब्द लिखें, जैसे `Demo call`। यह बॉक्स वैकल्पिक है।
4. **Time zone** में `Asia/Kolkata` लिखें।
5. **At most (events)** में एक संख्या लिखें। डिफ़ॉल्ट `50` है।
6. बाद के चरणों में `{{N.data.items}}` इस्तेमाल करें। हर इवेंट में `summary`, `start.dateTime`, `htmlLink` और `hangoutLink` होते हैं। बार-बार होने वाला इवेंट जितनी बार होता है, उतनी बार एक-एक करके लौटता है।

### इवेंट बनाएँ { #create-an-event }

1. **Create event** जोड़ें। चरण का शीर्षक **Create a Google Calendar event** होता है।
2. **Title** में नाम लिखें, जैसे `Call with {{trigger.identity.email}}`। यह ज़रूरी है।
3. **Starts** में शुरू होने का समय लिखें, जैसे `2026-10-01T10:00:00+05:30`। यह ज़रूरी है।
4. **Ends** में खत्म होने का समय लिखें, जैसे `2026-10-01T10:30:00+05:30`। यह ज़रूरी है।
5. **Time zone** में `Asia/Kolkata` लिखें।
6. **Description** में निमंत्रण के लिए नोट्स लिखें। यह बॉक्स वैकल्पिक है।
7. **Attendees (optional)** में जिन्हें बुलाना है उनके ईमेल कॉमा से अलग करके लिखें, जैसे `{{trigger.identity.email}}, sales@example.com`।
8. **Google Meet** खोलें और **Add a Meet link** या **No Meet link** चुनें। डिफ़ॉल्ट **Add a Meet link** है।
9. **Email attendees** खोलें और **Everyone**, **Outside the organisation only** या **Nobody** चुनें। डिफ़ॉल्ट **Everyone** है।

चरण `{{N.eventId}}`, `{{N.htmlLink}}` और `{{N.meetLink}}` लौटाता है। दोबारा चलाया गया चरण वही इवेंट ढूँढ लेता है जो वह पहले बना चुका है।

### इवेंट अपडेट करें { #update-an-event }

1. **Update event** जोड़ें। चरण का शीर्षक **Update a Google Calendar event** होता है।
2. **Which event** में इवेंट id लिखें, जैसे `{{2.eventId}}`। यह ज़रूरी है।
3. सिर्फ़ वही भरें जो बदलना है: **New title**, **New start**, **New end** और **Time zone**।
4. **Attendees (optional)** में ईमेल कॉमा से अलग करके लिखें, जैसे `sales@example.com`।
5. **Email attendees** चुनें।

सिर्फ़ वही फ़ील्ड बदलते हैं जो आप भरते हैं।

### इवेंट रद्द करें { #cancel-an-event }

1. **Cancel event** जोड़ें। चरण का शीर्षक **Cancel a Google Calendar event** होता है।
2. **Which event** में इवेंट id लिखें, जैसे `{{2.eventId}}`। यह ज़रूरी है।
3. **Email attendees** चुनें।

जो इवेंट पहले ही रद्द हो चुका है, उसे हो चुका काम माना जाता है।

### तुरंत Meet लिंक पाएँ { #get-an-instant-meet-link }

1. **Instant Meet link** जोड़ें। चरण का शीर्षक **Create an instant Google Meet link** होता है।
2. लिंक शेयर करने के लिए बाद के किसी संदेश में `{{N.meetingUri}}` इस्तेमाल करें।

इस चरण में कोई फ़ील्ड नहीं है। यह कोई कैलेंडर इवेंट नहीं बनाता, इसलिए किसी को न बुलाया जाता है, न रिमाइंडर मिलता है। रिमाइंडर के साथ लोगों को बुलाने के लिए **Add a Meet link** के साथ **Create event** इस्तेमाल करें।

### संपर्क खोजें { #find-a-contact }

1. **Find contact** जोड़ें। चरण का शीर्षक **Find a Google contact** होता है।
2. **Email** में ईमेल लिखें, जैसे `{{trigger.identity.email}}`।
3. **Phone** में फ़ोन लिखें, जैसे `{{trigger.phone}}`।
4. उसके बाद `{{N.found}}`, `{{N.name}}`, `{{N.email}}`, `{{N.phone}}`, `{{N.company}}` और `{{N.url}}` इस्तेमाल करें।

कोई न मिलना गड़बड़ी नहीं है। एक **Condition** जोड़ें जो `{{N.found}}` को जाँचे।

### संपर्क सेव करें { #save-a-contact }

1. **Save contact** जोड़ें। चरण का शीर्षक **Save to Google Contacts** होता है।
2. **First name**, **Last name**, **Email**, **Phone**, **Company** और **Notes** भरें। उदाहरण के लिए, **Notes** में `Came from the Diwali form` लिखें।
3. **If the contact already exists** खोलें और **Update it** या **Leave it as it is** चुनें। डिफ़ॉल्ट **Update it** है।
4. उसके बाद `{{N.action}}` और `{{N.url}}` इस्तेमाल करें। `{{N.action}}` `created`, `updated` या `unchanged` होता है।

अपडेट से Google में मौजूद कुछ भी नहीं मिटता। नया ईमेल या फ़ोन पुराने के बगल में जुड़ जाता है। नाम, कंपनी और नोट्स सिर्फ़ तभी बदलते हैं जब आप उन्हें भरते हैं।

### स्प्रेडशीट और उसका टैब तय करें { #set-the-spreadsheet-and-its-tab }

1. **Spreadsheet** के नीचे **Choose from Google Drive** पर क्लिक करें। काम के दौरान बटन **Opening Google Drive…** दिखाता है।
2. अगर Google पूछे, तो वह अकाउंट चुनें जिसके रूप में चरण चलता है और एक्सेस की अनुमति दें। पॉप-अप अपने-आप बंद हो जाता है।
3. Google विंडो में स्प्रेडशीट चुनें और **Select** पर क्लिक करें। Ohanvi **Spreadsheet** भर देता है और टैब लोड कर लेता है।
4. रेंज भरने के लिए किसी टैब के नाम पर क्लिक करें, जैसे `Sheet1!A1`।

सीधे किसी शीट पर जाने के लिए पहले उसका लिंक **Spreadsheet** में पेस्ट करें, जैसे `https://docs.google.com/spreadsheets/d/…/edit`। तब बटन **Confirm in Google Drive** दिखाता है, और पिकर उसी शीट पर खुलता है, इसलिए आपको बस **Select** पर क्लिक करना होता है।

टैब दोबारा पढ़ने के लिए **Load sheet tabs** पर क्लिक करें। काम के दौरान वह **Opening…** दिखाता है।

बॉक्स के नीचे का नोट पढ़ें। Ohanvi सिर्फ़ वही स्प्रेडशीट इस्तेमाल कर सकता है जो आप उसके लिए चुनते हैं, या जो उसने खुद बनाई हैं। आप शीट एक बार चुनते हैं, और जब तक आप अपने Google अकाउंट से Ohanvi को नहीं हटाते, फ़्लो के पास एक्सेस बना रहता है।

### Google Form में जवाब आने पर फ़्लो शुरू करें { #start-a-flow-when-a-google-form-gets-an-answer }

1. फ़्लो का **Flow trigger** कार्ड खोलें और Google Form response वाला स्टार्ट चुनें।
2. **Google account that can open the form** के नीचे एक अकाउंट चुनें। बॉक्स में `Choose an account` दिखता है। सूची में **Default account** भी दिखता है, या अगर आपके एडमिन ने कोई सेट नहीं किया तो **Default account (none set)**।
3. **Choose from Google Drive** पर क्लिक करें, Google विंडो में फ़ॉर्म चुनें और **Select** पर क्लिक करें। Ohanvi **Which Google Form** भर देता है और उसका इस्तेमाल करता है। सीधे किसी फ़ॉर्म पर जाने के लिए पहले उसका एडिट लिंक **Which Google Form** में पेस्ट करें, जैसे `https://docs.google.com/forms/d/…/edit`। फ़ॉर्म एडिट करते समय एड्रेस बार वाला लिंक इस्तेमाल करें, **Send** वाला लिंक नहीं।
4. अगर आपने ऐसा फ़ॉर्म पेस्ट किया है जिसे Ohanvi पहले से खोल सकता है, तो आप उसकी जगह **Use this form** पर क्लिक कर सकते हैं। काम के दौरान बटन **Checking…** दिखाता है। दोनों तरह से फ़ॉर्म का वॉच चालू हो जाता है, ताकि फ़्लो शुरू हो सके।
5. उसके नीचे की पंक्ति पढ़ें। फ़्लो हर नए जवाब पर शुरू होता है। वह हर 5 मिनट में जाँच करता है। फ़ॉर्म कनेक्ट करने से पहले के जवाब दोबारा नहीं चलाए जाते, और एडिट किया गया जवाब दूसरा रन शुरू नहीं करता।
6. **Answers later steps can use** के नीचे किसी चिप, जैसे `{{trigger.answers.<question key>}}`, पर क्लिक करके उसे कॉपी करें। उस जवाब को इस्तेमाल करने के लिए उसे बाद के किसी चरण में पेस्ट करें।

Ohanvi सिर्फ़ वही फ़ॉर्म पढ़ सकता है जो आप उसके लिए चुनते हैं। आप फ़ॉर्म एक बार चुनते हैं, और जब तक आप अपने Google अकाउंट से Ohanvi को नहीं हटाते, नए जवाब फ़्लो को शुरू करते रहते हैं।

अगर फ़ॉर्म तक नहीं पहुँचा जा सकता, तो संदेश आता है **Google Forms could not be reached.**

### हर नए Google संपर्क पर फ़्लो शुरू करें { #start-a-flow-for-each-new-google-contact }

1. फ़्लो का **Flow trigger** कार्ड खोलें और नए Google संपर्क वाला स्टार्ट चुनें।
2. **Whose new contacts** के नीचे एक Google अकाउंट चुनें। बॉक्स में `Choose a Google account` दिखता है।
3. उसके नीचे की पंक्ति पढ़ें। अब से उस अकाउंट में जुड़ने वाले हर संपर्क पर फ़्लो शुरू होता है। वह हर 5 मिनट में जाँच करता है। जो संपर्क पहले से हैं उन्हें दोबारा नहीं चलाया जाता, और किसी संपर्क को एडिट करने से कुछ शुरू नहीं होता।
4. पहली जाँच सिर्फ़ एड्रेस बुक को याद रखती है और कुछ शुरू नहीं करती। अगर यह नोट दिखे, तो उसके बाद एक टेस्ट संपर्क जोड़ें।

अगर Google तक नहीं पहुँचा जा सकता, तो संदेश आता है **Google Contacts could not be reached.**

### चरण टेस्ट करें { #test-the-step }

1. **Save** पर क्लिक करें।
2. **Test** पर क्लिक करें, फिर **Run test** पर। देखें [फ़्लो टेस्ट करें और फ़ेल हुए रन ठीक करें](../flows/test-and-monitor-flows.md)।
3. चरण पर क्लिक करें और उसने क्या लौटाया यह पढ़ने के लिए **Output** खोलें।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| पैनल कहता है कि सर्विस तैयार नहीं है | Google ऐप कनेक्ट नहीं है या उसे अनुमति नहीं दी गई। | **Open Google Workspace** पर क्लिक करें, उसे कनेक्ट करें, फिर **Check again** पर क्लिक करें। |
| **Ohanvi can't open this spreadsheet yet.** या **Ohanvi can't open this form yet.** | फ़ाइल Ohanvi के लिए कभी चुनी नहीं गई। इसमें अक्टूबर 2026 से पहले फ़्लो से जोड़ी गई शीट और फ़ॉर्म भी शामिल हैं। | **Choose from Google Drive** पर क्लिक करें और चरण के अकाउंट से साइन इन रहते हुए फ़ाइल चुनें। |
| **Could not open that spreadsheet.** | अकाउंट शीट नहीं खोल सकता, या लिंक गलत है। | शीट को उस अकाउंट के साथ शेयर करें, फिर उसे **Choose from Google Drive** से दोबारा चुनें। |
| **Google sign-in was blocked. Allow pop-ups for this site and try again.** | ब्राउज़र ने Google पॉप-अप रोक दिया। | Ohanvi के लिए पॉप-अप की अनुमति दें, फिर **Choose from Google Drive** पर दोबारा क्लिक करें। |
| किसी ज़रूरी फ़ील्ड में गड़बड़ी दिखती है | **Range**, **Title**, **From**, **To**, **Starts**, **Ends** या **Which event** खाली है। | फ़ील्ड भरें। |
| कैलेंडर चरण गलत घंटे पर बुक करता है | समय का ऑफ़सेट आपके ज़ोन से अलग है। | **Time zone** वाला ही ऑफ़सेट इस्तेमाल करें, जैसे `Asia/Kolkata` के साथ `+05:30`। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [Google Workspace कनेक्ट करें](../settings/connect-google-workspace.md)
- [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](../flows/connect-apps-for-flows.md)
- [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)
- [फ़्लो टेस्ट करें और फ़ेल हुए रन ठीक करें](../flows/test-and-monitor-flows.md)
- [फ़्लो में Action चरण और कंडीशन का इस्तेमाल करें](flow-action-and-condition-steps.md)
