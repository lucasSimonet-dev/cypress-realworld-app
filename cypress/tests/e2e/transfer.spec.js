import LoginPage from '../../pages/loginPage.js';
import userData from "../../fixtures/user-data.json";
import TransferPage from '../../pages/transferPage';

const loginPage = new LoginPage();
const transferPage = new TransferPage();

describe('Enviar dinheiro com saldo suficiente', () => {
beforeEach(() => {
    cy.visit('/login');
    loginPage.login(userData.userSucess.username,userData.userSucess.password);
    transferPage.checkHomePage();

});

    it('Deve enviar dinheiro com sucesso', () => {

    });
  });

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
      // Implemente os passos do caso de teste aqui
    });
  });