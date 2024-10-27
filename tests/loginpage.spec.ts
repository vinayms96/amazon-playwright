import test from "@playwright/test";
import Header from "../pages/header.page";

test('Login with invalid creds', async ({ page }) => {
    const header = new Header(page);

    await page.goto('/');
    console.log(await page.title());
    await header.loginButton.click();

    await page.locator('#ap_email').fill('thundurustest@gmail.com');
    await page.locator('input#continue').click();
    await page.locator('#ap_password').fill('rby9cuz_QXJ-zap.bkg');
    await page.locator('#signInSubmit').click();

    await header.loginButton.click();
    page.locator('#nav-al-your-account a').nth(3);
    console.log(await page.title());
    // await page.pause();
})