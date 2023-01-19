import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardMovie from './CardMovie';



test('render movie with api data', async () => {

    render(<CardMovie id={1} />)

    //initial loading 
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    //data displayed 
    expect(await screen.findByText(/a new hope/i, undefined, {timeout: 5000})).toBeInTheDocument();

    //loading disappears
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();

})
