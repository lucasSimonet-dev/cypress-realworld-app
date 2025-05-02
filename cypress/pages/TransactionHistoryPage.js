import { eq } from "lodash";

class TransactionHistoryPage {
    selectorList() {
        const selectors = {
            //case 1
            checkButtonsExist: "[role='tab']", //os 3 
            checkListTransactionExist: ".css-yrdr1j-MuiPaper-root", // ver se a div contendo a a lista de transações existe
            checkItensListTransaction: ".css-1v18wys-MuiListItem-root", // Lista de itens
            checkPriceItensListTransaction: ".css-1v18wys-MuiListItem-root", // Valor das transações da lista, de cada item
            //case 2
            checkWindowNoTransaction: ".css-ma8ek8-MuiGrid-root", // 0 para primeira camada e  1 pra segunda
            checkNoTransactionsText: ".css-mpyo7s-MuiTypography-root",
            checkCreateTransactionButton: "[data-test='transaction-list-empty-create-transaction-button']"
   



        }
    return selectors;
    }

    checkTransactionsForTab(tabIndex) {
        const selectors = this.selectorList();

        cy.get(selectors.checkButtonsExist).eq(tabIndex).should('exist').click();

        cy.get(selectors.checkListTransactionExist).should('exist').should('be.visible');

        cy.get(selectors.checkItensListTransaction).its('length').then((itemCount) => {
            cy.get('.css-1tlfly5-MuiTypography-root').should('have.length', itemCount);
        });
    }

    viewHistoricSuccess() {
        this.checkTransactionsForTab(0);  
        this.checkTransactionsForTab(1);  
        this.checkTransactionsForTab(2);  
    }
    checkEmptyStateForTab(tabIndex){
        const selectors = this.selectorList();
        cy.get(selectors.checkButtonsExist).eq(tabIndex).click();
        cy.get(selectors.checkWindowNoTransaction).eq(0).should('be.visible');
        cy.get(selectors.checkWindowNoTransaction).eq(1).should('be.visible');
        cy.get(selectors.checkCreateTransactionButton).should('be.visible');

    }

    checkNoTransitionForTwoTabs() {
        this.checkEmptyStateForTab(1);
        this.checkEmptyStateForTab(2);
    }
}

export default TransactionHistoryPage;