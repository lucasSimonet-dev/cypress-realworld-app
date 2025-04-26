import { register } from "module";
import RegisterPage from "../../pages/registerPage.js";

const registerPage = new RegisterPage();


describe('Registro de Usuário', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      cy.visit(registerPage.LoginPage);
    });
  
    it('Não deve permitir o registro de usuário com campos obrigatórios em branco', () => {

    });
  });