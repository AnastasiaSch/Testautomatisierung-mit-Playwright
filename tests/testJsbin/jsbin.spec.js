const { test, expect } = require('@playwright/test');
const JsbinPage = require('./jsbin.page');
const jsbinPage = new JsbinPage();


//Vor jedem Test beginn mit der Startseite mit Console. Funktion beforeEach(). 
test.beforeEach(async ({ page }) => {
    jsbinPage.setPage(page);
    await page.goto(jsbinPage.URLJsConsole);
  });

//Eine Sammlung von Testen N1 zeigt die Prüfung der Ausgabe von Search-Angaben.
//Schritt1: Klick auf ButtonImgFigute links 
//Schritt2: Klick auf den Text "Keyboard Shortcuts"
//Schritt3: Schreib in Search-Feld "HTML & CSS panel" (erster Test) und "Application level" (zweiter Test)
//Schritt4: Drücke "Enter" auf Tastatur
//Schritt5: Sollverhalten: gesuchte Info gibt es auf der Webseite
test.describe('outnput of "Search"-funk', () => {
    test("correct output: /#html-css-panel", async ({ page }) => {
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.html);
        await jsbinPage.inputSearch.press('Enter');
        await expect(jsbinPage.textHtmlCssPansel).toBeVisible();  
    })
    
    test("correct output: /#application-level", async ({ page }) => {
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
  //Schritt5: Sollverhalten: gleiche URL, die vor der Benutzung "Search-Funktion" war.
  test.describe('correct URLs', () => {
    test("correct URl: /#html-css-panel", async ({ page }) => {
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.html);
        await jsbinPage.inputSearch.press('Enter');
        await expect(page).toHaveURL(jsbinPage.URLKeyboardShortcuts);
    })
    
    test("correct URl: /#application-level", async ({ page }) => {
        await jsbinPage.buttonImgFigure.click();
        await jsbinPage.linkKeyboardShortcuts.click();
        await jsbinPage.inputSearch.fill(jsbinPage.fillOptionsSearch.application);
        await jsbinPage.inputSearch.press('Enter');
        await expect(page).toHaveURL(jsbinPage.URLKeyboardShortcuts);
    })
  });




  
