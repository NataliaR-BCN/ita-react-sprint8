import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';




describe('<Header />', () => {
    let component;

    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })


test('renders navigation menu',  () => {
    const menuItem = component.getByText(/HOME/i);
    expect(menuItem).toBeInTheDocument();
});

test('renders signup and Login when is not authenticathed',  () => {
    const menuItem = component.getByText(/SIGN UP/i);
    expect(menuItem).toBeInTheDocument();

    const menuItemLog = component.queryByText(/LOG OUT/i);
    expect(menuItemLog).not.toBeInTheDocument();
});


//test('renders active class styles when its page is shown',  () => {
  //  //https://stackoverflow.com/questions/70974339/testing-navigation-with-react-testing-library
 // const menuItem = component.getByText(/SIGN UP/i);

   // expect(menuItem).toHaveStyle({fontWeight : 'bold'});
   // screen.debug
 //});

//test('renders logout when is authenticathed',  () => {
//    const menuItem = component.getByText(/LOG OUT/i);
//    expect(menuItem).toBeInTheDocument();
//});

});