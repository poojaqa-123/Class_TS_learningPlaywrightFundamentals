import { test , expect } from '@playwright/test'

test('Verify that the URL is changed to /#appointment', async ( { page}) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByText("Make Appointment").click();
    
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/profile.php#login")
    
    await page.getByRole('textbox' , {name : 'Username'}).nth(1).fill("John Doe");
    await page.getByRole('textbox' , {name : 'Password'}).nth(1).fill("ThisIsNotAPassword");
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");


})