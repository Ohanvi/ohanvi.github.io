---
title: Google Sheet से जवाब दें
description: Google Sheet की किसी रो की वैल्यू से WhatsApp पर जवाब दें, शीट में नई रो आने पर फ़्लो शुरू करें, या AI एजेंट को शीट पढ़ने दें।
---

# Google Sheet से जवाब दें { #answer-from-a-google-sheet }

`status 1042` जैसे सवाल का जवाब अपनी Google Sheet की मिलती हुई रो से दें। आख़िर में एक पब्लिश किया हुआ फ़्लो मैसेज से नंबर पकड़ता है, उसकी रो ढूँढता है, और रो का स्टेटस जवाब में भेजता है, या बताता है कि वह नहीं मिली।

## शुरू करने से पहले { #before-you-start }

- एक Google अकाउंट कनेक्ट हो और उसमें Google Sheets की अनुमति दी गई हो। देखें [Google Workspace कनेक्ट करें](../settings/connect-google-workspace.md)।
- टैब में हेडर रो हो, और एक कॉलम में वह वैल्यू हो जिसके बारे में लोग पूछते हैं, जैसे `Order Number`।
- आपका WhatsApp नंबर कनेक्ट हो, और आपके रोल के पास फ़्लो बनाने और बदलने का एक्सेस हो। देखें [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)।

## शीट इस्तेमाल करने के तीन तरीके { #three-ways-to-use-a-sheet }

| आप चाहते हैं | इस्तेमाल करें | कहाँ |
| --- | --- | --- |
| फ़्लो किसी रो से एक सवाल का जवाब दे | **Look up a row** स्टेप | **Add a step after** पैनल में **Apps** → **Google Sheets** |
| रो जुड़ने पर फ़्लो शुरू हो | ट्रिगर **A row is added to a Google Sheet, or is due today** | **What starts this flow?** → **Google** |
| AI एजेंट पूरी शीट से खुले सवालों के जवाब दे | **Google Sheet** नॉलेज सोर्स | **AI Hub** → **Knowledge Base** |

यह पेज तीनों के बारे में है। उदाहरण में पहला तरीका इस्तेमाल हुआ है।

## लुकअप रो कैसे ढूँढता है { #how-a-lookup-finds-the-row }

- यह वैल्यू को **Column to look in** के हर सेल से मिलाता है, कैपिटल अक्षर और स्पेस को नज़रअंदाज़ करके।
- अगर इससे कुछ न मिले, तो सिर्फ़ अक्षर और अंक मिलाता है। `dk 1042` से `DK-1042` मिल जाता है।
- **Also match cells that contain it** चालू होने पर वह सेल भी गिना जाता है जिसके अंदर वैल्यू हो। वैल्यू में 3 या ज़्यादा कैरेक्टर होने चाहिए।
- यह ज़्यादा से ज़्यादा 5 मिलती हुई रो लौटाता है। पहली मिली रो से `{{N.row}}` और `{{N.fields}}` भरते हैं।
- यह टैब को एक मिनट में ज़्यादा से ज़्यादा एक बार पढ़ता है। अभी बदला गया सेल दिखने में 1 मिनट तक लग सकता है।
- एक टैब में 10,000 रो तक हो सकती हैं।

## स्टेप { #steps }

### रेसिपी से शुरू करें { #start-from-the-recipe }

रेसिपी पूरा उदाहरण वाला फ़्लो आपके लिए बना देती है। स्टेप-दर-स्टेप बनाना हो, तो यह हिस्सा छोड़ दें।

1. एक फ़्लो बनाएँ। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md#create-the-flow-and-choose-a-trigger)।
2. खाली कैनवस पर **Add first step…** पर क्लिक करें, फिर **Start from a recipe** पर।
3. **Answer status from a Google Sheet** पर क्लिक करें। ट्रिगर और 4 स्टेप आ जाते हैं।
4. नीचे के हिस्सों में वह भरें जो रेसिपी खाली छोड़ती है: नंबर, स्प्रेडशीट, टैब और कॉलम।

### मैसेज से नंबर पकड़ें { #catch-the-number-in-the-message }

1. कैनवस की शुरुआत में ट्रिगर पर क्लिक करें, फिर **When this runs** पैनल के सबसे ऊपर वाले बॉक्स पर क्लिक करें। **What starts this flow?** विंडो खुलती है।
2. **WhatsApp** खोलें और **A WhatsApp message arrives** पर क्लिक करें। देखें [WhatsApp मैसेज से फ़्लो शुरू करें](start-a-flow-from-a-whatsapp-message.md)।
3. **Which WhatsApp number** में वह नंबर चुनें जिस पर लोग मैसेज करते हैं।
4. **Only when the text matches** चालू करें।
5. **Pattern** में `status\s+(?<item>\d+)` टाइप करें। ब्रैकेट वाले हिस्से का नाम `item` है। आगे के स्टेप इसे `{{trigger.match.item}}` के रूप में पढ़ते हैं।
6. **Test** पर क्लिक करें। **Texts to try (one per line)** में `status 1042` टाइप करें और देखें कि वह मैच होता है।
7. **Who it answers** में ग्राहकों के लिए **Customers only (not staff)** चुनें, या स्टाफ़ के लिए **Staff only (people in HR)**।

    [SCREENSHOT: When this runs पैनल, जिसमें पैटर्न status\s+(?<item>\d+) हो और Who it answers खुला हो]

पैटर्न के बारे में और जानने के लिए देखें [कंडीशन में टेक्स्ट रूल इस्तेमाल करें](use-text-rules-in-conditions.md)।

### रो ढूँढें { #look-up-the-row }

1. ट्रिगर के बाद **+** पर क्लिक करें। **Apps** तक स्क्रॉल करें, **Google Sheets** खोलें और **Look up a row** पर क्लिक करें।
2. **Google account** में **Default account** रहने दें, या वह अकाउंट चुनें जो शीट खोल सकता है।
3. **Which sheet** में **Another spreadsheet** रहने दें।
4. **Choose from Google Drive** पर क्लिक करें और स्प्रेडशीट चुनें। Ohanvi सिर्फ़ वही स्प्रेडशीट खोल सकता है जो आप इस तरह चुनते हैं।
5. **Load sheet tabs** पर क्लिक करें, फिर टैब के नाम पर क्लिक करें। इससे **Tab** भर जाता है।

    [SCREENSHOT: Look up a row स्टेप, जिसमें स्प्रेडशीट चुनी हो और Load sheet tabs के नीचे टैब के नाम दिख रहे हों]

6. **Column to look in** में कॉलम का हेडर टाइप करें, जैसे `Order Number`।
7. **Value to find** देखें। ट्रिगर में टेक्स्ट रूल होने पर इसमें पहले से `{{trigger.match.item}}` होता है।
8. ग्राहकों के लिए **Only this customer's rows** चालू करें। **Column with the customer's phone** में उस कॉलम का हेडर टाइप करें, जैसे `Customer Phone`। **Their phone** में `{{trigger.from}}` होता है।
9. **Test this step** पर क्लिक करें। देखें कि किसी असली नंबर के लिए `found` में `true` आता है। देखें [स्टेप टेस्ट करें और सैंपल डेटा पिन करें](test-a-step-and-pin-sample-data.md#test-one-step)।

**Only this customer's rows** चालू होने पर, जो व्यक्ति किसी दूसरे ग्राहक का नंबर टाइप करता है, उसे कुछ नहीं मिलता। उसे मिलते-जुलते नंबर भी नहीं सुझाए जाते।

### रो से जवाब दें { #reply-with-the-row }

1. लुकअप स्टेप के बाद **+** पर क्लिक करें। **Search** में `paths` टाइप करें और **Split into paths** पर क्लिक करें।
2. **Add two paths** पर क्लिक करें। पहले पाथ का रूल `{{1.found}}` **is** `true` रखें। **If nothing matches, take** में दूसरा पाथ चुनें।
3. पहले पाथ पर **WhatsApp** → **Send message** जोड़ें।
4. **Send to** में `{{trigger.from}}` टाइप करें। **Message** में `Order {{trigger.match.item}}: {{1.fields.status}}` टाइप करें। `status` की जगह अपने कॉलम का नाम लिखें, छोटे अक्षरों में और स्पेस की जगह `_` के साथ।
5. **Send from** के बगल में **Change** पर क्लिक करें और **Same number the message arrived on** चुनें।
6. दूसरे पाथ पर एक और **Send message** जोड़ें, जिसमें `Couldn't find {{trigger.match.item}}. Please check the number and try again.` हो।
7. **Save** पर क्लिक करें, फिर **Publish** पर क्लिक करें।
8. किसी फ़ोन से `status` के बाद शीट का कोई असली नंबर भेजें। जवाब में उसका स्टेटस आता है।

    [SCREENSHOT: कैनवस पर तैयार फ़्लो, जिसमें लुकअप, दोनों पाथ और दोनों Send message स्टेप दिख रहे हों]

### शीट में नई रो आने पर फ़्लो शुरू करें { #start-a-flow-from-a-new-sheet-row }

किसी रो के जुड़ने पर किसी को मैसेज भेजने के लिए इसका इस्तेमाल करें, जैसे नई बुकिंग की पुष्टि करने के लिए।

1. ट्रिगर पर क्लिक करें, फिर **When this runs** पैनल के सबसे ऊपर वाले बॉक्स पर।
2. **What starts this flow?** में **Google** खोलें और **A row is added to a Google Sheet, or is due today** पर क्लिक करें।
3. **Google account that can open the sheet** चुनें, फिर **Choose from Google Drive** पर क्लिक करके स्प्रेडशीट चुनें।
4. **Load sheet tabs** पर क्लिक करें और **Tab** चुनें।
5. **When does a row start the flow** में **Each new row, once** चुनें।
6. **Column that is different on every row** में ऐसा कॉलम चुनें, जैसे ऑर्डर नंबर।
7. चाहें तो **Send a row only when these are filled** में वे कॉलम चुनें जिनमें वैल्यू होनी ज़रूरी है। अगर आगे के स्टेप उस नंबर पर मैसेज भेजते हैं, तो **Phone number column** चुनें।
8. **Use this sheet** पर क्लिक करें। **First rows** दिखाता है कि पहली रो के साथ क्या होगा, और **Values later steps can use** में फ़ील्ड की लिस्ट आती है।
9. **Save** पर क्लिक करें, फिर **Publish** पर क्लिक करें।

Ohanvi हर 5 मिनट में टैब चेक करता है। हर पूरी रो फ़्लो को एक बार शुरू करती है। जिस रो में कोई ज़रूरी सेल ख़ाली है, वह उसके भरने तक रुकी रहती है। जिस रो से फ़्लो एक बार शुरू हो चुका है, उसे बदलने पर फ़्लो दोबारा शुरू नहीं होता। शीट में पहले से मौजूद रो से कुछ शुरू नहीं होता, जब तक आप **Also send rows already in the sheet** चालू न करें।

आगे के स्टेप किसी सेल को `{{trigger.fields.order_number}}` के रूप में पढ़ते हैं: हेडर छोटे अक्षरों में, स्पेस की जगह `_`। एक शब्द वाले हेडर के लिए `{{trigger.row.Status}}` भी काम करता है।

### AI एजेंट को शीट से जवाब देने दें { #let-an-ai-agent-answer-from-the-sheet }

इसका इस्तेमाल तब करें जब लोग अपने शब्दों में पूछते हैं और कोई तय पैटर्न उसे नहीं पकड़ पाता।

1. **AI Hub** → **Knowledge Base** खोलें और **New source** पर क्लिक करें।
2. **Source type** में **Google Sheet** चुनें। **Name** टाइप करें।
3. **Google account** चुनें, फिर **Choose from Google Drive** पर क्लिक करके स्प्रेडशीट चुनें। हर टैब पढ़ा जाता है, कुल 10,000 रो तक।
4. **Check for changes** में चुनें कि उसे कितनी बार दोबारा पढ़ना है, जैसे **Every 15 min**।
5. चाहें तो हर टैब के लिए **Key column** चुनें, जैसे ऑर्डर नंबर। इसके बिना रो उनके नंबर से पहचानी जाती हैं।
6. **Save source** पर क्लिक करें। शीट बैकग्राउंड में पढ़ी जाती है और उसका स्टेटस अपने आप अपडेट होता है।
7. **AI Agents** में एजेंट खोलें और **Knowledge it answers from** में यह सोर्स चुनें। [VERIFY: एजेंट एडिटर में Knowledge it answers from कहाँ है]

इसके बाद एजेंट जवाब देते समय शीट पढ़ता है। हर जाँच पर सिर्फ़ बदली हुई रो दोबारा पढ़ी जाती हैं।

## Look up a row के आउटपुट { #look-up-a-row-outputs }

`N` कैनवस पर स्टेप का नंबर है।

| आउटपुट | इसमें क्या होता है |
| --- | --- |
| `{{N.found}}` | कम से कम एक रो मिलने पर `true` |
| `{{N.count}}` | कितनी रो मिलीं |
| `{{N.fields.status}}` | पहली मिली रो का एक सेल, कॉलम के नाम से, छोटे अक्षरों में और स्पेस की जगह `_` के साथ |
| `{{N.row.Status}}` | वही सेल, हेडर के ठीक उसी नाम से। एक शब्द वाले हेडर के लिए इस्तेमाल करें। |
| `{{N.rowNumber}}` | शीट में पहली मिली रो का नंबर |
| `{{N.rows}}` | 5 तक मिली रो, हर एक के अपने `row`, `fields` और `rowNumber` के साथ |
| `{{N.headers}}` | टैब के कॉलम के नाम |
| `{{N.suggestions}}` | कुछ न मिलने पर मिलती-जुलती वैल्यू। **Only this customer's rows** चालू होने पर ख़ाली। |

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **The tab '…' has no column '…'. Its columns: …** | **Column to look in** किसी हेडर से मेल नहीं खाता। | मैसेज की लिस्ट से कोई हेडर कॉपी करके फ़ील्ड में डालें। |
| **The tab '…' is not in this spreadsheet — it was renamed or deleted. Choose the tab again in this step.** | टैब का नाम बदला गया या उसे हटा दिया गया। | **Load sheet tabs** पर क्लिक करें और टैब दोबारा चुनें। |
| **The tab '…' is empty — it needs a header row (column names) first.** | टैब की पहली रो ख़ाली है। | पहली रो में कॉलम के नाम टाइप करें। |
| **The tab '…' has more than 10000 rows. Move old rows to another tab.** | टैब सीमा से बड़ा है। | पुरानी रो किसी दूसरे टैब में ले जाएँ। |
| **Choose the column with the customer's phone** और फ़्लो पब्लिश नहीं होता | **Only this customer's rows** चालू है, पर फ़ोन वाला कॉलम नहीं दिया। | **Column with the customer's phone** भरें, या स्विच बंद करें। |
| जवाब में पुरानी वैल्यू आती है | टैब एक मिनट में ज़्यादा से ज़्यादा एक बार पढ़ा जाता है। | एक मिनट रुकें और दोबारा पूछें। |

## संबंधित गाइड { #related }

- [Google Workspace कनेक्ट करें](../settings/connect-google-workspace.md)
- [WhatsApp मैसेज से फ़्लो शुरू करें](start-a-flow-from-a-whatsapp-message.md)
- [कंडीशन में टेक्स्ट रूल इस्तेमाल करें](use-text-rules-in-conditions.md)
- [फ़्लो में Tasks और HR के स्टेप इस्तेमाल करें](use-tasks-and-hr-steps-in-flows.md)
- [स्टेप टेस्ट करें और सैंपल डेटा पिन करें](test-a-step-and-pin-sample-data.md)
