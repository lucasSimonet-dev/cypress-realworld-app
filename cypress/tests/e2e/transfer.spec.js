import LoginPage from '../../pages/loginPage.js';
import userData from "../../fixtures/user-data.json";
import TransferPage from '../../pages/transferPage';

const loginPage = new LoginPage();
const transferPage = new TransferPage();

describe('Enviar dinheiro com saldo suficiente', () => {

    it('Deve enviar dinheiro com sucesso', () => {
      cy.visit('/login');
      loginPage.login(userData.userSucess.username, userData.userSucess.password);
      const {amount, note} = userData.SendMoneySuccess;
      transferPage.sendMoney(amount, note,true);
    });
  });

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Tentar Enviar Dinheiro Com Saldo Insuficiente.', () => {
      cy.visit('/login');
      loginPage.login(userData.UserWithoutBalance.username,userData.UserWithoutBalance.password);
      const {amount, note} = userData.SendMoneyWithoutBalance;
      transferPage.sendMoney(amount, note, false); 


    });
  });