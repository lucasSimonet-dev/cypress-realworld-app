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
    confirmSignUpPage =  "http://localhost:3000/signup";

    registerNewUserSucess(firstname, lastname, username, password, confirmpassword, signbutton) {
        const selectors = this.selectorList();

    
        cy.get(selectors.fieldFirstName).type(firstname);
        cy.get(selectors.fieldLastName).type(lastname);
        cy.get(selectors.fieldUsername).type(username);
        cy.get(selectors.fieldPassword).type(password);
        cy.get(selectors.fieldConfirmPassword).type(confirmPassword);
        cy.get(selectors.signUpBotton).click();
    }

}
export default RegisterPage;