class TransferPage {
    selectorList() {
        const selectors = {
            homepage: ".css-u7g6hc-MuiButtonBase-root-MuiTab-root",
            tabSelector: "[href='/transaction/new']",
            newTransactionButton: ".NavBar-newTransactionButton",
            listContacts: ".css-1p823my-MuiListItem-root",
            fieldAmount: "[name='amount']",
            fieldAddNote: "[placeholder='Add a note'][required=''][type='text'][value='']",
            buttonSubmitPayment: "[data-test='transaction-create-submit-payment']",
            checkSendMoneySuccess: "[data-test='new-transaction-create-another-transaction']"


        }   
        return selectors;

        }

        sendMoney(amount, note, expectSuccess = true) {
          const selectors = this.selectorList();
          cy.get(selectors.tabSelector).click();
          cy.get(selectors.newTransactionButton).click();
          cy.get(selectors.listContacts).eq(0).click();
          cy.get(selectors.fieldAmount).type(amount);
          cy.get(selectors.fieldAddNote).type(note);
          cy.get(selectors.buttonSubmitPayment).should('not.be.disabled').click();
        
          if (expectSuccess) {
            cy.get(selectors.checkSendMoneySuccess).should('be.visible');
          }
        }

      checkHomePage() {
        cy.get(this.selectorList().homepage).should('be.visible');
      }

    }
    export default TransferPage;
