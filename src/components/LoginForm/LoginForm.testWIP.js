import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';


describe('LoginForm component to Log IN (user not authenticated)', () => {

    beforeEach(() => {
        render(    
            <BrowserRouter>
                <LoginForm isAuthenticated = {false} />
            </BrowserRouter>
        )
    })

    test('shows instructions text', () => {
        const instructionsTxt = screen.getByText(/Login to your account/i);

        expect(instructionsTxt).toBeInTheDocument();
    })

    test('renders form elements', () => {
        const emailInput = screen.getByLabelText(/enter your email address/i);
        const pwdInput = screen.getByLabelText(/enter your password/i);

        expect(emailInput).toBeInTheDocument();
        expect(pwdInput).toBeInTheDocument();
    })

    test('renders button to submit Log in form instead of Log out button', () => {
        const btnLogin = screen.getByRole('button', { name: /Continue/i });
        const btnLogout = screen.queryByRole('button', { name: /Log out/i });

        expect(btnLogin).toBeInTheDocument();        
        expect(btnLogout).not.toBeInTheDocument();
    })

    test('does not show user information', () => {
        const userTxt = screen.queryByText(/your user is/i);

        expect(userTxt).not.toBeInTheDocument();
    })

});


describe('LoginForm component to Log OUT (user authenticated)', () => {
    
    beforeEach(() => {
        render(    
            <BrowserRouter>
                <LoginForm isAuthenticated = {true} />
            </BrowserRouter>
        )
    })

    test('shows Starships section link', () => {
        const starshipLink = screen.getByRole('link', { name: /starships/i });
        expect(starshipLink).toBeInTheDocument();
    })

    test('renders Log out button instead of Log in (Continue) button', () => {
        const btnLogout = screen.getByRole('button', { name: /Log out/i });
        const btnLogin = screen.queryByRole('button', { name: /Continue/i });
        
        expect(btnLogout).toBeInTheDocument();
        expect(btnLogin).not.toBeInTheDocument();
    })

    test('does not show any Login form input', () => {
        const emailInput = screen.queryByLabelText(/enter your email address/i);
        const pwdInput = screen.queryByLabelText(/enter your password/i);

        expect(emailInput).not.toBeInTheDocument();
        expect(pwdInput).not.toBeInTheDocument();
    })

});

 test('clicking the Logout button calls event handler', () => {

    const mockHandler = jest.fn();

    render(    
            <BrowserRouter>
                <LoginForm isAuthenticated = {true} handleIsAuthenticated = {mockHandler} />
            </BrowserRouter>
        )

        
        
        const btnLogout = screen.getByRole('button', { name: /Log out/i });
    
        fireEvent.click(btnLogout);

        expect(mockHandler.mock.calls).toHaveLength(1)
    })
