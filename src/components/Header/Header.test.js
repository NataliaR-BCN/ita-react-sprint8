import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';


describe('Header when is not authenticathed', () => {
    let component;

    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })


    test('renders navigation menu',  () => {
        const menuItem = component.getByText(/home/i);
        expect(menuItem).toBeInTheDocument();
    });


    test('renders signup and Log in when is not authenticathed',  () => {
        const menuItemSignUp = component.getByText(/sign up/i);
        const menuItemLogIn = component.queryByText(/log out/i);

        expect(menuItemSignUp).toBeInTheDocument();
        expect(menuItemLogIn).not.toBeInTheDocument();
    });

});


describe('Header when authenticathed', () => {
    let component;

    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Header isAuthenticated = {true} />
            </BrowserRouter>
        )
    })

    
    test('renders Log out when is authenticathed',  () => {
        const menuItemLogOut = component.queryByText(/log out/i);

        expect(menuItemLogOut).toBeInTheDocument();
    })


    test('does not renders Log in and Sign up when is authenticathed',  () => {

        const menuItemSignUp = component.queryByText(/sign up/i);
        const menuItemLogIn = component.queryByText(/log in/i);
    
        expect(menuItemSignUp).not.toBeInTheDocument(); 
        expect(menuItemLogIn).not.toBeInTheDocument();
    
    })

})

