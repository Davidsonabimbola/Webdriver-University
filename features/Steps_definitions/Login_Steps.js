const {  Given,When,Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { url } = require("./common");
const { test, expect, playwright } = require("@playwright/test");

let page;


// Given('I navigate to the WebdriverUniversity homepage', {timeout:100*1000}, async () => {
//     const browser = await chromium.launch({
//         headless: false
//     });
//     const context = await browser.newContext();
//     page = await context.newPage();
//     await page.goto(url);

// });

// When('I click on the login portal button', async () => {
//     //To prevent the opening of a new page
//      await page.evaluate(()=>{
//          const selector = document.querySelector('[id="login-portal"]');
//          selector.removeAttribute('target')
//          // the login  button is clicked
//          selector.click()
//      })
     
//  });



//{} is used for anonymous regular expression
When ('I type a username {string}',{timeout:100*1000}, async (username)=>{
    await page.locator('[placeholder="Username"]').fill(username);
    
})

When ('I type a password {string}',{timeout:100*1000}, async (password)=>{
    await page.locator('[id="password"]').fill(password);
})



When ('I click on the login button', async ()=>{
    await page.locator('[id="login-button"]').click();
    page.on('dialog', dialog => dialog.accept())
})

Then ('I should be presented with an alert box which contains text {string}', async (expectedAlertText)=>{
    //page.on('dialog', dialog => dialog.accept())
    expect(page.on('dialog', dialog => dialog.accept())).toHaveText(expectedAlertText)
})