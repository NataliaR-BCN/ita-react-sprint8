import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StarshipDetails from './StarshipDetails';
import { startServer } from '../../mocks/server';

describe('Starship Details', () => {
    startServer();

    
    test('renders loading text while data is not delivered yet', () => {
   
        render(<StarshipDetails />);

        const loadingTxt = screen.getByText(/loading data, please wait.../i);

        expect(loadingTxt).toBeInTheDocument();

    })


    test('renders Starship data)', async () => {

       render(<StarshipDetails />);
   
       const starshipName = await screen.findByText(/Imperial shuttle/i);
       const starshipModel = await screen.findByText(/Lambda-class T-4a shuttle/i);
       const starshipClass = await screen.findByText(/Armed government transport/i);

       expect(starshipName).toBeInTheDocument();
       expect(starshipModel).toBeInTheDocument();
       expect(starshipClass).toBeInTheDocument();

    })


})