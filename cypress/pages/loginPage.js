class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongLoginMessage: "[role='alert']",
                    
        }

        return selectors;
        
    }
    successLoginHomeUrl = "http://localhost:3000/";


    acessLoginPage() {
        cy.visit('/signin');
    }

    loginAnyWithUser(username,password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }

    checkLoginSuccess() {
        cy.url().should('eq', this.successLoginHomeUrl);
    }

    checkAcessInvalid() {
        cy.get(this.selectorsList().wrongLoginMessage).should('be.visible');

    }




}

export default LoginPage;