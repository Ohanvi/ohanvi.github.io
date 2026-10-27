---
title: अपने विज्ञापन ऑटोमेट करें
description: ऐसे नियम बनाएँ जो आपके कैंपेन, ऐड सेट और विज्ञापनों को रोकें, चालू करें या उनका बजट बदलें, उन्हें Preview में टेस्ट करें, और पढ़ें कि उन्होंने क्या किया।
---

# अपने विज्ञापन ऑटोमेट करें { #automate-your-ads }

**Automation** में एक नियम बनाएँ जो हर 30 मिनट में आपके विज्ञापन जाँचता है और शर्तें मेल खाने पर कार्रवाई करता है। अंत में आपका नियम **Preview** में चल चुका होता है, आपने पढ़ लिया होता है कि वह क्या करेगा, और आप लाइव हो चुके होते हैं या AI बिडिंग से बजट चला रहे होते हैं।

## शुरू करने से पहले { #before-you-start }

- आपका Facebook अकाउंट, पेज और ऐड अकाउंट **Setup** में कनेक्ट हों। देखें [Ads Manager सेट करें](set-up-ads-manager.md)।
- आपके ऐड अकाउंट में कम से कम 1 कैंपेन, ऐड सेट या विज्ञापन हो।
- **WhatsApp** पैनल में आपको **Ads Manager** दिखता हो। न दिखे तो अपने एडमिन से कहें।

## नियम क्या होता है { #what-a-rule-is }

नियम एक वाक्य होता है: **If** कुछ शर्तें सही हैं, **then** एक कार्रवाई करो। जैसे: अगर किसी ऐड सेट ने आज तय राशि से ज़्यादा खर्च किया और 1 से कम नतीजा मिला, तो उसे रोक दो।

- नियम हर 30 मिनट में जाँच करता है। सेव किया हुआ नियम एडिटर के नीचे **Checked every 30 minutes.** दिखाता है।
- हर नया नियम **Preview** में शुरू होता है। वह लिखता है कि क्या करेगा, और Meta पर कुछ नहीं बदलता।
- जब आप **live** जाते हैं, तो नियम सचमुच Meta पर आपके विज्ञापन बदलता है। हर बदलाव **Activity log** में दर्ज होता है।

!!! warning "चेतावनी"
    लाइव नियम आपसे पूछे बिना विज्ञापन रोकता है और बजट बदलता है। **Go live** पर क्लिक करने से पहले नियम को **Preview** में चलाएँ और **Activity log** पढ़ें।

## Automation के टैब { #the-automation-tabs }

**Ads Manager** के बाएँ कॉलम में **Automation** चुनें। इसमें 4 टैब हैं।

| टैब | इसमें क्या दिखता है |
| --- | --- |
| **Overview** | नियमों ने क्या किया इसकी गिनती, रोज़ का चार्ट और **Recent activity**। |
| **Rules** | हर नियम का एक कार्ड, उसके मोड और स्विच के साथ। |
| **AI Bidding** | कॉस्ट-पर-रिज़ल्ट या ROAS टारगेट की ओर बजट चलाना। देखें [AI बिडिंग से बजट चलाएँ](#steer-budgets-with-ai-bidding)। |
| **Activity log** | नियम की की हुई हर कार्रवाई, या **Preview** में जो वह करता। |

ऊपर के बार में **New rule**, **Run now** और **Refresh** हैं।

## चरण { #steps }

### तैयार रणनीति से नियम बनाएँ { #create-a-rule-from-a-ready-made-tactic }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Ads Manager** चुनें।
2. बाएँ कॉलम में **Automation** चुनें।

    ![Overview, Rules, AI Bidding और Activity log, New rule और Run now बटन, और नतीजों के चार्ट के साथ Automation टैब](../../assets/screenshots/whatsapp-ads-automation-1-overview.png)

3. **New rule** पर क्लिक करें। **New rule** विंडो खुलती है।
4. **Tactics** या **Strategies** के नीचे कोई कार्ड चुनें, या **Start from scratch** पर क्लिक करें।

    

5. एडिटर में कोई भी संख्या बदलें। हेडर में लिखा होता है **From "[card name]" — change any number you like.**
6. **Create rule** पर क्लिक करें। संदेश **Rule created in Preview. It logs what it would do — go live when you are happy.** दिखता है।

!!! note "शुरुआती संख्याएँ"
    हर कार्ड खर्च, कॉस्ट-पर-रिज़ल्ट और नतीजों की शुरुआती संख्याओं के साथ आता है। सेव करने से पहले उन्हें अपने बजट से मिलाकर देखें। [VERIFY: starting amounts are in the currency of your ad account]

तैयार कार्ड ये हैं:

| कार्ड | लेवल | क्या करता है |
| --- | --- | --- |
| **Stop Loss** | Ad set level, Ad level | जिसने आज बिना नतीजे के खर्च किया उसे रोकता है, और रीसेट के समय पर वापस चालू कर देता है। |
| **SURF** | Ad set level, Campaign level | जिसका दिन सस्ता जा रहा है उसका बजट आपकी अधिकतम सीमा तक बढ़ाता है, और रीसेट के समय पर वापस रख देता है। |
| **Sunsetting** | Ad set level | ऐड सेट जितने दिन महँगा चलता रहता है, हर दिन उसका बजट घटाता है, आपकी न्यूनतम सीमा से नीचे कभी नहीं। |
| **Revive** | Ad set level, Ad level | रुके हुए को वापस चालू करता है जब उसके हाल के आँकड़े दिखाते हैं कि वह काम कर रहा था। |
| **Scale winning campaigns** | Campaign level | जो कैंपेन एक हफ़्ते सस्ते रहे उनमें हर दिन एक कदम बजट जोड़ता है, आपकी अधिकतम सीमा तक। |
| **Scale winning ad sets** | Ad set level | यही, ऐड सेट के लिए। |
| **Downscale losing campaigns** | Campaign level | जो कैंपेन हफ़्ते भर महँगे चले उनका बजट घटाता है, आपकी न्यूनतम सीमा से नीचे कभी नहीं। |
| **Downscale losing ad sets** | Ad set level | यही, ऐड सेट के लिए। |
| **Stop Loss for expensive ads with no clicks** | Ad level | जिन विज्ञापनों पर एक भी क्लिक के बिना खर्च हो रहा है, उन्हें आज के लिए बंद कर देता है। |
| **Pause losing ads for today** | Ad level | जो विज्ञापन आज महँगे हैं उन्हें रोकता है और रीसेट के समय पर वापस चालू कर देता है। |
| **Pause losing ads permanently** | Ad level | जो विज्ञापन तीन दिन महँगे रहे उन्हें रोकता है। अगर देर से आए नतीजे दिखाएँ कि वे ठीक थे, तो उन्हें वापस चालू कर देता है। |

### नियम का नाम रखें और चुनें कि वह किस पर काम करे { #name-the-rule-and-choose-what-it-works-on }

1. **New rule** एडिटर में **Rule name** लिखें, जैसे "Stop loss — ad sets"। 120 अक्षरों तक इस्तेमाल करें।
2. **Works on** के नीचे **Campaigns**, **Ad sets** या **Ads** चुनें। इसे बदलने पर आपके चुने हुए एसेट साफ़ हो जाते हैं।

!!! note "ध्यान दें"
    **Ads** के लिए बजट वाली कार्रवाइयाँ नहीं मिलतीं। एडिटर दिखाता है **Ads have no budget of their own.** बजट के लिए ऐड सेट या कैंपेन लेवल इस्तेमाल करें।

### शर्तें जोड़ें { #add-the-conditions }

1. **If … of these are true** के नीचे **all** या **any** चुनें। **all** का मतलब है हर शर्त मेल खानी चाहिए। **any** का मतलब है 1 काफ़ी है।
2. शर्त में एक **Metric** चुनें। सूची नीचे है।
3. एक **Period** चुनें। सूची नीचे है।
4. **Is** चुनें: **is more than**, **is at least**, **is less than** या **is at most**।
5. **Compared with** चुनें: **a fixed value**, **% of account average** या **% of its previous period**।
6. **Value** लिखें। % वाली तुलना के लिए 0 से ऊपर का **Percent** लिखें, जैसे 130।
7. दूसरी शर्त के लिए **Add condition** पर क्लिक करें।

एक नियम में ज़्यादा से ज़्यादा 6 शर्तें हो सकती हैं।

इस्तेमाल हो सकने वाले **Metrics**: **Spend**, **Impressions**, **Link clicks**, **CTR (link, %)**, **Cost per link click**, **CPM**, **Frequency**, **Results**, **Cost per result**, **Conversations**, **Leads**, **Purchases**, **Revenue**, **ROAS** और **Daily budget**।

इस्तेमाल हो सकने वाले **Periods**: **Today**, **Yesterday**, **Last 3 days** और **Last 7 days**।

### कार्रवाई चुनें { #choose-the-action }

1. **Then** के नीचे एक **Action** चुनें। सूची नीचे है।
2. बजट वाली कार्रवाई के लिए **By** में 1 से 100 के बीच प्रतिशत भरें, या **New daily budget** में राशि भरें।
3. **Max daily budget** भरें। बजट कभी इससे ऊपर नहीं बढ़ाया जाता। **Increase budget by %** के लिए यह ज़रूरी है।
4. **Min daily budget** भरें। बजट कभी इससे नीचे नहीं घटाया जाता। घटाने वाले कार्ड के लिए यह ज़रूरी है।

| कार्रवाई | क्या करती है |
| --- | --- |
| **Pause** | आइटम को रोकती है। |
| **Turn on** | आइटम को चालू करती है। |
| **Increase budget by %** | रोज़ का बजट बढ़ाती है। **Max daily budget** चाहिए। |
| **Decrease budget by %** | रोज़ का बजट घटाती है। |
| **Set daily budget** | नया रोज़ का बजट सेट करती है। |
| **Notify me** | सिर्फ़ आपको अलर्ट भेजती है। Meta पर कुछ नहीं बदलती। |

### तय करें कि नियम कब और कितनी बार काम करे { #set-when-and-how-often-the-rule-acts }

1. बेल नोटिफ़िकेशन, पुश और ईमेल पाने के लिए **Notify me when it acts** चालू करें। हर जाँच पर एक सारांश मिलता है, और तभी जब नियम लाइव हो।
2. **Wait between actions (hours)** भरें। 1 घंटे से 30 दिन के बीच का मान इस्तेमाल करें। खाली छोड़ने पर बजट वाली कार्रवाइयों के लिए 4 घंटे और बाकी के लिए 24 घंटे माने जाते हैं।
3. रुके हुए आइटम को उस समय वापस चालू करने, या बजट वापस रखने के लिए **Reset at (HH:mm)** भरें। खाली छोड़ने पर बदलाव बना रहता है।
4. **Turn it back on if late results show it was fine** चालू करें। इसे बिना रीसेट समय वाले रोकने के लिए इस्तेमाल करें। Meta कुछ नतीजे एक-दो दिन देर से बताता है।
5. **Keep checking for** चुनें: **1 day**, **2 days**, **3 days**, **5 days** या **7 days**।
6. **When it runs** के नीचे **Mon** से **Sun** तक के दिन चिप चुनें। कोई दिन न चुनने पर हर दिन माना जाता है।
7. नियम किन घंटों में काम कर सकता है यह सीमित करने के लिए **From (HH:mm)** और **To (HH:mm)** भरें। दोनों भरें या दोनों खाली रखें। खाली छोड़ने पर पूरा दिन माना जाता है।
8. **Timezone** चुनें: **Account default (India)** या सूची में से कोई ज़ोन। यही **Reset at** के लिए भी इस्तेमाल होता है।

### चुनें कि नियम किन आइटम पर लागू हो { #choose-which-items-the-rule-covers }

1. **Apply to** के नीचे **All [ad sets]** या **Only the [ad sets] I pick** चुनें। शब्द आपके **Works on** के चुनाव के हिसाब से बदलते हैं।
2. अगर आपने **Only the … I pick** चुना है, तो आइटम पर टिक करें।
3. अगर आपने **All** चुना है, तो जिन आइटम को नियम को छोड़ देना है उन्हें चुनने के लिए **Skip some [ad sets]** इस्तेमाल करें।
4. **Create rule** पर क्लिक करें। नया नियम **Preview** में शुरू होता है। नियम एडिट करते समय **Save changes** पर क्लिक करें।

### Overview टैब पढ़ें { #read-the-overview-tab }

1. **Overview** टैब चुनें।
2. सारांश की लाइन पढ़ें, जैसे **3 rules · 1 live · checked every 30 minutes**।
3. रेंज चुनें: **Last 7 days**, **Last 14 days** या **Last 30 days**।
4. टाइल पढ़ें: **Turned on**, **Paused**, **Budget raised** और **Budget lowered**।
5. टाइल के नीचे की धूसर लाइन पढ़ें। उसमें दिखता है कि कितनी प्रीव्यू कार्रवाइयाँ लागू नहीं हुईं और कितनी फ़ेल हुईं।
6. रोज़ का चार्ट पढ़ें, फिर **Recent activity**।
7. **Activity log** खोलने के लिए **See all** पर क्लिक करें।

अगर आपके पास कोई नियम नहीं है, तो टैब **Put your ads on autopilot** दिखाता है। **Create your first rule** पर क्लिक करें।

### अपने नियम प्रबंधित करें { #manage-your-rules }

1. **Rules** टैब चुनें। हर नियम एक कार्ड है, जिसमें उसका नाम, **Live** या **Preview** बैज, उसका लेवल और एक सारांश होता है।
2. धूसर लाइन पढ़ें: 48 घंटे की कार्रवाइयाँ, 7 दिन की कार्रवाइयाँ, **last checked**, और बनाने वाला।
3. नियम को चालू या बंद करने के लिए कार्ड पर स्विच इस्तेमाल करें। बंद होने पर बैज **Off** दिखता है।
4. कार्ड पर **More** मेन्यू खोलें।
5. एडिटर खोलने के लिए **Edit** पर क्लिक करें। बदलाव **Save changes** से सेव करें।
6. नियम को असली बनाने के लिए **Go live** पर क्लिक करें। एक विंडो पूछती है **Turn "[name]" live?**
7. लाइव नियम पर **Back to preview** पर क्लिक करें। नियम फिर सिर्फ़ लॉग करता है।
8. इस नियम को अभी जाँचने के लिए **Run now** पर क्लिक करें।
9. इस नियम का **Activity log** खोलने के लिए **See activity** पर क्लिक करें।
10. नियम बंद करने के लिए **Delete** पर क्लिक करें। पुरानी गतिविधि बनी रहती है। जो कुछ उसने रोका था, वह रुका ही रहता है।

### Preview में टेस्ट करें, फिर लाइव जाएँ { #test-in-preview-then-go-live }

1. नियम बनाएँ। वह **Preview** में शुरू होता है।
2. ऊपर के बार में **Run now** पर क्लिक करें, या अगली जाँच का इंतज़ार करें। इनमें से एक संदेश दिखता है:
    - **No enabled rules to check.**
    - **Checked N rules — nothing matched.**
    - **Checked N rules — N actions. See the Activity log.**
3. **Activity log** खोलें। जिन पंक्तियों का नतीजा **Preview only** है, वे दिखाती हैं कि नियम क्या करता।
4. अगर पंक्तियाँ सही लगें, तो नियम पर **More** खोलें और **Go live** पर क्लिक करें।
5. **Turn "[name]" live?** विंडो में **Go live** पर क्लिक करें। संदेश **Rule is live.** दिखता है।

    

### Activity log पढ़ें { #read-the-activity-log }

1. **Activity log** टैब चुनें।
2. कोई **Rule** चुनें, या **All rules**।
3. **Last 7 days**, **Last 14 days** या **Last 30 days** चुनें।
4. कॉलम पढ़ें। नीचे की टेबल देखें।

| कॉलम | क्या दिखाता है |
| --- | --- |
| **WHEN** | कार्रवाई की तारीख और समय, आपके लोकल समय में। |
| **RULE** | नियम का नाम। |
| **ON** | लेवल और कैंपेन, ऐड सेट या विज्ञापन का नाम। |
| **ACTION** | **Paused**, **Turned on**, **Budget raised**, **Budget lowered**, **Budget set**, **Flagged**, **Turned back on** या **Budget put back**। बजट वाली कार्रवाइयाँ पुराना और नया बजट दिखाती हैं। |
| **RESULT** | **Done**, **Preview only** या **Failed**। |
| **WHY** | वजह, कोई एरर, और रीसेट कब होना है। |

अगर टैब खाली है, तो उसमें लिखा होता है **Nothing yet. Every time a rule acts — or, in Preview, would have acted — it shows here.**

### AI बिडिंग से बजट चलाएँ { #steer-budgets-with-ai-bidding }

AI बिडिंग आपके चुने कैंपेन या ऐड सेट के रोज़ के बजट को आपके टारगेट की ओर ले जाती है। वह हर बार आधा अंतर पाटती है, आपकी न्यूनतम और अधिकतम सीमा के अंदर। वह हर घंटे जाँच करती है।

1. **AI Bidding** टैब चुनें।
2. **New AI bidding** पर क्लिक करें।
3. नाम लिखें, जैसे "Scale Diwali ad sets"।
4. **Steer the budget of** के नीचे **Campaigns (campaign budget)** या ऐड सेट चुनें। 50 तक चुनें।
5. लक्ष्य चुनें: **At most** के साथ **Cost per result**, या **At least** के साथ **ROAS**।
6. **Minimum** भरें। बजट कभी इससे नीचे नहीं घटाया जाता।
7. **Maximum** भरें। बजट कभी इससे ऊपर नहीं बढ़ाया जाता।
8. **Biggest step** चुनें: **10%**, **15%**, **20%** या **30%**।
9. **Judge on** चुनें: **Last 3 days** या **Last 7 days**।
10. **Wait between changes** चुनें: **2**, **4**, **6**, **12** या **24 hours**।
11. **Create** पर क्लिक करें। वह **Preview** में शुरू होती है और हर घंटे दिखाती है कि क्या करती। संदेश होता है **AI bidding created in Preview — it shows what it would do and changes nothing yet.**
12. जब तैयार हों, कार्ड पर **More** खोलें और **Go live** पर क्लिक करें।

जाँच की स्थितियाँ हैं **Raised**, **Lowered**, **Would raise**, **Would lower**, **Failed**, **Not found** और **Holding**। टूल तब रुका रहता है जब आइटम अभी सीख रहा हो या उसका बजट खर्च न हो रहा हो।

!!! warning "2 टूल को एक ही ऐड सेट पर न लगाएँ"
    बजट नियम और AI बिडिंग को एक ही ऐड सेट पर न लगाएँ। वे एक ही बजट बदलेंगे।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Give the rule a name.** | **Rule name** खाली है। | नाम लिखें। |
| **Every condition needs a number.** | कोई **Value** खाली है या संख्या नहीं है। | हर शर्त में संख्या भरें। |
| **A "% of" condition needs a percent above zero, e.g. 130.** | तुलना प्रतिशत की है और मान 0 या खाली है। | 0 से ऊपर का प्रतिशत लिखें। |
| **Set a maximum daily budget so the rule cannot overspend.** | कार्रवाई बजट बढ़ाती है और **Max daily budget** खाली है। | **Max daily budget** भरें। |
| **Ads have no budget — change budgets at ad set or campaign level.** | **Ads** पर बजट वाली कार्रवाई सेट है। | **Works on** को **Ad sets** या **Campaigns** पर करें। |
| **Pick at least one campaign, ad set or ad, or apply the rule to all.** | **Only the … I pick** में कुछ भी टिक नहीं है। | कम से कम 1 आइटम टिक करें, या **All** चुनें। |
| नियम कभी कार्रवाई नहीं करता | वह **Preview** में है, बंद है, या कोई आइटम मेल नहीं खाता। | **Live** बैज और स्विच जाँचें। **Run now** पर क्लिक करें और **Activity log** पढ़ें। |

## संबंधित गाइड { #related }

- [अपने विज्ञापन प्रबंधित करें](manage-your-ads.md)
- [विज्ञापन क्रिएटिव का इस्तेमाल करें](use-ad-creatives.md)
- [अकाउंट ऑडिट चलाएँ](run-an-account-audit.md)
- [परफ़ॉर्मेंस रिपोर्ट पढ़ें](read-the-performance-report.md)
- [Click-to-WhatsApp विज्ञापन चलाएँ](../click-to-whatsapp-ads.md)
