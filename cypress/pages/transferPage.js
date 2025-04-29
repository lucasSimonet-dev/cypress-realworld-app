class TransferPage {
    selectorList() {
        const selectors = {
            tabSelector: ".css-u7g6hc-MuiButtonBase-root-MuiTab-root",


        }   
        return selectors;

        }
      checkHomePage() {
        cy.get(this.selectorList().tabSelector).should('be.visible');
      }

    }
    export default TransferPage;
