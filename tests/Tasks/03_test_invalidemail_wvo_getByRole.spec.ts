import { test , expect } from '@playwright/test'

test('Verify error message for invalid email on app.vwo.com', async ( { page}) => {

    await page.goto("https://app.vwo.com/#/login");
    await page.getByRole('textbox' , {name : 'Email address'}).fill("poojakt123");
    await page.getByRole('textbox' , {name : 'Password'}).fill("pass@123");
    await page.locator("li[data-qa='wusegasoju'] span.checkbox-radio-button.ng-scope").check();
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    // WORKING
    await expect(page.locator("#js-notification-box-msg")).toBeVisible();
    await expect(page.locator("#js-notification-box-msg")).toHaveText("Your email, password, IP address or location did not match");
    // await expect(page.getByText("Your email, password, IP address or location did not match")).toBeVisible();
    

    // NOT WORKING
    // await expect(page.getByTestId('rixawilomi')).toBeVisible();
    // await expect(page.getByTestId('rixawilomi')).toHaveText('Your email, password, IP address or location did not match');
    
    
})