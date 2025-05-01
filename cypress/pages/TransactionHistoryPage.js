class TransactionHistoryPage {
    selectorList() {
        const selectors = {
            checkButtonsExist: "[role='tab']", //os 3 
            checkListTransactionExist: ".css-yrdr1j-MuiPaper-root", // ver se a div contendo a a lista de transações existe
            checkItensListTransaction: ".css-1v18wys-MuiListItem-root", // Lista de itens
            checkPriceItensListTransaction: ".css-1v18wys-MuiListItem-root" // Valor das transações da lista, de cada item

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
    }

export default TransactionHistoryPage;