import { test , expect } from '@playwright/test'

test('Verify error message for invalid email on app.vwo.com', async ( { page}) => {

    await page.goto("https://app.vwo.com/#/login");
    await page.locator("#login-username").fill("poojakt123");
    await page.locator("#login-password").fill("pass@123");
    await page.locator("li[data-qa='wusegasoju'] span.checkbox-radio-button.ng-scope").check();
    await page.locator("#js-login-btn").click();
    const actualErrorMessage = await page.locator("#js-notification-box-msg").textContent();
    await page.waitForTimeout(1000)
    console.log("actualErrorMessage : ", actualErrorMessage);
    const expectedErrorMessage = "Your email, password, IP address or location did not match";
    // expect(actualErrorMessage).toEqual(expectedErrorMessage);
    expect(page.locator("#js-notification-box-msg")).toHaveText("Your email, password, IP address or location did not match");
    
})