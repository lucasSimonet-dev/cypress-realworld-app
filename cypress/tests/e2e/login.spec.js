import LoginPage from "../../pages/loginPage.js";
import userData from "../../fixtures/user-data.json";


const loginPage= new LoginPage();

describe('Login - Real World App', () => {

  it('Login credenciais inválidas', () => {
    loginPage.acessLoginPage();
    loginPage.loginAnyWithUser(userData.UserFail.username,userData.UserFail.password);
    loginPage.checkAcessInvalid();

  })

  it('Login credenciais válidas', () => {
    loginPage.acessLoginPage();
    loginPage.loginAnyWithUser(userData.userSucess.username,userData.userSucess.password);
    loginPage.checkLoginSuccess();

  })


})