---
title: Google Workspace कनेक्ट करें
description: Google Sheets, Calendar, Meet, Forms और Contacts कनेक्ट करें, चुनें कि Ohanvi Google Drive की कौन सी स्प्रेडशीट और फ़ॉर्म खोल सकता है, और किसी सर्विस या अकाउंट को डिस्कनेक्ट करें।
---

# Google Workspace कनेक्ट करें { #connect-google-workspace }

अपना Google अकाउंट कनेक्ट करें, ताकि आपके फ़्लो Google Sheets में पंक्तियाँ जोड़ सकें, Meet लिंक के साथ Google Calendar इवेंट बुक कर सकें, Google Meet लिंक भेज सकें, Google Forms के जवाबों से शुरू हो सकें और Google Contacts सेव कर सकें। आप Google से एक बार साइन इन करते हैं और सिर्फ़ वही सर्विस चालू करते हैं जिनकी आपको ज़रूरत है। इसमें करीब 5 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- **Connect** पैनल में आपको **Google Workspace** दिखता हो। यह स्क्रीन डिफ़ॉल्ट रूप से एडमिन के लिए है। न दिखे तो अपने एडमिन से कहें।
- आपको पता हो कि जिन शीट, कैलेंडर, फ़ॉर्म या संपर्कों का आप इस्तेमाल करना चाहते हैं, वे किस Google अकाउंट के हैं।
- आपका ब्राउज़र Ohanvi के लिए पॉप-अप की अनुमति देता हो। Google साइन-इन और **Choose from Google Drive** पॉप-अप में खुलते हैं।
- Google Drive से स्प्रेडशीट या फ़ॉर्म चुनने के लिए आप वेब पर Ohanvi इस्तेमाल करें। वहाँ चुनी हुई फ़ाइल मोबाइल ऐप में भी काम करती है।

## हर सर्विस Google से क्या माँगती है { #what-each-service-asks-google-for }

हर सर्विस का अपना कार्ड और अपनी अनुमति है, इसलिए आप Sheets के बिना भी Calendar चालू कर सकते हैं।

| सर्विस | Google आपको क्या दिखाता है | Ohanvi इसका क्या इस्तेमाल करता है |
| --- | --- | --- |
| **Google Sheets** और **Google Forms** | **See, edit, create and delete only the specific Google Drive files that you use with this app** | आपकी चुनी हुई स्प्रेडशीट और फ़ॉर्म खोलना, और Ohanvi आपके लिए जो स्प्रेडशीट बनाता है उन्हें खोलना। |
| **Google Calendar** | आपके कैलेंडर के इवेंट देखना और एडिट करना, आपके कैलेंडर की सूची देखना, और देखना कि लोग कब फ़्री हैं | देखना कि कौन फ़्री है, फिर इवेंट बनाना, खिसकाना या रद्द करना। |
| **Google Meet** | Google Meet मीटिंग बनाना, और सिर्फ़ वही मीटिंग देखना जो Ohanvi ने बनाई हैं | तुरंत मीटिंग का लिंक भेजना। |
| **Google Contacts** | आपके संपर्क देखना और एडिट करना | आपके चुने संपर्क इम्पोर्ट करना, फ़्लो से कोई संपर्क खोजना, और **Save to Google Contacts** चरण। |

## Ohanvi कौन सी फ़ाइलें खोल सकता है { #which-files-ohanvi-can-open }

Ohanvi आपका Google Drive न देख सकता है, न उसकी सूची बना सकता है, न उसे खोल सकता है। वह सिर्फ़ दो तरह की फ़ाइल खोलता है:

| फ़ाइल | आप क्या करें |
| --- | --- |
| Ohanvi की बनाई स्प्रेडशीट, **Create a spreadsheet** से या **Create spreadsheet** फ़्लो चरण से | कुछ नहीं। Ohanvi उसे तुरंत इस्तेमाल कर सकता है। |
| आपकी पहले से मौजूद स्प्रेडशीट या फ़ॉर्म | उसे **Choose from Google Drive** से एक बार चुनें। |

फ़ाइल चुनने के बाद, फ़्लो और इम्पोर्ट उसे किसी भी समय इस्तेमाल कर सकते हैं, तब भी जब कोई साइन इन न हो, जब तक आप अपने Google अकाउंट से Ohanvi को हटा नहीं देते। जो फ़ाइल आपने नहीं चुनी, वह Ohanvi के लिए बंद रहती है, भले ही आपका Google अकाउंट उसे खोल सकता हो।

## चरण { #steps }

### Google Workspace स्क्रीन खोलें { #open-the-google-workspace-screen }

1. लेफ़्ट रेल में **Connect** खोलें, फिर **Connectors** के नीचे **Google Workspace** चुनें।
2. कार्ड पढ़ें। हर कार्ड अपनी स्थिति दिखाता है, जैसे **Ready**, **Needs permission** या **Not connected**। **In flows** बताता है कि सर्विस फ़्लो में क्या कर सकती है, जैसे Google Sheets के लिए **Add a row · Read rows · Create a spreadsheet**।
3. सबसे नीचे **Google accounts** पढ़ें। उसमें आपके कनेक्ट किए सभी Google अकाउंट की सूची होती है।

### कोई Google सर्विस कनेक्ट करें { #connect-a-google-service }

1. जिस कार्ड की ज़रूरत है, उसका बटन दबाएँ, जैसे **Connect Google Sheets**। सभी सर्विस एक साथ चालू करने के लिए इसके बजाय ऊपर **Connect Google** पर क्लिक करें।
2. Google की विंडो में अपना Google अकाउंट चुनें।
3. Google की बताई अनुमतियाँ पढ़ें और **Continue** पर क्लिक करें।
4. Ohanvi में वापस आने पर कार्ड पर **Ready** लिखा होता है और अकाउंट **Google accounts** में दिखता है।

दूसरा Google अकाउंट कनेक्ट करने के लिए ऊपर **Add Google account** पर क्लिक करें।

### Google Drive से स्प्रेडशीट चुनें { #choose-a-spreadsheet-from-google-drive }

1. **Google Sheets** कार्ड पर **Open** पर क्लिक करें।
2. **Open an existing spreadsheet** के नीचे **Choose from Google Drive** पर क्लिक करें।
3. अगर Google पूछे, तो वही Google अकाउंट चुनें और एक्सेस की अनुमति दें। पॉप-अप अपने-आप बंद हो जाता है।
4. Google की विंडो में स्प्रेडशीट चुनें और **Select** पर क्लिक करें।
5. Ohanvi स्प्रेडशीट खोलता है और उसके टैब की सूची दिखाता है। बॉक्स के नीचे उसके नाम का एक चिप आ जाता है, ताकि आप उसे एक क्लिक में फिर खोल सकें।

सीधे किसी शीट पर पहुँचने के लिए पहले उसका लिंक बॉक्स में पेस्ट करें, जैसे `https://docs.google.com/spreadsheets/d/…/edit`। फिर **Choose from Google Drive** पर क्लिक करें। Google की विंडो उसी शीट पर खुलती है, इसलिए आपको बस **Select** पर क्लिक करना होता है।

!!! note "हर मौजूदा शीट को एक बार चुनें"
    जिस शीट को आपने सिर्फ़ पेस्ट किया है, Google Drive से चुना नहीं है, वह खोली नहीं जा सकती। संदेश में लिखा होता है **Ohanvi can't open this spreadsheet yet.**

### स्प्रेडशीट बनाएँ { #create-a-spreadsheet }

1. **Google Sheets** कार्ड पर **Open** पर क्लिक करें।
2. **Create a spreadsheet** के नीचे नाम लिखें, जैसे `Q3 pipeline export`।
3. **Create** पर क्लिक करें। Ohanvi नई स्प्रेडशीट खोलता है।

स्प्रेडशीट आपके Google Drive में सेव होती है। Ohanvi उसे तुरंत इस्तेमाल कर सकता है, इसलिए उसे Google Drive से चुनने की ज़रूरत नहीं।

### Google Form चुनें { #choose-a-google-form }

1. **Google Forms** कार्ड पर **Open** पर क्लिक करें।
2. **Open a form** के नीचे **Choose from Google Drive** पर क्लिक करें।
3. Google की विंडो में फ़ॉर्म चुनें और **Select** पर क्लिक करें। Ohanvi उसके सवाल और सबसे हाल के जवाब दिखाता है।

सीधे किसी फ़ॉर्म पर पहुँचने के लिए पहले उसका एडिट लिंक पेस्ट करें, जैसे `https://docs.google.com/forms/d/…/edit`। फ़ॉर्म एडिट करते समय एड्रेस बार वाला लिंक इस्तेमाल करें, **Send** वाला लिंक नहीं।

नए जवाबों से फ़्लो शुरू करने के लिए देखें [Google Form में जवाब आने पर फ़्लो शुरू करें](../whatsapp/flow-google-workspace-steps.md#start-a-flow-when-a-google-form-gets-an-answer)।

### छोड़ी हुई सर्विस की अनुमति दें { #allow-a-service-you-skipped }

1. वह कार्ड खोजें जिस पर **Needs permission** लिखा है। अकाउंट कनेक्ट है, पर उसने इस सर्विस की अनुमति नहीं दी है।
2. उसका ग्रांट बटन दबाएँ, जैसे **Grant Sheets access**।
3. Google की विंडो में सर्विस की अनुमति दें। Google सिर्फ़ इसी सर्विस की अनुमति माँगता है, और अकाउंट की पहले दी हुई अनुमतियाँ बनी रहती हैं।

### एक सर्विस डिस्कनेक्ट करें { #disconnect-one-service }

1. सर्विस के कार्ड पर **Disconnect** पर क्लिक करें।
2. **Disconnect Google Sheets?** में **Disconnect** पर क्लिक करें। अकाउंट की बाकी Google सर्विस काम करती रहती हैं।
3. सर्विस फिर इस्तेमाल करने के लिए उसके कार्ड पर **Connect Google Sheets** पर क्लिक करें।

### कनेक्ट किए अकाउंट को प्रबंधित करें { #manage-a-connected-account }

1. **Google accounts** के नीचे, अकाउंट पर **Test connection** पर क्लिक करें और जाँचें कि Google अब भी उसे स्वीकार करता है।
2. उसे बदलने के लिए अकाउंट का मेन्यू खोलें:
    - **Make default**: जब आप कोई अकाउंट न चुनें, तो फ़्लो और स्क्रीन यही अकाउंट इस्तेमाल करते हैं।
    - **Rename**: Ohanvi में दिखने वाला नाम बदलें।
    - **Reconnect**: एक्सेस हटने या एक्सपायर होने के बाद दोबारा साइन इन करें।
    - **Disconnect**: Ohanvi Google पर अपना एक्सेस हटा देता है। इस अकाउंट की हर सर्विस बंद हो जाती है।
    - **Remove account**: अकाउंट को सूची से हटाएँ।
3. खुलने वाली विंडो में पुष्टि करें।

Ohanvi में पहले से मौजूद डेटा, जैसे इम्पोर्ट किए संपर्क और पूरे हो चुके फ़्लो रन, अकाउंट डिस्कनेक्ट या हटाने के बाद भी बना रहता है। आप अपने Google अकाउंट से Ohanvi का एक्सेस myaccount.google.com/permissions पर भी हटा सकते हैं।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Ohanvi can't open this spreadsheet yet.** या **Ohanvi can't open this form yet.** | फ़ाइल कभी Ohanvi के लिए चुनी ही नहीं गई। अक्टूबर 2026 से पहले जोड़ी गई शीट और फ़ॉर्म भी इसमें आते हैं। | **Choose from Google Drive** पर क्लिक करें और संदेश में बताए अकाउंट से साइन इन रहकर फ़ाइल चुनें। |
| फ़ाइल चुनने के बाद भी फ़ेल हो रहा है। | फ़ाइल उस Google अकाउंट के साथ शेयर नहीं है, या लिंक गलत है। | फ़ाइल उस अकाउंट के साथ शेयर करें, या वह अकाउंट कनेक्ट करें जिसकी वह फ़ाइल है। |
| कार्ड पर **Needs permission** लिखा है। | अकाउंट ने उस सर्विस की अनुमति नहीं दी है। अक्टूबर 2026 से पहले कनेक्ट हुए अकाउंट को Sheets और Forms के लिए यह एक बार दिखता है। | कार्ड पर ग्रांट बटन दबाएँ, जैसे **Grant Sheets access**। |
| कार्ड पर **Reconnect needed** लिखा है। | Google का एक्सेस हट गया है या एक्सपायर हो गया है। | **Reconnect** पर क्लिक करें और फिर साइन इन करें। |
| **Google sign-in was blocked. Allow pop-ups for this site and try again.** | आपके ब्राउज़र ने Google का पॉप-अप रोक दिया। | Ohanvi के लिए पॉप-अप की अनुमति दें, फिर **Choose from Google Drive** पर दोबारा क्लिक करें। |
| **Choosing a file from Google Drive works in Ohanvi on the web.** | आप मोबाइल ऐप में हैं। | फ़ाइल को वेब पर Ohanvi में एक बार चुनें। इसके बाद वह मोबाइल ऐप में भी काम करती है। |
| कार्ड पर **Not enabled on server** लिखा है। | सर्विस आपके वर्कस्पेस के लिए बंद है। | Ohanvi सपोर्ट से संपर्क करें। |

## संबंधित गाइड { #related }

- [फ़्लो में Google Sheets, Calendar, Meet और Contacts के चरण जोड़ें](../whatsapp/flow-google-workspace-steps.md)
- [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](../flows/connect-apps-for-flows.md)
- [फ़्लो टेम्प्लेट इस्तेमाल करें](../flows/use-flow-templates.md)
- [Zapier कनेक्ट करें](connect-zapier.md)
