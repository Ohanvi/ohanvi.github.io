---
title: चुनें कि फ़्लो कैसे शुरू हो
description: चैटबॉट का Flow Start ब्लॉक सेट करें: कीवर्ड, मैच का तरीका, regex, टेम्प्लेट, Meta विज्ञापन, QR कोड, कस्टम इवेंट, इंटेंट और सेशन सेटिंग्स।
---

# चुनें कि फ़्लो कैसे शुरू हो { #choose-how-a-flow-starts }

हर फ़्लो **Flow Start** से शुरू होता है। यह ब्लॉक तय करता है कि ग्राहक का कौन-सा मैसेज बॉट को चालू करेगा। यह भी तय करता है कि बॉट चलते समय कैसे काम करेगा। इस पेज में कीवर्ड सेट करना सीखें। साथ में फ़्लो शुरू करने के दूसरे तरीके जोड़ें, टाइमआउट सेट करें और वह जवाब लिखें जो बॉट के बात न समझने पर जाता है।

## शुरू करने से पहले { #before-you-start }

- बिल्डर में कोई फ़्लो खोल लें। देखें [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)।
- टेम्प्लेट से फ़्लो शुरू करना हो, तो आपके पास approved टेम्प्लेट होना चाहिए। देखें [WhatsApp मैसेज टेम्प्लेट बनाएँ](create-message-template.md)।
- Meta विज्ञापन से फ़्लो शुरू करना हो, तो आपने Click-to-WhatsApp विज्ञापन चलाया होना चाहिए। देखें [Click-to-WhatsApp विज्ञापन चलाएँ](click-to-whatsapp-ads.md)।

## फ़्लो कैसे शुरू हो सकता है { #how-a-flow-can-start }

खाली कैनवास पर **How does this flow start?** मेन्यू में ये विकल्प दिखते हैं।

| शुरुआत | क्या होता है |
| --- | --- |
| **Start WhatsApp flow** | कोई आपको कीवर्ड वाला मैसेज भेजता है। चैटबॉट इसी से शुरू होता है। |
| **Form submitted** | आपकी साइट पर कोई फ़ॉर्म भरता है। |
| **Run by hand** | आप इसे खुद शुरू करते हैं, जैसे **Run test** से। |
| **Email journey** | कोई लिस्ट में जुड़ता है या उस पर टैग लगता है। |
| **Google Form response** | कोई आपके Google Form का जवाब भरता है। |
| **New Google contact** | Google Contacts में कोई कॉन्टैक्ट जुड़ता है। |
| **Start from a recipe** | कैनवास पर पहले से बना पूरा फ़्लो खुल जाता है। |

यह पेज **Start WhatsApp flow** के बारे में है। बाकी शुरुआतों के लिए देखें [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)।

## स्टेप { #steps }

### कीवर्ड से फ़्लो शुरू करें { #start-a-flow-with-a-keyword }

1. बिल्डर में अपना फ़्लो खोलें।
2. खाली कैनवास पर **Add first step…** पर क्लिक करें।
3. **Start WhatsApp flow** चुनें। **Start a WhatsApp flow** विंडो खुलेगी।
4. **Keywords** में वे शब्द लिखें जिन पर बॉट चालू होगा, जैसे `hi, menu, order`। शब्दों को कॉमा से अलग करें।
5. **Match when the message** खोलें और एक विकल्प चुनें:
    - **Has the keyword as a word**: कीवर्ड मैसेज में पूरे शब्द की तरह आए। यह पहले से चुना होता है।
    - **Contains the keyword**: कीवर्ड मैसेज में कहीं भी आए।
    - **Is exactly the keyword**: मैसेज में सिर्फ़ कीवर्ड हो।
6. **Test on this number** में वह फ़ोन नंबर लिखें जिस पर **Run test** पहला मैसेज भेजेगा, जैसे `+91 98765 43210`।
7. **Session timeout (minutes)** में लिखें कि बॉट जवाब के लिए कितनी देर रुके, जैसे `20`। यह 1 मिनट से 7 दिन के बीच रखें।
8. **Start building** पर क्लिक करें। **Flow Start** कार्ड दिखेगा और उसकी सेटिंग्स **Step** पैनल में खुलेंगी।

!!! warning "एक कीवर्ड सिर्फ़ एक बॉट शुरू कर सकता है"
    कोई दूसरा बॉट वही शब्द पहले से इस्तेमाल कर रहा हो, तो विंडो में `"hi" already starts "Welcome bot". Pick another word, or pause that bot.` दिखता है। शब्द बदल दें या दूसरा फ़्लो रोक दें।

### Flow Start ब्लॉक सेट करें { #set-the-flow-start-block }

1. **Flow Start** कार्ड पर क्लिक करें। उसकी सेटिंग्स **Step** पैनल में खुलेंगी।
2. **Type, press enter to add keyword** के नीचे एक शब्द लिखें और **Enter** दबाएँ। हर कीवर्ड के लिए यही करें।
3. कीवर्ड की जगह पैटर्न इस्तेमाल करना हो, तो **Enter regex to match substring trigger. Enable toggle for case sensitive regex.** के पास वाला टॉगल चालू करें।
4. **Enter Regex** में पैटर्न लिखें, जैसे `^(hi|hello)\b`।
5. **Add upto 1 template to begin flow** के नीचे **Choose Template** पर क्लिक करें और कोई approved टेम्प्लेट चुनें। ग्राहक उस टेम्प्लेट का जवाब दे, तब भी फ़्लो शुरू हो जाता है।
6. **Add upto 20 Meta Ads to begin flow** के नीचे **Choose Facebook Ad** पर क्लिक करें और कोई विज्ञापन चुनें। ग्राहक उस विज्ञापन से मैसेज करे, तब भी फ़्लो शुरू हो जाता है।

लिस्ट खाली हो, तो पैनल में **No approved templates yet.** या **No Meta ads found. Connect an ad account and run an ad that opens a WhatsApp chat.** लिखा आता है।

!!! tip "विज्ञापन की चैट बॉट तक पहुँचाएँ"
    विज्ञापन से आई नई चैट इनबॉक्स में **Requesting** में रुकी रहती है, अगर उससे मेल खाने वाला कोई **active** फ़्लो न हो। जिस चैट को एजेंट ने अपने हाथ में ले लिया है (**Intervened**), उसका जवाब बॉट कभी नहीं देता। अपने विज्ञापनों से आए हर लीड का जवाब बॉट से दिलवाना हो, तो फ़्लो पब्लिश करें और विज्ञापन **Add upto 20 Meta Ads to begin flow** के नीचे जोड़ें। विज्ञापन के आइसब्रेकर से फ़्लो शुरू करना हो, तो आइसब्रेकर का हूबहू टेक्स्ट कीवर्ड बना दें। कोई उस पर टैप करता है, तो वही टेक्स्ट उसके मैसेज के रूप में आता है।

### ट्रिगर पैनल सेट करें { #set-the-trigger-panel }

ट्रिगर पैनल में फ़्लो शुरू करने के सारे विकल्प होते हैं। इसे खोलने के लिए **Flow trigger** स्टार्ट टाइल पर क्लिक करें।

1. **WhatsApp · what starts it** के नीचे **Keywords** और **Match when the message** देख लें।
2. **Regex (optional)** में पैटर्न लिखें, जैसे `^(hi|hello)\b`।
3. बड़े-छोटे अक्षरों का फ़र्क पड़ता हो, तो **Case-sensitive regex** चालू करें।
4. हर नए कॉन्टैक्ट को, बिना कीवर्ड के भी, ग्रीट करना हो तो **Also start on a first message from a new contact** चालू करें।

### फ़्लो शुरू करने के और तरीके जोड़ें { #add-more-ways-to-start }

1. **More ways to start it** पर क्लिक करें। उस पर **Templates, Meta ads, QR campaigns, custom events** लिखा है।
2. **Templates that begin it** के नीचे **Choose a template** पर क्लिक करें और एक चुनें।
3. **Meta ads that begin it (up to 20)** के नीचे विज्ञापन जोड़ें।
4. **QR campaign** के नीचे **Choose QR campaign** पर क्लिक करें और एक चुनें।
5. नया QR कोड बनाना हो तो **+ New QR campaign** पर क्लिक करें। **Message the scan sends** में वह टेक्स्ट लिखें जो ग्राहक स्कैन करने के बाद भेजेगा, जैसे `Menu please`। फिर **Create** पर क्लिक करें।
6. **Custom events that begin it** के नीचे **Choose a custom event** पर क्लिक करें और एक चुनें। कोई इवेंट न हो, तो पैनल में **No custom events are defined.** लिखा आता है। देखें [टैग, यूज़र एट्रिब्यूट और कस्टम इवेंट मैनेज करें](tags-attributes-and-events.md)।

### शब्दों से किसी स्टेप पर भेजें { #jump-to-a-step-by-phrase }

इंटेंट में आप कुछ शब्द तय करते हैं। ग्राहक का मैसेज उन शब्दों से मेल खाए, तो इंटेंट उसे सीधे किसी स्टेप पर भेज देता है। जवाब का इंतज़ार करने वाला स्टेप मैसेज देखे, उससे पहले बॉट इंटेंट जाँचता है।

1. **Intents (jump by phrase)** खोलें। जब तक आप कोई इंटेंट नहीं जोड़ते, इसमें **No intents yet** दिखता है।
2. **+ Add intent** पर क्लिक करें।
3. नाम वाले बॉक्स में नाम लिखें, जैसे `Talk to a person`।
4. **Phrases** में शब्द लिखें, जैसे `agent, human, help`।
5. **Match when the message** खोलें और मैच का तरीका चुनें।
6. **Jump to** खोलें और कोई स्टेप चुनें, या **Hand off to an agent** चुनें।
7. इंटेंट डिलीट करना हो तो **Remove intent** पर क्लिक करें।

### तय करें कि बॉट कैसे चले { #set-how-the-bot-runs }

1. **Testing** के नीचे **Send test runs to (phone)** में अपना नंबर लिखें, जैसे `+91 98765 43210`। हाथ से चलाए गए फ़्लो में कोई कॉन्टैक्ट नहीं होता। इसलिए **Run test** इसी नंबर पर चैट शुरू करता है।
2. **While the bot runs** के नीचे **Session timeout (minutes)** सेट करें। चैट में इतनी देर कोई मैसेज न आए, तो चैट बंद हो जाती है। पहले से 20 मिनट चुने होते हैं। आप 1 मिनट से 7 दिन के बीच कुछ भी चुन सकते हैं।
3. **When the reply is not understood, say** में मैसेज लिखें, जैसे `Sorry, I didn't get that. Please choose an option.`
4. **Then** खोलें और चुनें कि आगे क्या हो:
    - **Ask again**
    - **Hand off to an agent**
    - **Start the flow over**
    - **End the conversation**
    - **Let the AI answer**
5. **After how many tries** में एक नंबर लिखें, जैसे `3`।

!!! note "कुछ ट्रिगर सेटिंग्स अभी लाइव न हों"
    [VERIFY: whether intents, session timeout and the not-understood reply already run in live chats. The builder stores them with the flow.]

### सेव करें और टेस्ट करें { #save-and-test }

1. **Save** पर क्लिक करें।
2. **Test** पर क्लिक करें और कोई कीवर्ड भेजें। देखें [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md)।
3. **Publish** पर क्लिक करें।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| `"hi" already starts "…"` | कोई दूसरा फ़्लो यही कीवर्ड इस्तेमाल कर रहा है। | कोई और शब्द चुनें, या दूसरा फ़्लो रोक दें। |
| बॉट कीवर्ड का जवाब नहीं देता | मैसेज **Match when the message** की सेटिंग से मेल नहीं खाता। | **Contains the keyword** चुनें, या और कीवर्ड जोड़ें। |
| **No approved templates yet.** | किसी भी टेम्प्लेट का स्टेटस **Approved** नहीं है। | एक टेम्प्लेट बनाकर सबमिट करें। देखें [WhatsApp मैसेज टेम्प्लेट बनाएँ](create-message-template.md)। |
| **No Meta ads found. Connect an ad account…** | कोई विज्ञापन अकाउंट कनेक्ट नहीं है, या कोई भी विज्ञापन WhatsApp चैट नहीं खोलता। | विज्ञापन अकाउंट कनेक्ट करें और Click-to-WhatsApp विज्ञापन चलाएँ। |
| चैट कुछ मिनट बाद रुक जाती है | **Session timeout (minutes)** कम रखा है। | नंबर बढ़ा दें। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [टेक्स्ट और लिस्ट ब्लॉक](chatbot-text-and-list-blocks.md)
- [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)
