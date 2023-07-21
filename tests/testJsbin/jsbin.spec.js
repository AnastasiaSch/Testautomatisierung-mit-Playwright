const { test, expect } = require('@playwright/test');
const JsbinPage = require('./jsbin.page');
const jsbinPage = new JsbinPage();

//Vor jedem Test beginn mit der Startseite mit Console. Funktion beforeEach(). 
test.beforeEach(async ({ page }) => {
    await page.goto(jsbinPage.URLJsConsole);
  });

//Eine Sammlung von Testen N1 zeigt der Prüfung der Links zu bestimmten Stellen einer Seite per Search-Angabe.
//Schritt1: Klick auf ButtonImgFigute links 
//Schritt2: Klick auf den Text "Keyboard Shortcuts"
//Schritt3: Schreib in Search-Feld "HTML & CSS panel" (erster Test) und "Application level" (zweiter Test)
//Schritt4: Drücke "Enter" auf Tastatur
//Schritt5: Als Ergebniss zeige gefundene Info oben auf der Webseite
test.describe('correct links to specific parts of a page with input "Search"', () => {
    test("correct links: /#html-css-panel", async ({ page }) => {
        jsbinPage.setPage(page);
        await page.pause();
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.html);
        await jsbinPage.inputSearch.press('Enter');
        await expect(jsbinPage.textHtmlCssPansel).toBeVisible();  
    })
    
    test("correct links: /#application-level", async ({ page }) => {
        jsbinPage.setPage(page);
        await page.pause();
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.application);
        await jsbinPage.inputSearch.press('Enter');
        await expect(jsbinPage.textApplicationLevel).toBeVisible();  
    })
  }); 

  //Eine Sammlung von Testen N2 zeigt der Prüfung URLs nach der Search-Angaben auf der Seite.
  //Schritt1: Klick auf ButtonImgFigute links 
  //Schritt2: Klick auf den Text "Keyboard Shortcuts"
  //Schritt3: Schreib in Search-Feld "HTML & CSS panel" (erster Test) und "Application level" (zweiter Test)
  //Schritt4: Drücke "Enter" auf Tastatur
  //Schritt5: Als Ergebniss zeige gleiche URL, die vor der Benutzung "Search-Funktion" war.
  test.describe('correct URLs', () => {
    test("correct URl: /#html-css-panel", async ({ page }) => {
        jsbinPage.setPage(page);
        await page.pause();
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.html);
        await jsbinPage.inputSearch.press('Enter');
        await expect(page).toHaveURL(jsbinPage.URLKeyboardShortcuts);
    })
    
    test("correct URl: /#application-level", async ({ page }) => {
        jsbinPage.setPage(page);
        await page.pause();
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.application);
        await jsbinPage.inputSearch.press('Enter');
        await expect(page).toHaveURL(jsbinPage.URLKeyboardShortcuts);
    })
  });




  
