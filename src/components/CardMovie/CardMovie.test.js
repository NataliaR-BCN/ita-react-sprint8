import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardMovie from './CardMovie';
import { startServer } from '../../mocks/server';


describe('CardMovie', () => {
    startServer();

    
    test('renders loading text while data is not delivered yet', () => {
   
        render(<CardMovie />);

        const loadingTxt = screen.getByText(/loading movie data/i);

        expect(loadingTxt).toBeInTheDocument();

    })


    test('renders Movie data)', async () => {

       render(<CardMovie />);
   
       const movieTitle = await screen.findByText(/a new hope/i);
       const movieEpidose = await screen.findByText(4);
       const movieDirector = await screen.findByText(/george lucas/i);
    

       expect(movieTitle).toBeInTheDocument();
       expect(movieEpidose).toBeInTheDocument();
       expect(movieDirector).toBeInTheDocument();

    })

})

