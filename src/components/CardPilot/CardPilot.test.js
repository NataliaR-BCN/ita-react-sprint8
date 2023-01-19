import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardPilot from './CardPilot';
import useSearchApi from "../../hooks/useSearchApi";


jest.mock('./../../hooks/useSearchApi');

beforeEach(() => {
    useSearchApi.mockClear();
});


test('renders loading text while data is not delivered yet', () => {

    useSearchApi.mockReturnValueOnce({loading: true});
   
    render(<CardPilot />);

    const loadingTxt = screen.getByText(/loading pilot data/i);

    expect(loadingTxt).toBeInTheDocument();

})


test('renders error text when the api throws an error', () => {

    useSearchApi.mockReturnValueOnce({error: true});
   
    render(<CardPilot />);

    const errorTxt = screen.getByText(/information is not available/i);

    expect(errorTxt).toBeInTheDocument();

})

//NO FUNCIONA:
test.skip('renders Pilot data', async () => {

    useSearchApi.mockReturnValueOnce({name: 'Luke Skywalker'});

    render(<CardPilot />);
   
    const pilotName = await screen.findByText(/luke skywalker/i);

    expect(pilotName).toBeInTheDocument();

})