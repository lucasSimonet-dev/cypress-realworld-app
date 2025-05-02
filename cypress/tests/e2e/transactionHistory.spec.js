import LoginPage from '../../pages/loginPage.js';
import userData from "../../fixtures/user-data.json";
import TransactionHistoryPage from "../../pages/TransactionHistoryPage.js";

const loginPage = new LoginPage();
const transactionHistoryPage = new TransactionHistoryPage();


describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      cy.visit('/login');
      loginPage.login(userData.userSucess.username, userData.userSucess.password);
      loginPage.checkLoginSuccess();
      transactionHistoryPage.viewHistoricSuccess();


    });
  });

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        cy.visit('/login');
        loginPage.login(userData.UserWithoutTransactionHistoric.username,userData.UserWithoutTransactionHistoric.password);
        loginPage.checkLoginSuccess();
        transactionHistoryPage.checkNoTransitionForTwoTabs();



    });
  });