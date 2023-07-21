class JsbinPage {
    constructor(page){
        this.page = page;
        this.URLJsConsole = "https://jsbin.com/?js,console";
        this.URLKeyboardShortcuts = "https://jsbin.com/help/keyboard-shortcuts/";
    }

    setPage(page) {
        this.page = page;
    }

    //locators
    get buttonImgFigure() {
        return this.page.getByRole('link', { name: 'Welcome to JS Bin' });
    }
    get linkKeyboardShortcuts() {
        return this.page.locator('[href="http://jsbin.com/help/keyboard-shortcuts"]');
    }
    get inputSearch() {
        return this.page.locator('#search');
    }
    get textHtmlCssPansel() {
        return this.page.locator('h2#html-css-panel');
    }
    get textApplicationLevel() {
        return this.page.locator('h2#application-level');
    }

    //search Option
    get fillOptionsSearch() {
        return {
            html: "HTML & CSS panel",
            application: "Application level",
            code: "Code based",
        }
    }
  
}
module.exports = JsbinPage;

    
       
    
      
