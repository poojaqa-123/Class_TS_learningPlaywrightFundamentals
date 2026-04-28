import { test , expect } from '@playwright/test'

test('Verify the  error message for incorrect Gmail ID, ' , async ( { page }) => {

    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    // await page.locator("#page-v1-step1-email").fill("poojakt123@gmail.com");
    await page.locator("#page-v1-step1-email").pressSequentially("poojakt123@gmail.com" , { delay: 200 } );
    const expectedError = "gmail.com doesn't look like a business domain. Please use your business email.";
    const actualError = await page.locator("div.invalid-input-group div.invalid-reason").textContent();
    expect(actualError, expectedError);


})