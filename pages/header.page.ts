import { Locator, Page } from "@playwright/test";

class Header {
    private readonly page: Page;
    private readonly LOGIN_BUTTON: Locator;

    constructor(page: Page) {
        this.page = page;
        this.LOGIN_BUTTON = page.locator('#nav-link-accountList');
    }

    public get loginButton() {
        return this.LOGIN_BUTTON;
    }
}

export default Header;