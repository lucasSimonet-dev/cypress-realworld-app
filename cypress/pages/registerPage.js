class RegisterPage {
    selectorList() {
        const selectors = {
            register: "[href='/signup']",
            fieldFirstName: "[name='firstName']",
            fieldLastName: "[name='lastName']",
            fieldUsername: "[name='username']",
            fieldPassword: "[name='password']",
            fieldConfirmPassword:"[name='confirmPassword']",
            signUpBotton: "[data-test='signup-submit']",
  

        }
        return selectors;
    }
    LoginPage = "http://localhost:3000/";

    acessRegisterPage() {
        cy.visit('localhost:3000/signup');
        cy.url().should('include', '/signup'); 
    }
    
    registerNewUserSucess(firstname, lastname, username, password, confirmPassword, signbutton) {
        const selectors = this.selectorList();

    
        cy.get(selectors.fieldFirstName).type(firstname);
        cy.get(selectors.fieldLastName).type(lastname);
        cy.get(selectors.fieldUsername).type(username);
        cy.get(selectors.fieldPassword).type(password);
        cy.get(selectors.fieldConfirmPassword).type(confirmPassword);
        cy.get(selectors.signUpBotton).click();
    }

    registerNewUserFail(firstname, lastname, username, password, confirmPassword, signbutton) {
        const selectors = this.selectorList();

    
        cy.get(selectors.fieldFirstName).type(firstname);
        cy.get(selectors.fieldLastName).type(lastname);
        cy.get(selectors.fieldUsername).type(username);
        cy.get(selectors.fieldPassword).type(password);
        cy.get(selectors.fieldConfirmPassword).type(confirmPassword);
    
    }

    checkSignUpButtonVisibility(){
        const selectors = this.selectorList();
        cy.get(selectors.signUpBotton).should('be.visible');
    }

    checkSignUpButtonNotVisibility(){
        const selectors = this.selectorList();
        cy.get(selectors.signUpBotton).should('be.disabled');
    }

    checkRegisterSuccess() {
        cy.visit("http://localhost:3000/signin");
        cy.url().should('include', '/signin')
    }



}
export default RegisterPage;