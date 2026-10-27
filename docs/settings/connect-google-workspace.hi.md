---
title: Google Workspace कनेक्ट करें
description: Google Sheets, Calendar, Meet, Forms और Contacts कनेक्ट करें, तय करें कि Ohanvi Google Drive की कौन-सी स्प्रेडशीट और फ़ॉर्म खोल सकता है, और किसी सर्विस या अकाउंट को डिस्कनेक्ट करें।
---

# Google Workspace कनेक्ट करें { #connect-google-workspace }

अपना Google अकाउंट कनेक्ट करें। फिर आपके Flow Google Sheets में रो जोड़ सकेंगे, Meet लिंक वाले Google Calendar इवेंट बुक कर सकेंगे, Google Meet लिंक भेज सकेंगे, Google Forms के जवाब आने पर शुरू हो सकेंगे और Google Contacts सेव कर सकेंगे। आप Google में एक बार साइन इन करते हैं और सिर्फ़ वही सर्विस चालू करते हैं जो आपको चाहिए। इसमें करीब 5 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- **Connect** पैनल में आपको **Google Workspace** दिखना चाहिए। यह स्क्रीन डिफ़ॉल्ट रूप से सिर्फ़ एडमिन के लिए होती है। न दिखे, तो अपने एडमिन से कहें।
- आपको पता होना चाहिए कि जिन शीट, कैलेंडर, फ़ॉर्म या कॉन्टैक्ट का आप इस्तेमाल करना चाहते हैं, वे किस Google अकाउंट में हैं।
- आपके ब्राउज़र में Ohanvi के लिए पॉप-अप की अनुमति होनी चाहिए। Google साइन-इन और **Choose from Google Drive** पॉप-अप में खुलते हैं।
- Google Drive से स्प्रेडशीट या फ़ॉर्म चुनने के लिए वेब पर Ohanvi खोलें। वहाँ चुनी हुई फ़ाइल मोबाइल ऐप में भी चलती है।

## हर सर्विस Google से क्या माँगती है { #what-each-service-asks-google-for }

हर सर्विस का अपना कार्ड और अपनी अनुमति है। इसलिए आप Sheets के बिना भी Calendar चालू कर सकते हैं।

| सर्विस | Google आपको क्या दिखाता है | Ohanvi इसका क्या इस्तेमाल करता है |
| --- | --- | --- |
| **Google Sheets** और **Google Forms** | **See, edit, create and delete only the specific Google Drive files that you use with this app** | आपकी चुनी हुई स्प्रेडशीट और फ़ॉर्म खोलना, और Ohanvi जो स्प्रेडशीट आपके लिए बनाता है उन्हें खोलना। |
| **Google Calendar** | आपके कैलेंडर के इवेंट देखना और एडिट करना, आपके कैलेंडर की लिस्ट देखना, और यह देखना कि लोग कब फ़्री हैं | यह देखना कि कौन फ़्री है, फिर इवेंट बनाना, आगे-पीछे करना या कैंसिल करना। |
| **Google Meet** | Google Meet मीटिंग बनाना, और सिर्फ़ वही मीटिंग देखना जो Ohanvi ने बनाई हैं | तुरंत मीटिंग का लिंक भेजना। |
| **Google Contacts** | आपके कॉन्टैक्ट देखना और एडिट करना | आपके चुने हुए कॉन्टैक्ट इम्पोर्ट करना, Flow से कोई कॉन्टैक्ट ढूँढना, और **Save to Google Contacts** स्टेप। |

## Ohanvi कौन-सी फ़ाइलें खोल सकता है { #which-files-ohanvi-can-open }

Ohanvi आपका पूरा Google Drive नहीं देख सकता, उसकी लिस्ट नहीं बना सकता और उसे खोल भी नहीं सकता। वह सिर्फ़ दो तरह की फ़ाइलें खोलता है:

| फ़ाइल | आप क्या करें |
| --- | --- |
| Ohanvi की बनाई स्प्रेडशीट, यानी **Create a spreadsheet** से या **Create spreadsheet** Flow स्टेप से बनी | कुछ नहीं। Ohanvi उसे तुरंत इस्तेमाल कर सकता है। |
| आपकी पहले से मौजूद स्प्रेडशीट या फ़ॉर्म | उसे **Choose from Google Drive** से एक बार चुनें। |

फ़ाइल चुनने के बाद Flow और इम्पोर्ट उसे किसी भी समय इस्तेमाल कर सकते हैं। तब भी, जब कोई साइन इन न हो। यह तब तक चलता है, जब तक आप अपने Google अकाउंट से Ohanvi को हटा नहीं देते। जो फ़ाइल आपने नहीं चुनी, वह Ohanvi के लिए बंद रहती है। भले ही आपका Google अकाउंट उसे खोल सकता हो।

## स्टेप { #steps }

### Google Workspace स्क्रीन खोलें { #open-the-google-workspace-screen }

1. लेफ़्ट रेल में **Connect** खोलें, फिर **Connectors** के नीचे **Google Workspace** चुनें।
2. कार्ड देखें। हर कार्ड अपनी स्थिति बताता है, जैसे **Ready**, **Needs permission** या **Not connected**। **In flows** बताता है कि वह सर्विस Flow में क्या कर सकती है। जैसे Google Sheets के लिए **Add a row · Read rows · Create a spreadsheet**।
3. सबसे नीचे **Google accounts** देखें। इसमें आपके कनेक्ट किए हुए सभी Google अकाउंट की लिस्ट होती है।

### कोई Google सर्विस कनेक्ट करें { #connect-a-google-service }

1. जो कार्ड आपको चाहिए, उसके बटन पर क्लिक करें, जैसे **Connect Google Sheets**। सारी सर्विस एक साथ चालू करनी हों, तो इसके बजाय ऊपर **Connect Google** पर क्लिक करें।
2. Google की विंडो में अपना Google अकाउंट चुनें।
3. Google जो अनुमतियाँ दिखाए, उन्हें पढ़ें और **Continue** पर क्लिक करें।
4. Ohanvi में वापस आने पर कार्ड पर **Ready** लिखा होगा और अकाउंट **Google accounts** में दिखेगा।

दूसरा Google अकाउंट जोड़ने के लिए ऊपर **Add Google account** पर क्लिक करें।

### Google Drive से स्प्रेडशीट चुनें { #choose-a-spreadsheet-from-google-drive }

1. **Google Sheets** कार्ड पर **Open** पर क्लिक करें।
2. **Open an existing spreadsheet** के नीचे **Choose from Google Drive** पर क्लिक करें।
3. Google पूछे, तो वही Google अकाउंट चुनें और एक्सेस की अनुमति दें। पॉप-अप अपने आप बंद हो जाता है।
4. Google की विंडो में स्प्रेडशीट चुनें और **Select** पर क्लिक करें।
5. Ohanvi स्प्रेडशीट खोलता है और उसके टैब की लिस्ट दिखाता है। बॉक्स के नीचे उसके नाम का एक चिप आ जाता है। उस पर क्लिक करके आप उसे दोबारा खोल सकते हैं।

सीधे किसी शीट पर पहुँचना हो, तो पहले उसका लिंक बॉक्स में पेस्ट करें, जैसे `https://docs.google.com/spreadsheets/d/…/edit`। फिर **Choose from Google Drive** पर क्लिक करें। Google की विंडो उसी शीट पर खुलती है, तो आपको बस **Select** पर क्लिक करना होता है।

!!! note "हर मौजूदा शीट को एक बार चुनें"
    अगर आपने शीट का लिंक सिर्फ़ पेस्ट किया है और उसे Google Drive से चुना नहीं है, तो वह नहीं खुलेगी। तब मैसेज आता है **Ohanvi can't open this spreadsheet yet.**

### स्प्रेडशीट बनाएँ { #create-a-spreadsheet }

1. **Google Sheets** कार्ड पर **Open** पर क्लिक करें।
2. **Create a spreadsheet** के नीचे एक नाम लिखें, जैसे `Q3 pipeline export`।
3. **Create** पर क्लिक करें। Ohanvi नई स्प्रेडशीट खोल देता है।

स्प्रेडशीट आपके Google Drive में सेव होती है। Ohanvi उसे तुरंत इस्तेमाल कर सकता है, इसलिए उसे Google Drive से चुनने की ज़रूरत नहीं।

### Google Form चुनें { #choose-a-google-form }

1. **Google Forms** कार्ड पर **Open** पर क्लिक करें।
2. **Open a form** के नीचे **Choose from Google Drive** पर क्लिक करें।
3. Google की विंडो में फ़ॉर्म चुनें और **Select** पर क्लिक करें। Ohanvi उसके सवाल और सबसे नए जवाब दिखाता है।

सीधे किसी फ़ॉर्म पर पहुँचना हो, तो पहले उसका एडिट लिंक पेस्ट करें, जैसे `https://docs.google.com/forms/d/…/edit`। फ़ॉर्म एडिट करते समय एड्रेस बार में जो लिंक दिखता है, वही लें। **Send** वाला लिंक न लें।

नए जवाब आने पर Flow शुरू करना हो, तो [Google Form में जवाब आने पर Flow शुरू करें](../whatsapp/flow-google-workspace-steps.md#start-a-flow-when-a-google-form-gets-an-answer) देखें।

### छोड़ी हुई सर्विस की अनुमति दें { #allow-a-service-you-skipped }

1. वह कार्ड ढूँढें जिस पर **Needs permission** लिखा है। इसका मतलब है कि अकाउंट कनेक्ट है, पर उसने इस सर्विस की अनुमति नहीं दी है।
2. कार्ड के बटन पर क्लिक करें, जैसे **Grant Sheets access**।
3. Google की विंडो में सर्विस की अनुमति दें। Google सिर्फ़ इसी सर्विस की अनुमति माँगता है। अकाउंट की पहले दी हुई अनुमतियाँ वैसी ही रहती हैं।

### एक सर्विस डिस्कनेक्ट करें { #disconnect-one-service }

1. उस सर्विस के कार्ड पर **Disconnect** पर क्लिक करें।
2. **Disconnect Google Sheets?** में **Disconnect** पर क्लिक करें। उस अकाउंट की बाकी Google सर्विस चलती रहती हैं।
3. सर्विस दोबारा इस्तेमाल करनी हो, तो उसके कार्ड पर **Connect Google Sheets** पर क्लिक करें।

### कनेक्ट किया हुआ अकाउंट मैनेज करें { #manage-a-connected-account }

1. **Google accounts** के नीचे अकाउंट पर **Test connection** पर क्लिक करें। इससे पता चलता है कि Google अब भी उसे मान रहा है या नहीं।
2. कुछ बदलना हो, तो अकाउंट का मेन्यू खोलें:
    - **Make default**: आप कोई अकाउंट न चुनें, तो Flow और स्क्रीन यही अकाउंट इस्तेमाल करते हैं।
    - **Rename**: Ohanvi में दिखने वाला नाम बदलें।
    - **Reconnect**: एक्सेस हट जाने या एक्सपायर होने के बाद दोबारा साइन इन करें।
    - **Disconnect**: Ohanvi, Google पर अपना एक्सेस हटा देता है। इस अकाउंट की हर सर्विस बंद हो जाती है।
    - **Remove account**: अकाउंट को लिस्ट से हटाएँ।
3. जो विंडो खुले, उसमें कन्फ़र्म करें।

अकाउंट डिस्कनेक्ट करने या हटाने के बाद भी Ohanvi में पहले से मौजूद डेटा बना रहता है, जैसे इम्पोर्ट किए हुए कॉन्टैक्ट और पूरे हो चुके Flow रन। चाहें तो myaccount.google.com/permissions पर जाकर अपने Google अकाउंट से Ohanvi का एक्सेस भी हटा सकते हैं।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Ohanvi can't open this spreadsheet yet.** या **Ohanvi can't open this form yet.** | यह फ़ाइल Ohanvi के लिए कभी चुनी ही नहीं गई। अक्टूबर 2026 से पहले जोड़ी गई शीट और फ़ॉर्म भी इसी में आते हैं। | **Choose from Google Drive** पर क्लिक करें। मैसेज में जिस अकाउंट का नाम है, उसी से साइन इन रहकर फ़ाइल चुनें। |
| फ़ाइल चुनने के बाद भी काम नहीं हो रहा। | फ़ाइल उस Google अकाउंट के साथ शेयर नहीं है, या लिंक गलत है। | फ़ाइल उस अकाउंट के साथ शेयर करें, या वह अकाउंट कनेक्ट करें जिसमें फ़ाइल है। |
| कार्ड पर **Needs permission** लिखा है। | अकाउंट ने उस सर्विस की अनुमति नहीं दी है। अक्टूबर 2026 से पहले कनेक्ट हुए अकाउंट को Sheets और Forms के लिए यह एक बार दिखता है। | कार्ड के बटन पर क्लिक करें, जैसे **Grant Sheets access**। |
| कार्ड पर **Reconnect needed** लिखा है। | Google का एक्सेस हट गया है या एक्सपायर हो गया है। | **Reconnect** पर क्लिक करें और दोबारा साइन इन करें। |
| **Google sign-in was blocked. Allow pop-ups for this site and try again.** | आपके ब्राउज़र ने Google का पॉप-अप रोक दिया। | Ohanvi के लिए पॉप-अप की अनुमति दें, फिर **Choose from Google Drive** पर दोबारा क्लिक करें। |
| **Choosing a file from Google Drive works in Ohanvi on the web.** | आप मोबाइल ऐप में हैं। | फ़ाइल को वेब पर Ohanvi में एक बार चुनें। इसके बाद वह मोबाइल ऐप में भी चलेगी। |
| कार्ड पर **Not enabled on server** लिखा है। | यह सर्विस आपके वर्कस्पेस के लिए बंद है। | Ohanvi सपोर्ट से संपर्क करें। |

## संबंधित गाइड { #related }

- [Flow में Google Sheets, Calendar, Meet और Contacts के स्टेप जोड़ें](../whatsapp/flow-google-workspace-steps.md)
- [कोई ऐप कनेक्ट करें और उसे Flow में इस्तेमाल करें](../flows/connect-apps-for-flows.md)
- [Flow टेम्प्लेट इस्तेमाल करें](../flows/use-flow-templates.md)
- [Zapier कनेक्ट करें](connect-zapier.md)
