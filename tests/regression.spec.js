// tests/spec.js
const { test, expect } = require("@playwright/test");
const { url } = require("../features/Steps_definitions/common");


test("Navigate to WebdriverUniversity homepage", async ({ page }) => {
  await page.goto(url);
  await page.evaluate(()=>{
    const selector = document.querySelector('[id="contact-us"]');
    selector.removeAttribute('target')
    selector.click()
})
await page.locator('[placeholder="First Name"]').fill('Babs');
await page.locator('[placeholder="Last Name"]').fill('Doe');
await page.locator('[placeholder="Email Address"]').fill('john.doe@example.com');
await page.locator('[placeholder="Comments"]').fill('This is a test message.');
await page.locator('#contact_form [type="submit"]').click()
const message_page = await page.locator('[id="contact_reply"]')
const message = await message_page.locator('h1').textContent()
console.log(message)
expect(message).toBeTruthy()

//expect((await message)==='Thank You for your Message!')

});

test.only('login page', async({page})=>{
  await page.goto(url);
  await page.evaluate(()=>{
    const selector = document.querySelector('[id="login-portal"]');
    selector.removeAttribute('target')
    selector.click()
})
 await page.locator('[placeholder="Username"]').fill('webdriver' );
 await page.locator('[id="password"]').fill('webdriver123');
 await page.locator('[id="login-button"]').click();
})