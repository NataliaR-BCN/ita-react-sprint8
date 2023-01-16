import { render, expect } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/';
import Intro from './Intro';


describe('<Intro />', () => {
    let component

    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Intro />
            </BrowserRouter>
        )
    })

    test('renders content', () => {
        component; 

    })

});


