const { Given, When,Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
// const { url } = require("./common");
 const { test, expect, playwright } = require("@playwright/test");



class HomepagePO {
    constructor(page) {
        this.page = page;
    }

    async enterFirstName(firstName) {
        await this.page.fill('[placeholder="First Name"]', firstName);
    }

    async enterLastName(lastName) {
        await this.page.fill('[placeholder="Last Name"]', lastName);
    }

    async enterEmail(email) {
        await this.page.fill('[placeholder="Email Address"]', email);
    }

    async enterComment(comment) {
        // await page.locator('[placeholder="Comments"]').fill(word + " " + number);
        await this.page.fill('[placeholder="Comments"]', comment);
    }
}

module.exports = HomepagePO;
