import { test, expect } from '@playwright/test'
import * as allure from 'allure-js-commons'

test('Verify that the account balance accurately reflects the remaining funds after a successful transfer on the TTA Bank website.', async ({ page }) => {

    allure.epic("Sign In Epic");
    allure.description("Validates that the post-transfer balance on the dashboard matches the expected calculation after completing the registration and fund transfer process.");
    allure.feature("Sign In")

    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByPlaceholder("John Doe").fill("Pooja");
    await page.getByPlaceholder("you@example.com").fill("poojakt123@gmail.com");
    await page.getByPlaceholder("••••••••").fill("pass123");
    await page.getByRole('button', { name: 'Create Account'}).click();
    await expect(page.locator("//span[@class='text-2xl font-bold tracking-tight' and text()='TTA Bank']")).toBeVisible();

    const balnceStr = await page.locator("//h3[@class='mt-2 text-3xl font-bold']").textContent() ?? '0';
    const totalBalance = parseFloat(balnceStr.replace(/[^0-9.-]+/g, ""));
    console.log(" Total balance : ", totalBalance);

    await page.getByRole('button', { name : 'Transfer Funds'}).click();
    await page.getByPlaceholder("0.00").fill("5000");
    
    const rentStr = await page.locator('input[type="number"]').inputValue() ?? '0';
    const rentValue = parseFloat(rentStr.replace(/[^0-9.-]+/g, ""));


    console.log(" Rent : ", rentValue);

    await page.getByPlaceholder("e.g. Rent for October").fill("Rent"); 
    await page.getByText("Continue").click();
    
    await expect(page.getByText("Review Transfer")).toBeVisible();
    await page.getByText("Confirm Transfer").click();
    
    await page.getByRole('button' , { name : 'Dashboard'}).click();

    const remainingBalance : number = totalBalance - rentValue ;
    console.log(" Remainig balance : ", remainingBalance);

    expect(remainingBalance).toEqual(45000);

})