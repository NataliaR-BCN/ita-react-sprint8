import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardPilot from './CardPilot';
import { startServer } from '../../mocks/server';


describe('CardPilot', () => {
    startServer();

    
    test('renders loading text while data is not delivered yet', () => {
   
        render(<CardPilot />);

        const loadingTxt = screen.getByText(/loading pilot data/i);

        expect(loadingTxt).toBeInTheDocument();

    })


    test('renders Pilot data, including nested data (homeworld and species)', async () => {

       render(<CardPilot />);
   
       const pilotName = await screen.findByText(/luke skywalker/i);
       const pilotHeight = await screen.findByText('172 cm');
       const pilotMass = await screen.findByText('77 kg');
       const pilotHomeworld = await screen.findByText(/tatooine/i);
       const pilotSpecies = await screen.findByText(/-/i);

       expect(pilotName).toBeInTheDocument();
       expect(pilotHeight).toBeInTheDocument();
       expect(pilotMass).toBeInTheDocument();
       expect(pilotHomeworld).toBeInTheDocument();
       expect(pilotSpecies).toBeInTheDocument();

    })

})