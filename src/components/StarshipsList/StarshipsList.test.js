import { render, screen, fireEvent, cleanup, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import StarshipsList from './StarshipsList';

describe('Starships component showing lit of starships', () => {



  afterEach(cleanup);

        test('renders starships list', () => {

        const fakeStarshipData = [{id: 9, name: 'Death Star', model: 'DS-1 Orbital Battle Station'}] 
        const { getAllByRole } =  render(   <BrowserRouter>
                <StarshipsList id={9} name={'DEATH STAR'} model= {'DS-1 Orbital Battle Station'} />
           </BrowserRouter>)


const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(2)

expect(listItems[0].textContent).toBe('DEATH STAR');

  screen.debug; //alta forma: https://stackoverflow.com/questions/57435680/whats-the-idiomatic-way-of-testing-a-list-with-dynamic-content-using-react-test

    })


});