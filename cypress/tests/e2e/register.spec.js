import RegisterPage from "../../pages/registerPage.js";
import userData from "../../fixtures/user-data.json";


const registerPage = new RegisterPage();


describe('Registro de Usuário', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      const { firstName, lastName, username, password, confirmPassword } = userData.RegisterSuccess;
      registerPage.acessRegisterPage();
      registerPage.registerNewUserSucess(firstName, lastName, username, password, confirmPassword);
      registerPage.checkRegisterSuccess();


    });
  
    it('Não deve permitir o registro de usuário com campos obrigatórios em branco', () => {
      const { firstName, lastName, username, password, confirmPassword } = userData.RegisterFail;
      registerPage.acessRegisterPage();
      registerPage.registerNewUserFail(firstName, lastName, username, password, confirmPassword);
      registerPage.checkSignUpButtonNotVisibility();
    });
  });