import { render, expect } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Films from './Films';

describe('<Films />', () => {
    let component

    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Films />
            </BrowserRouter>
        )
    })

    test('renders content', () => {
        component; 

    })

});


test('renders content', () => {
    const filmsArray = [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/6/"
            ]

    const component = render(<Films filmList={filmsArray} />)

    console.log(component)
})