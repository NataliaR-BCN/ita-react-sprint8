import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import StarshipDetails from './StarshipDetails';

describe('LoginForm component to Log IN (user not authenticated)', () => {

    beforeEach(() => {
        render(    
            <BrowserRouter>
                <StarshipDetails />
            </BrowserRouter>
        )
    })



});
