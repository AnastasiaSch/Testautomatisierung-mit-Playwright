const { test, expect } = require('@playwright/test');
const JsbinPage = require('./jsbin.page');
const jsbinPage = new JsbinPage();

test.describe('correct URLs', () => {
    test("correct URl: /#html-css-panel", async ({ page }) => {
        jsbinPage.setPage(page);
        await page.goto(jsbinPage.URLJsConsole);
        await page.pause();
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.html);
        await jsbinPage.inputSearch.press('Enter');
        await expect(jsbinPage.textHtmlCssPansel).toBeVisible();
        await expect(page).toHaveURL(jsbinPage.URLKeyboardShortcuts);
    })
    
    test("correct URl: /#application-level", async ({ page }) => {
        jsbinPage.setPage(page);
        await page.goto(jsbinPage.URLJsConsole);
        await page.pause();
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.application);
        await jsbinPage.inputSearch.press('Enter');
        await jsbinPage.textApplicationLevel.click();
        await expect(jsbinPage.textApplicationLevel).toBeVisible();
        await expect(page).toHaveURL(jsbinPage.URLKeyboardShortcuts);
    })
  });




  
