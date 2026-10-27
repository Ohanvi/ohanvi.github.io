---
title: चुनें कि फ़्लो कैसे शुरू हो
description: चैटबॉट का Flow Start ब्लॉक सेट करें: कीवर्ड, मैच का प्रकार, regex, टेम्प्लेट, Meta विज्ञापन, QR कोड, कस्टम इवेंट, इंटेंट और सेशन सेटिंग्स।
---

# चुनें कि फ़्लो कैसे शुरू हो { #choose-how-a-flow-starts }

हर फ़्लो **Flow Start** से शुरू होता है। यह ब्लॉक तय करता है कि ग्राहक का कौन-सा मैसेज बॉट को जगाएगा, और बॉट चलते समय कैसे बर्ताव करेगा। कीवर्ड सेट करने, शुरू करने के दूसरे तरीके जोड़ने, और टाइमआउट व उस जवाब को सेट करने के लिए यह पेज फ़ॉलो करें जो बॉट के न समझने पर जाता है।

## शुरू करने से पहले { #before-you-start }

- आपने बिल्डर में एक फ़्लो खोला है। देखें [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)।
- टेम्प्लेट से शुरू करने के लिए आपके पास एक approved टेम्प्लेट है। देखें [व्हाट्सऐप मैसेज टेम्प्लेट बनाएँ](create-message-template.md)।
- Meta विज्ञापन से शुरू करने के लिए आपने Click-to-WhatsApp विज्ञापन चलाया है। देखें [Click-to-WhatsApp विज्ञापन चलाएँ](click-to-whatsapp-ads.md)।

## फ़्लो कैसे शुरू हो सकता है { #how-a-flow-can-start }

खाली कैनवास पर **How does this flow start?** मेन्यू में ये विकल्प दिखते हैं।

| शुरुआत | क्या होता है |
| --- | --- |
| **Start WhatsApp flow** | कोई आपको कीवर्ड वाला मैसेज भेजता है। यह चैटबॉट की शुरुआत है। |
| **Form submitted** | आपकी साइट पर कोई फ़ॉर्म भरा जाता है। |
| **Run by hand** | आप इसे खुद शुरू करते हैं, जैसे **Run test** से। |
| **Email journey** | कोई लिस्ट में जुड़ता है या उसे टैग मिलता है। |
| **Google Form response** | कोई आपके Google Form का जवाब देता है। |
| **New Google contact** | Google Contacts में कोई संपर्क जुड़ता है। |
| **Start from a recipe** | कैनवास पर एक पूरा बना-बनाया फ़्लो खुल जाता है। |

यह पेज **Start WhatsApp flow** के बारे में है। बाकी शुरुआतों के लिए देखें [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)।

## चरण { #steps }

### कीवर्ड से फ़्लो शुरू करें { #start-a-flow-with-a-keyword }

1. बिल्डर में अपना फ़्लो खोलें।
2. खाली कैनवास पर **Add first step…** पर क्लिक करें।
3. **Start WhatsApp flow** चुनें। **Start a WhatsApp flow** विंडो खुल जाती है।
4. **Keywords** में वे शब्द लिखें जो बॉट को जगाएँगे, जैसे `hi, menu, order`। उन्हें कॉमा से अलग करें।
5. **Match when the message** खोलें और एक चुनें:
    - **Has the keyword as a word**: कीवर्ड मैसेज में पूरे शब्द के रूप में आता है। यह डिफ़ॉल्ट है।
    - **Contains the keyword**: कीवर्ड मैसेज में कहीं भी आता है।
    - **Is exactly the keyword**: मैसेज सिर्फ़ कीवर्ड है।
6. **Test on this number** में वह फ़ोन नंबर लिखें जिसे **Run test** पहला मैसेज भेजता है, जैसे `+91 98765 43210`।
7. **Session timeout (minutes)** में लिखें कि बॉट जवाब का कितना इंतज़ार करे, जैसे `20`। 1 मिनट से 7 दिन तक रखें।
8. **Start building** पर क्लिक करें। **Flow Start** कार्ड दिखता है और उसकी सेटिंग्स **Step** पैनल में खुलती हैं।

!!! warning "एक कीवर्ड सिर्फ़ एक बॉट शुरू कर सकता है"
    अगर कोई और बॉट पहले से कोई शब्द इस्तेमाल करता है, तो विंडो में `"hi" already starts "Welcome bot". Pick another word, or pause that bot.` दिखता है। शब्द बदलें या दूसरा फ़्लो रोक दें।

### Flow Start ब्लॉक सेट करें { #set-the-flow-start-block }

1. **Flow Start** कार्ड पर क्लिक करें। उसकी सेटिंग्स **Step** पैनल में खुलती हैं।
2. **Type, press enter to add keyword** के नीचे शब्द लिखें और **Enter** दबाएँ। हर कीवर्ड के लिए यही दोहराएँ।
3. कीवर्ड की जगह पैटर्न इस्तेमाल करने के लिए **Enter regex to match substring trigger. Enable toggle for case sensitive regex.** के बगल का टॉगल चालू करें।
4. **Enter Regex** में पैटर्न लिखें, जैसे `^(hi|hello)\b`।
5. **Add upto 1 template to begin flow** के नीचे **Choose Template** पर क्लिक करें और कोई approved टेम्प्लेट चुनें। जब ग्राहक उस टेम्प्लेट का जवाब देता है तब भी फ़्लो शुरू होता है।
6. **Add upto 20 Meta Ads to begin flow** के नीचे **Choose Facebook Ad** पर क्लिक करें और कोई विज्ञापन चुनें। जब ग्राहक उस विज्ञापन से मैसेज करता है तब भी फ़्लो शुरू होता है।

अगर सूचियाँ खाली हैं, तो पैनल में **No approved templates yet.** या **No Meta ads found. Connect an ad account and run an ad that opens a WhatsApp chat.** दिखता है।

!!! tip "विज्ञापन की चैट बॉट तक पहुँचाएँ"
    विज्ञापन से आई नई चैट, जब कोई **active** फ़्लो उससे मेल नहीं खाता, इनबॉक्स में **Requesting** में इंतज़ार करती है, और जिस चैट को किसी एजेंट ने अपने हाथ में ले लिया है (**Intervened**) उसका जवाब बॉट कभी नहीं देता। अपने विज्ञापनों से आए हर लीड का जवाब बॉट से दिलवाने के लिए फ़्लो पब्लिश करें और विज्ञापन **Add upto 20 Meta Ads to begin flow** के नीचे जोड़ें। विज्ञापन के आइसब्रेकर से फ़्लो शुरू करने के लिए आइसब्रेकर का सटीक टेक्स्ट कीवर्ड के रूप में जोड़ें: जब कोई उस पर टैप करता है, तो वही टेक्स्ट उसके मैसेज के रूप में आता है।

### ट्रिगर पैनल सेट करें { #set-the-trigger-panel }

ट्रिगर पैनल में शुरू करने के सभी विकल्प होते हैं। उसे खोलने के लिए **Flow trigger** स्टार्ट टाइल पर क्लिक करें।

1. **WhatsApp · what starts it** के नीचे **Keywords** और **Match when the message** जाँचें।
2. **Regex (optional)** में पैटर्न लिखें, जैसे `^(hi|hello)\b`।
3. अगर बड़े-छोटे अक्षर मायने रखते हैं तो **Case-sensitive regex** चालू करें।
4. हर नए संपर्क को, बिना कीवर्ड के भी, ग्रीट करने के लिए **Also start on a first message from a new contact** चालू करें।

### शुरू करने के और तरीके जोड़ें { #add-more-ways-to-start }

1. **More ways to start it** पर क्लिक करें। इस पर **Templates, Meta ads, QR campaigns, custom events** लिखा है।
2. **Templates that begin it** के नीचे **Choose a template** पर क्लिक करें और एक चुनें।
3. **Meta ads that begin it (up to 20)** के नीचे विज्ञापन जोड़ें।
4. **QR campaign** के नीचे **Choose QR campaign** पर क्लिक करें और एक चुनें।
5. नया QR कोड बनाने के लिए **+ New QR campaign** पर क्लिक करें। **Message the scan sends** में वह टेक्स्ट लिखें जो ग्राहक स्कैन के बाद भेजता है, जैसे `Menu please`। **Create** पर क्लिक करें।
6. **Custom events that begin it** के नीचे **Choose a custom event** पर क्लिक करें और एक चुनें। अगर कोई सूचीबद्ध नहीं है, तो पैनल में **No custom events are defined.** दिखता है। देखें [टैग, यूज़र एट्रिब्यूट और कस्टम इवेंट प्रबंधित करें](tags-attributes-and-events.md)।

### वाक्यांश से किसी चरण पर जाएँ { #jump-to-a-step-by-phrase }

इंटेंट, मैसेज के किसी वाक्यांश से मेल खाने पर ग्राहक को किसी चरण पर भेज देता है। इंतज़ार करने वाले चरण के जवाब देखने से पहले बॉट इंटेंट जाँचता है।

1. **Intents (jump by phrase)** खोलें। जब तक आप कोई इंटेंट नहीं जोड़ते, इसमें **No intents yet** दिखता है।
2. **+ Add intent** पर क्लिक करें।
3. नाम वाले बॉक्स में नाम लिखें, जैसे `Talk to a person`।
4. **Phrases** में शब्द लिखें, जैसे `agent, human, help`।
5. **Match when the message** खोलें और मैच का प्रकार चुनें।
6. **Jump to** खोलें और कोई चरण चुनें, या **Hand off to an agent**।
7. इंटेंट डिलीट करने के लिए **Remove intent** पर क्लिक करें।

### सेट करें कि बॉट कैसे चले { #set-how-the-bot-runs }

1. **Testing** के नीचे **Send test runs to (phone)** में अपना नंबर लिखें, जैसे `+91 98765 43210`। हाथ से चलाए गए फ़्लो में कोई संपर्क नहीं होता, इसलिए **Run test** इसी नंबर से चैट शुरू करता है।
2. **While the bot runs** के नीचे **Session timeout (minutes)** सेट करें। इतनी देर शांति रहने पर चैट बंद हो जाती है। डिफ़ॉल्ट 20 मिनट है। आप 1 मिनट से 7 दिन तक चुन सकते हैं।
3. **When the reply is not understood, say** में मैसेज लिखें, जैसे `Sorry, I didn't get that. Please choose an option.`
4. **Then** खोलें और चुनें कि आगे क्या हो:
    - **Ask again**
    - **Hand off to an agent**
    - **Start the flow over**
    - **End the conversation**
    - **Let the AI answer**
5. **After how many tries** में कोई संख्या लिखें, जैसे `3`।

!!! note "कुछ ट्रिगर सेटिंग्स अभी लाइव न हों"
    [VERIFY: whether intents, session timeout and the not-understood reply already run in live chats. The builder stores them with the flow.]

### सेव करें और टेस्ट करें { #save-and-test }

1. **Save** पर क्लिक करें।
2. **Test** पर क्लिक करें और कोई कीवर्ड भेजें। देखें [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md)।
3. **Publish** पर क्लिक करें।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| `"hi" already starts "…"` | कोई दूसरा फ़्लो यही कीवर्ड इस्तेमाल करता है। | कोई और शब्द चुनें, या दूसरा फ़्लो रोक दें। |
| बॉट कीवर्ड का जवाब नहीं देता | मैसेज **Match when the message** सेटिंग से मेल नहीं खाता। | **Contains the keyword** इस्तेमाल करें, या और कीवर्ड जोड़ें। |
| **No approved templates yet.** | किसी टेम्प्लेट का स्टेटस **Approved** नहीं है। | एक बनाएँ और सबमिट करें। देखें [व्हाट्सऐप मैसेज टेम्प्लेट बनाएँ](create-message-template.md)। |
| **No Meta ads found. Connect an ad account…** | कोई विज्ञापन अकाउंट कनेक्ट नहीं है, या कोई विज्ञापन व्हाट्सऐप चैट नहीं खोलता। | विज्ञापन अकाउंट कनेक्ट करें और Click-to-WhatsApp विज्ञापन चलाएँ। |
| चैट कुछ मिनट बाद रुक जाती है | **Session timeout (minutes)** कम है। | संख्या बढ़ाएँ। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [टेक्स्ट और लिस्ट ब्लॉक](chatbot-text-and-list-blocks.md)
- [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)
