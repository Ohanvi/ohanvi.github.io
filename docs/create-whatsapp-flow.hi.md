---
title: व्हाट्सऐप चैटबॉट फ़्लो बनाएँ
description: Ohanvi में कीवर्ड से शुरू होने वाला व्हाट्सऐप चैटबॉट बनाएँ, जो ग्राहक का स्वागत करे, बटन दिखाए, उनका नाम और ईमेल पूछे और इकट्ठा की गई जानकारी के साथ जवाब दे।
---

# व्हाट्सऐप चैटबॉट फ़्लो बनाएँ { #create-a-whatsapp-chatbot-flow }

ऐसा चैटबॉट बनाएँ जो ग्राहक के कीवर्ड भेजने पर शुरू हो, बटन के साथ वेलकम मैसेज दिखाए, उनका नाम और ईमेल पूछे, और उन जवाबों का इस्तेमाल करते हुए आखिरी मैसेज के साथ बात खत्म करे।

## शुरू करने से पहले { #before-you-start }

- आपका WhatsApp Business नंबर **WhatsApp → Manage** में कनेक्ट हो।
- आपके पास एक टेस्ट फ़ोन नंबर हो जो अभी **Inbox** में किसी एजेंट को असाइन न हो।
- आपने ऐसा स्टार्ट कीवर्ड चुना हो जिसे कोई और चालू फ़्लो इस्तेमाल नहीं करता (**Test** टैब में जाँचें, चरण 12)।

## चरण { #steps }

### फ़्लो बनाएँ { #create-the-flow }

1. **WhatsApp → Flows** खोलें।
2. **New flow** पर क्लिक करें। एक खाली कैनवास खुलता है।

    ![खाली फ़्लो कैनवास, जिसमें Add first step और Build with AI विकल्प हैं](assets/screenshots/create-whatsapp-flow-1-new-flow.png)

3. **Add first step…** पर क्लिक करें, फिर **Start WhatsApp flow** चुनें।

    ![How does this flow start मेन्यू, जिसमें Start WhatsApp flow चुना हुआ है](assets/screenshots/create-whatsapp-flow-2-how-does-flow-start.png)

4. **Keywords** में वह शब्द लिखें जिससे बॉट शुरू होगा, जैसे `hello`। कई कीवर्ड हों तो उन्हें कॉमा से अलग करें।
5. **Match when the message** को **Has the keyword as a word** पर ही रहने दें, फिर **Start building** पर क्लिक करें।

    ![Start a WhatsApp flow डायलॉग, जिसमें Keywords और Match type फ़ील्ड हैं](assets/screenshots/create-whatsapp-flow-3-keyword-dialog.png)

    कीवर्ड में छोटे-बड़े अक्षर का फ़र्क नहीं पड़ता। `hello`, `Hello` और `HELLO` सब फ़्लो शुरू करते हैं।

    **Match when the message** तय करता है कि ग्राहक का मैसेज कीवर्ड से कितना मेल खाना चाहिए। कीवर्ड `hi` के लिए:

    | विकल्प | इन पर फ़्लो शुरू होता है | इन पर शुरू नहीं होता |
    | --- | --- | --- |
    | **Has the keyword as a word** | `hi`, `hi there` | `hii` |
    | **Contains the keyword** | `hi`, `hii`, `chilli` | `hello` |
    | **Is exactly the keyword** | `hi` | `hi there` |

### वेलकम मैसेज और बटन जोड़ें { #add-the-welcome-message-and-buttons }

6. स्टार्ट नोड के बगल में **+** पर क्लिक करें और **Send a message** चुनें।
7. दाएँ पैनल में मैसेज लिखें, जैसे `Hi, how can I help you?`।
8. **+ Add Button** पर क्लिक करें और लेबल लिखें, जैसे `Admission`। `Fees` और `Contact Us` के लिए यही दोहराएँ।

    ![तीन रिप्लाई बटन वाला मैसेज चरण](assets/screenshots/create-whatsapp-flow-4-message-buttons.png)

    एक मैसेज में अधिकतम 3 बटन हो सकते हैं। हर लेबल अधिकतम 20 अक्षर का हो सकता है।

### नाम और ईमेल पूछें { #ask-for-name-and-email }

9. कार्ड के नीचे **+ Add Content** पर क्लिक करें और **Ask Question** चुनें।
10. सवाल लिखें, जैसे `What is your name?`, और **Save the answer as** को **Name** पर सेट करें। जवाब वेरिएबल `name` में सेव होता है।

    ![Ask Question ब्लॉक, जिसमें Save the answer as, Name पर सेट है](assets/screenshots/create-whatsapp-flow-5-ask-question.png)

11. ईमेल के लिए चरण 9 और 10 दोहराएँ: सवाल `What is your email?`, जवाब **Email** के रूप में सेव करें। जवाब वेरिएबल `email` में सेव होता है।

### आखिरी मैसेज जोड़ें { #add-the-closing-message }

12. **+ Add Content** पर क्लिक करें और **Text + Button** चुनें। सेव किए गए जवाबों को दोहरे कर्ली ब्रैकेट के साथ इस्तेमाल करते हुए आखिरी मैसेज लिखें:

    ```text
    Thanks {{name}}, we will contact you at {{email}}.
    ```

    आसान तरीका: `Thanks ` लिखें, फिर मैसेज बॉक्स के नीचे **{Name}** चिप पर क्लिक करें। यह अपने आप `{{name}}` डाल देता है। **{Email}** के साथ भी यही करें।

    व्हाट्सऐप पर ग्राहक को उनका अपना जवाब दिखता है, जैसे **Thanks Priya**।

    !!! warning "छोटे अक्षरों में दोहरे कर्ली ब्रैकेट इस्तेमाल करें"
        वेरिएबल खुद टाइप करें तो `{{name}}` और `{{email}}` लिखें। बड़े अक्षर वाला `{{Name}}` ग्राहक को सादे टेक्स्ट की तरह ही भेज दिया जाता है।

### हर बटन के लिए अलग मैसेज भेजें (वैकल्पिक) { #send-a-different-message-for-each-button-optional }

डिफ़ॉल्ट रूप से हर बटन उसी कार्ड के अगले ब्लॉक पर जाता है। किसी बटन का अपना जवाब रखने के लिए:

1. कार्ड पर बटन वाली पंक्ति के दाएँ सिरे पर **+** पर क्लिक करें, जैसे **Fees** के लिए, और **Send a message** चुनें।

    ![बटन से खुला Add a step after मेन्यू](assets/screenshots/create-whatsapp-flow-9-button-add-step.png)

2. एक नया कार्ड खुलता है, जो उस बटन से जुड़ा होता है। उसका मैसेज लिखें, जैसे `Fees details will be shared soon.`

    ![Fees बटन से जुड़ा नया कार्ड](assets/screenshots/create-whatsapp-flow-10-branch-card.png)

3. बाकी बटनों के लिए भी यही दोहराएँ। जिन बटनों से कोई तार नहीं जुड़ा, वे मुख्य कार्ड के अगले ब्लॉक पर जाते हैं।

    ![पब्लिश करने के बाद दो बटन शाखाओं वाला कैनवास](assets/screenshots/create-whatsapp-flow-11-branches-published.png)

    शाखा वाला कार्ड खत्म होने के बाद बातचीत मुख्य कार्ड पर लौटती है और उसके अगले ब्लॉक से आगे बढ़ती है।

    ![Fees पर टैप करने के बाद की व्हाट्सऐप बातचीत](assets/screenshots/create-whatsapp-flow-12-branch-result.png)

### सेव करें, जाँचें और पब्लिश करें { #save-check-and-publish }

13. **Save** पर क्लिक करें। स्टेटस चिप पर **DRAFT** लिखा होता है।
14. दाएँ पैनल में **Test** टैब खोलें, **A message a customer might send** के नीचे अपना कीवर्ड लिखें और **Check** पर क्लिक करें। नतीजे में **Yes — [your flow] would answer** दिखना चाहिए। अगर उसमें **Another chatbot answers this** भी लिखा हो, तो पब्लिश करने से पहले अपना कीवर्ड बदलें।

    ![Test टैब, जिसमें Would this run जाँच का नतीजा दिख रहा है](assets/screenshots/create-whatsapp-flow-7-test-check.png)

15. **Publish** पर क्लिक करें। **Published and live — new runs use this version** मैसेज दिखता है और **Active** स्विच चालू हो जाता है।

    ![Published and live की पुष्टि](assets/screenshots/create-whatsapp-flow-6-published.png)

16. अपने टेस्ट फ़ोन से अपने बिज़नेस नंबर पर कीवर्ड भेजें। बॉट वेलकम मैसेज और बटन के साथ जवाब देता है। कोई बटन दबाएँ, नाम और ईमेल के सवालों के जवाब दें, और आखिरी मैसेज जाँचें।

    ![टीम इनबॉक्स में बॉट की पूरी बातचीत](assets/screenshots/create-whatsapp-flow-8-whatsapp-result.png)

    यही बातचीत **WhatsApp → Inbox** में भी दिखती है, जहाँ हर बॉट मैसेज पर **Bot** लिखा होता है।

## इसके बजाय AI से फ़्लो बनाएँ { #build-the-flow-with-ai-instead }

आप Ohanvi से एक वाक्य से वही फ़्लो ड्राफ़्ट करवा सकते हैं, फिर उसकी समीक्षा करके पब्लिश कर सकते हैं।

1. **New flow** पर क्लिक करें, फिर **Build with AI** पर क्लिक करें। बाईं ओर एक चैट पैनल खुलता है।

    ![Build with AI पैनल](assets/screenshots/create-whatsapp-flow-13-build-with-ai-panel.png)

2. **Ask anything…** में बॉट का वर्णन लिखकर भेजें, जैसे:

    ```text
    Create a WhatsApp welcome chatbot that starts when user says hi, sends a welcome message, asks for name, asks for email and then sends a thank-you message.
    ```

3. **It is on the canvas** दिखने तक रुकें। AI फ़्लो का नाम रखता है और कार्ड बना देता है। हर ब्लॉक पढ़ने के लिए **Preview** पर क्लिक करें।

    ![Preview मोड में AI से बना फ़्लो](assets/screenshots/create-whatsapp-flow-14-ai-generated-flow.png)

    AI कुछ अतिरिक्त चरण जोड़ सकता है, जैसे टैग या **Speak to Advisor** बटन। जो ज़रूरी न हो उसे डिलीट कर दें।

4. अभी कुछ सेव नहीं हुआ है। **Save** पर क्लिक करें, अपने कीवर्ड के लिए **Test** टैब की जाँच चलाएँ, फिर **Publish** पर क्लिक करें।
5. अपने टेस्ट फ़ोन से कीवर्ड भेजें और हर सवाल का जवाब दें।

    ![व्हाट्सऐप पर चलता AI से बना फ़्लो](assets/screenshots/create-whatsapp-flow-15-ai-flow-on-whatsapp.png)

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Add at least one step before publishing** | फ़्लो में अभी कोई चरण नहीं है। | कोई चरण जोड़ें, जैसे **Send a message**, फिर **Publish** पर क्लिक करें। |
| **Add a step before testing** | आपने बिना चरण वाले फ़्लो पर **Run test** पर क्लिक किया। | कम से कम एक चरण जोड़ें, फिर **Run test** पर दोबारा क्लिक करें। |
| **Could not publish — the step that needs fixing is marked on the canvas** | कोई चरण अधूरा है, जैसे बिना टेक्स्ट वाला मैसेज। कार्ड पर **Empty message** जैसी चेतावनी दिखती है। | निशान लगे कार्ड को खोलें, छूटा हिस्सा भरें, फिर **Publish** पर दोबारा क्लिक करें। |
| पब्लिश रुक जाता है और कार्ड पर **"[flow]" listens for "[keyword]", which already starts "[other flow]"** दिखता है | कोई और चैटबॉट पहले से यही कीवर्ड इस्तेमाल कर रहा है। पूरा मैसेज पढ़ने के लिए कार्ड की चेतावनी पर कर्सर ले जाएँ। | ऐसा कीवर्ड चुनें जिसे कोई और चैटबॉट इस्तेमाल नहीं करता, फिर **Publish** पर दोबारा क्लिक करें। |
| व्हाट्सऐप पर कोई जवाब नहीं आता | कोई और चालू फ़्लो वही कीवर्ड इस्तेमाल करता है, इसलिए जवाब वही फ़्लो देता है। | **Test** टैब → **Check** खोलें। अगर उसमें दूसरे चैटबॉट का नाम आए, तो अपना कीवर्ड बदलें और दोबारा पब्लिश करें। |
| Inbox में **Bot stopped — its last message could not be delivered** दिखता है | जिस फ़्लो ने जवाब दिया उसमें खाली मैसेज चरण या अमान्य मैसेज है। | वह फ़्लो खोलें, हर खाली मैसेज भरें, सेव करें और पब्लिश करें। |
| आखिरी मैसेज में ग्राहक के नाम की जगह `{Name}` या `{{Name}}` दिखता है | प्लेसहोल्डर एट्रिब्यूट की के रूप में छोटे अक्षरों और दोहरे ब्रैकेट में होना चाहिए। | इसे `{{name}}` और `{{email}}` कर दें, सेव करें, पब्लिश करें। |
| बदला हुआ टेक्स्ट अब भी व्हाट्सऐप पर नहीं दिखता | बदलाव सेव हुआ पर पब्लिश नहीं हुआ। चिप पर **LIVE · NOT PUBLISHED** लिखा है। | **Publish** पर क्लिक करें। जो ग्राहक बातचीत के बीच में हैं, वे पुराने वर्शन पर ही खत्म करते हैं। |
| बॉट आपके टेस्ट नंबर को कभी जवाब नहीं देता | संपर्क किसी एजेंट को असाइन है या **Requesting** में है। | **Inbox** में बातचीत को रिज़ॉल्व करें, फिर कीवर्ड दोबारा भेजें। |
| व्हाट्सऐप पर चौथा बटन नहीं दिखता | व्हाट्सऐप एक मैसेज में 3 रिप्लाई बटन ही देता है। | 3 से ज़्यादा विकल्पों के लिए **List / Buttons** ब्लॉक इस्तेमाल करें। |
| बॉट **Which session?** पूछता है और फिर **Nothing is available right now. Please try again later.** कहता है | **Book a Demo** टेम्प्लेट अपने सेशन **Appts** → **Services** से लेता है, और अभी कोई सर्विस जोड़ी नहीं गई है। | बाएँ रेल में **Appts** खोलें, **Services** चुनें और **Add service** पर क्लिक करें। देखें [सर्विस जोड़ें](appointments/add-services.md)। फिर कीवर्ड दोबारा भेजें। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](whatsapp/understand-the-flow-builder.md)
- [चुनें कि फ़्लो कैसे शुरू हो](whatsapp/chatbot-flow-start-and-triggers.md)
- [चैटबॉट में टेक्स्ट और लिस्ट मैसेज भेजें](whatsapp/chatbot-text-and-list-blocks.md)
- [व्हाट्सऐप ब्रॉडकास्ट कैंपेन भेजें](whatsapp/send-broadcast-campaign.md)
- [व्हाट्सऐप टेम्प्लेट बनाएँ](whatsapp/create-message-template.md)
- [संपर्क इम्पोर्ट और सिंक करें](crm/import-and-sync-contacts.md)
