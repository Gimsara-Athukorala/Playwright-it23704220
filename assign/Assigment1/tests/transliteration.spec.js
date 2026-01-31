import { test, expect } from '@playwright/test';

const scenarios = [
    // Positive functional test cases
    { id: 'Pos_Fun_0001', input: 'mama paasal yanavaa', expected: 'මම පාසල් යනවා' },
    { id: 'Pos_Fun_0002', input: 'api  natanna yanavaa saha passe drama ekak balanavaa.', expected: 'අපි  නටන්න යනවා සහ පස්සෙ drama එකක් බලනවා.' },
    { id: 'Pos_Fun_0003', input: 'oya enavaanam mama  innavaa.', expected: 'ඔය එනවානම් මම  ඉන්නවා.' },
    { id: 'Pos_Fun_0004', input: ' oyaata kohomadha?', expected: 'ඔයාට කොහොමද?' },
    { id: 'Pos_Fun_0005', input: ' pitipassata yanna', expected: 'පිටිපස්සට යන්න' },
    { id: 'Pos_Fun_0006', input: 'mama ehema karanne naehae.', expected: 'මම එහෙම කරන්නේ නැහැ.' },
    { id: 'Pos_Fun_0007', input: 'karuNaakaralaa mata ooka dhenna puLuvandha?', expected: 'කරුණාකරලා මට ඕක දෙන්න පුළුවන්ද?' },
    { id: 'Pos_Fun_0008', input: 'ehema karapan.', expected: 'එහෙම කරපන්.' },
    { id: 'Pos_Fun_0009', input: 'mama iiyee gedhara giyaa.', expected: 'මම ඊයේ ගෙදර ගියා.' },
    { id: 'Pos_Fun_0010', input: 'api heta yanavaa.', expected: 'අපි හෙට යනවා.' },
    { id: 'Pos_Fun_0011', input: 'oyaalaa enavadha?', expected: 'ඔයාලා එනවද?' },
    { id: 'Pos_Fun_0012', input: 'mata oona poddak inna.', expected: 'මට ඕන පොඩ්ඩක් ඉන්න.' },
    { id: 'Pos_Fun_0013', input: 'mamapolatayanavaa', expected: 'මම පොලට යනවා' },
    { id: 'Pos_Fun_0014', input: 'hari hari lassanayi.', expected: 'හරි හරි ලස්සනයි.' },
    { id: 'Pos_Fun_0015', input: 'adha meeting ekak thiyenavaa..', expected: 'අද  meeting එකක් තියෙනවා.' },
    { id: 'Pos_Fun_0016', input: 'mata WhatsApp massege ekak evanna.', expected: 'මට WhatsApp massege එකක් එවන්න.' },
    { id: 'Pos_Fun_0017', input: 'api Kandy yanavaa.', expected: 'අපි Kandy යනවා.' },
    { id: 'Pos_Fun_0018', input: 'magea NIC eka dhenna.', expected: 'මගේ NIC එක දෙන්න.' },
    { id: 'Pos_Fun_0019', input: 'Rs. 500 gevanna thiyenavaa.', expected: 'රු. 500 ගෙවන්න තියෙනවා' },
    { id: 'Pos_Fun_0020', input: '7.30 AM enna.', expected: '7.30 AM එන්න.' },
    { id: 'Pos_Fun_0021', input: 'man gedhara yanavaa', expected: 'මන් ගෙදර යනවා' },
    { id: 'Pos_Fun_0022', input: 'mama gedhara yanavaa.\oyaa enavadha?', expected: 'මම ගෙදර යනවා.\ඔයා එනවද?' },
    { id: 'Pos_Fun_0023', input: 'ela machan supiri!', expected: 'එල මචන් සුපිරි!' },
    { id: 'Pos_Fun_0024', input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem...', expected: 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම්...' },

    // Negative functional test cases
    { id: 'Neg_Fun_0001', input: 'mama gedhar@@ yanavaa', expected: 'මම ගෙදර යනවා' },
    { id: 'Neg_Fun_0002', input: 'This is a random English paragraph.', expected: 'This is a random English paragraph.' },
    { id: 'Neg_Fun_0003', input: '123456', expected: 'Unclear or incorrect output' },
    { id: 'Neg_Fun_0004', input: '😀😀😀', expected: 'Emoji should not affect conversion' },
    { id: 'Neg_Fun_0005', input: 'maedhaperadhiga kalaapaya harahaa aethivemin pavathina uNusum aarakShaka pravaNathaa piLibaDHAva niranthara avaDhaanaya yomu karana lesa iishraayalayee shrii lQQkaa thaanaapathi kaarYaalaya erata sitina shrii laaQQkikayanta dhaenumdhii thibee. iishraayalayee shrii lQQkaa thaanaapathi nimal baNdaara mahathaa penvaa dhennee, paemiNena oonaeema avadhaanam thaththvayak paalanaya kiriimata iishraayal aarakShaka aQQsha sudhaanamin sitina bavath iishraayal aarakShaka amaathYaaQQshaya nirantharayen thorathuru haa upadhes yaavathkaalina karanu aethi bavath ya.hadhisi avasThaavaka aethivana misayila prahaara piLibaDHAva saeema smaart jQQgama dhurakaThanayakatama thorathuru laebena athara sayiran haDA nikuth vuvahoth thamaa  aasannayee aethi aarakShaka kutiyaka raekavaraNa labaa gatha haeki bavath ehi dhaekveyi. iishraayalayee shrii lQQkaa thaanaapathi kaarYaalaya vaedidhuratath saDHAhan karannee pavathina thaththvaya saelakillata gena adha (31) peravaru 10 sita pasvaru 2 dhakvaa thaanaapathi kaarYaalaya vivRUthava thaebena bavath mema kaalaya thuLa saamaanYA raajakaari sidhu karagatha haeki bavathYA. ', expected: 'Partial or incorrect Sinhala output' },
    { id: 'Neg_Fun_0006', input: 'man gedhara yanavaa', expected: 'මන් ගෙදර යනවා' },
    { id: 'Neg_Fun_0007', input: 'amma vanakkam mama enavaa', expected: '(empty)' },
    { id: 'Neg_Fun_0008', input: '', expected: 'Symbols should be ignored or removed' },
    { id: 'Neg_Fun_0009', input: '@@@###', expected: '(Empty)' },
    { id: 'Neg_Fun_0010', input: 'mama\t\tgedhara yanavaa', expected: 'මම  ගෙදර යනවා' },

    
];

test.describe('SwiftTranslator Automation', () => {

    test.setTimeout(180000); // 3 minutes total timeout

    for (const data of scenarios) {
        test(`Test Case ${data.id}`, async ({ page }) => {
            // FIX 1: Use domcontentloaded to avoid waiting for slow ads
            await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

            const normalize = (value) => {
                const text = (value ?? '').replace(/\r\n/g, '\n').trim();
                const withoutTitle = text.replace(/^Sinhala\s*\n?/i, '');
                return withoutTitle.trimEnd();
            };

            const getSinhalaPanelOutput = async () => {
                return await page.evaluate(() => {
                    const containsSinhala = (text) => /[\u0D80-\u0DFF]/.test(text);
                    const isVisible = (element) => {
                        const style = window.getComputedStyle(element);
                        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
                        const rect = element.getBoundingClientRect();
                        return rect.width > 0 && rect.height > 0;
                    };

                    const rightEdge = window.innerWidth / 2;
                    const candidates = Array.from(document.querySelectorAll('body *'))
                        .filter((element) => {
                            if (!(element instanceof HTMLElement)) return false;
                            if (!isVisible(element)) return false;
                            if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return false;
                            if (element.closest('textarea')) return false;
                            const rect = element.getBoundingClientRect();
                            return rect.left >= rightEdge;
                        })
                        .map((element) => {
                            const text = element.innerText ?? '';
                            return { element, text };
                        })
                        .filter((item) => item.text && containsSinhala(item.text));

                    let bestText = '';
                    let bestScore = -1;

                    for (const item of candidates) {
                        const text = item.text;
                        const sinhalaCount = (text.match(/[\u0D80-\u0DFF]/g) || []).length;
                        const score = sinhalaCount * 10 + Math.min(text.length, 500);
                        if (score > bestScore) {
                            bestScore = score;
                            bestText = text;
                        }
                    }

                    return bestText;
                });
            };

            const visibleTextareas = page.locator('textarea:visible');
            const textareaCount = await visibleTextareas.count();

            let inputField = visibleTextareas.first();
            let outputField = visibleTextareas.last();

            if (textareaCount >= 2) {
                const firstIsReadOnly = await visibleTextareas.first().evaluate((el) => el.readOnly || el.disabled);
                const lastIsReadOnly = await visibleTextareas.last().evaluate((el) => el.readOnly || el.disabled);

                if (!firstIsReadOnly && lastIsReadOnly) {
                    inputField = visibleTextareas.first();
                    outputField = visibleTextareas.last();
                } else if (firstIsReadOnly && !lastIsReadOnly) {
                    inputField = visibleTextareas.last();
                    outputField = visibleTextareas.first();
                } else {
                    inputField = visibleTextareas.nth(0);
                    outputField = visibleTextareas.nth(1);
                }
            }

            await inputField.waitFor({ state: 'visible' });
            
            await inputField.fill('');
            await inputField.pressSequentially(data.input, { delay: 15 });

            // Wait for conversion/output
            await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).not.toBe('');

            const actualOutputRaw = await getSinhalaPanelOutput();
            const actualOutput = normalize(actualOutputRaw);
            const expectedOutput = normalize(data.expected);
            const pass = actualOutput === expectedOutput;

            console.log(`\n-----------------------------------`);
            console.log(`TC ID: ${data.id}`);
            console.log(`INPUT: ${data.input}`);
            console.log(`EXPECTED: ${data.expected}`);
            console.log(`ACTUAL: ${actualOutputRaw}`);
            console.log(`STATUS: ${pass ? 'PASS' : 'FAIL'}`);
            console.log(`-----------------------------------`);
            
            expect(actualOutput).toBe(expectedOutput);
        });
    }

    test('Pos_UI_0002: Sinhala output clears when Singlish input is cleared', async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

        const normalize = (value) => {
            const text = (value ?? '').replace(/\r\n/g, '\n').trim();
            const withoutTitle = text.replace(/^Sinhala\s*\n?/i, '');
            return withoutTitle.trimEnd();
        };

        const getSinhalaPanelOutput = async () => {
            return await page.evaluate(() => {
                const containsSinhala = (text) => /[\u0D80-\u0DFF]/.test(text);
                const isVisible = (element) => {
                    const style = window.getComputedStyle(element);
                    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
                    const rect = element.getBoundingClientRect();
                    return rect.width > 0 && rect.height > 0;
                };

                const rightEdge = window.innerWidth / 2;
                const candidates = Array.from(document.querySelectorAll('body *'))
                    .filter((element) => {
                        if (!(element instanceof HTMLElement)) return false;
                        if (!isVisible(element)) return false;
                        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return false;
                        if (element.closest('textarea')) return false;
                        const rect = element.getBoundingClientRect();
                        return rect.left >= rightEdge;
                    })
                    .map((element) => {
                        const text = element.innerText ?? '';
                        return { element, text };
                    })
                    .filter((item) => item.text && containsSinhala(item.text));

                let bestText = '';
                let bestScore = -1;

                for (const item of candidates) {
                    const text = item.text;
                    const sinhalaCount = (text.match(/[\u0D80-\u0DFF]/g) || []).length;
                    const score = sinhalaCount * 10 + Math.min(text.length, 500);
                    if (score > bestScore) {
                        bestScore = score;
                        bestText = text;
                    }
                }

                return bestText;
            });
        };

        const visibleTextareas = page.locator('textarea:visible');
        const textareaCount = await visibleTextareas.count();

        let inputField = visibleTextareas.first();
        let outputField = visibleTextareas.last();

        if (textareaCount >= 2) {
            const firstIsReadOnly = await visibleTextareas.first().evaluate((el) => el.readOnly || el.disabled);
            const lastIsReadOnly = await visibleTextareas.last().evaluate((el) => el.readOnly || el.disabled);

            if (!firstIsReadOnly && lastIsReadOnly) {
                inputField = visibleTextareas.first();
                outputField = visibleTextareas.last();
            } else if (firstIsReadOnly && !lastIsReadOnly) {
                inputField = visibleTextareas.last();
                outputField = visibleTextareas.first();
            } else {
                inputField = visibleTextareas.nth(0);
                outputField = visibleTextareas.nth(1);
            }
        }
        
        await inputField.fill('mama gedhara yanavaa');
        await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).not.toBe('');
        await inputField.fill('');
        await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).toBe('');
    });
});