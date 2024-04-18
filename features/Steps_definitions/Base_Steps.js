const { Given, When,Then, Before, After } = require("@cucumber/cucumber");


// let page;

// Given('I navigate to the WebdriverUniversity homepage', {timeout:100*1000}, async () => {
//     const browser = await chromium.launch({
//         headless: false
//     });
//     const context = await browser.newContext();
//     page = await context.newPage();
//     await page.goto(url);

// });

Before(()=>{
 console.log('Execute before each scenario')
})

//Hooks before a tag
Before({tags: "@Login"}, ()=>{
    console.log('Execute Login pack')
   })

After(()=>{
    console.log('Execute After each scenario')
})

// When ('I wait for {int} seconds',(seconds)=>{
//     page.wait()
// })