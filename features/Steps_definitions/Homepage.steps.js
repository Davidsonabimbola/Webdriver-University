
const { Given, When,Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { url } = require("./common");
 const { test, expect, playwright } = require("@playwright/test");
  const HomepagePO = require("../Page/Homepage_PO");

 
let page;
 let homepagePO


Given('I navigate to the WebdriverUniversity homepage', {timeout:100*1000}, async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
    
    

});


When('I click on the contact us button', async () => {
   //To prevent the opening of a new page
    await page.evaluate(()=>{
        const selector = document.querySelector('[id="contact-us"]');
        selector.removeAttribute('target')
        // the contact us button is clicked
        selector.click()
    })
    
});

When('I type a first name', async () => {
    await page.locator('[placeholder="First Name"]').fill('Babs');
});

When('I type a last name', async()=>{
    await page.locator('[placeholder="Last Name"]').fill('Doe');
})

When('I enter an email address', async()=>{
   
    await page.locator('[placeholder="Email Address"]').fill('john.doe@example.com');
    
})

When('I type a comment', async()=>{
    await page.locator('[placeholder="Comments"]').fill('This is a test message.');
   
})
  

When('I click on the submit button', async () => {
    await page.locator('#contact_form [type="submit"]').click()
});

Then('I should be presented with a successful contact us submission message', async()=>{
    const message_page = await page.locator('[id="contact_reply"]')
    const message = await message_page.locator('h1').textContent()
    console.log(message)
    expect(message).toBeTruthy()
})

//...................


When ('I type a specific first name {string}', async(firstName)=>{ 
          homepagePO = new HomepagePO(page);
    await homepagePO.enterFirstName(firstName)
})

// When ('I type a specific last name {string}', async(lastName)=>{
//     await page.locator('[placeholder="Last Name"]').fill(lastName);
// })

When ('I type a specific last name {string}', async(lastName)=>{
    homepagePO = new HomepagePO(page);
    await homepagePO.enterLastName(lastName)
})

// When ('I enter a specific email address {string}', async(email)=>{
//     await page.locator('[placeholder="Email Address"]').fill(email)
// })

When ('I enter a specific email address {string}', async(email)=>{
    homepagePO = new HomepagePO(page);
    await homepagePO.enterEmail(email)
})


When ('I type a specific word {string} and number {int} wthin the comment input field', async(word, number)=>{
    // await page.locator('[placeholder="Comments"]').fill(word + " " + number);
    homepagePO = new HomepagePO(page);
    await homepagePO.enterComment(word + " " + number)
})


// Scenario outline

When ('I type a first name {word} and a last name {string}', async (firstName, lastName)=>{
    await page.locator('[placeholder="First Name"]').fill(firstName);
    await page.locator('[placeholder="Last Name"]').fill(lastName);
})

When ('I type a {string} and a comment {string}', async (email, comment)=>{
    await page.locator('[placeholder="Email Address"]').fill(email)
    await page.locator('[placeholder="Comments"]').fill(comment);
})

Then('I should be presented with header text {string}', {timeout:100*1000},async(output)=>{
    const message_page = await page.locator('[id="contact_reply"]')
    const message = await message_page.locator('h1').textContent()
 console.log(message)
 expect (message === output).toBeTruthy()
    // const error_body = page.locator('body')
    // const error_message = error_body.locator('br').textContent()
    // expect(error_message.trim() === output.trim()|| message.trim() === output.trim()).toBeTruthy()
    
})

// end of scenario outline1


// scenario outline for LoginFeature

When('I click on the login portal button', async () => {
    //To prevent the opening of a new page
     await page.evaluate(()=>{
         const selector = document.querySelector('[id="login-portal"]');
         selector.removeAttribute('target')
         // the login  button is clicked
         selector.click()
     })
     
 });


 



