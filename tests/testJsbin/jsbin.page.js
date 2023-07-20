class JsbinPage {
    constructor(page){
        this.page = page;
        this.URLJsConsole = "https://jsbin.com/?js,console";
        this.URLKeyboardShortcuts = "https://jsbin.com/help/keyboard-shortcuts/";
    }

    setPage(page) {
        this.page = page;
    }

    get buttonImgFigure() {
        return this.page.getByRole('link', { name: 'Welcome to JS Bin' });
    }
    get linkKeyboardShortcuts() {
        return this.page.getByRole('link', { name: 'Keyboard Shortcuts', exact: true });
    }
    get linkHtmlAndCssPanel() {
        return this.page.getByText('Keyboard Shortcuts HTML & CSS panel HTML & CSS panel HTML & CSS panel');
    }
    get linkApplicationLevel() {
        return this.page.getByText('Keyboard Shortcuts Application level Application level Application level');
    }
    get inputSearch() {
        return this.page.getByPlaceholder('Search...');
    }
    get textHtmlCssPansel() {
        return this.page.getByText('HTML & CSS panel');
    }
    get textApplicationLevel() {
        return this.page.getByText('Application level');
    }


    get fillOptionsSearch() {
        return {
            html: "HTML & CSS panel",
            application: "Application level",
            code: "Code based",
        }
    }
  
}
module.exports = JsbinPage;

    
       
    
      
