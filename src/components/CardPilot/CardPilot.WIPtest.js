import { render, screen, expect } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CardPilot from './CardPilot';
import axios from 'axios';

//https://stackoverflow.com/questions/52396724/typeerror-axios-get-is-not-a-function

jest.mock('axios')

console.log('axios', axios)

test('renders Pilot data', async () => {

    axios.get.mockReturnValueOnce({
            "results": [{
                "name": "Luke Skywalker"
            }]
    })

    render(<CardPilot idPilot={1} />)

 const pilotName = await screen.findByText(/luke skywalker/i);

 expect.pilotName.toBeInTheDocument();

    screen.debug()

})

test('renders Pilot image', async () => {

    axios.get.mockReturnValueOnce({
        config: {
            url: "npm"
        }
    })

    render(<CardPilot idPilot={13} />)

await expect(getByTestId('bgPilot')).toHaveStyle(`background-image: url(${props.bgShowImg})`)



    screen.debug()

})



test('renders loading', async () => {

    axios.get.mockReturnValueOnce({
            "results": [{
                "name": "Luke Skywalker"
            }]
    })

    render(<CardPilot idPilot={1} />)

 const loadingTxt = screen.getByText(/loading/i);

 expect.loadingTxt.toBeInTheDocument();

    screen.debug()

})

//CLUE: https://stackoverflow.com/questions/74519373/typeerror-axios-default-get-is-not-a-function/74520094