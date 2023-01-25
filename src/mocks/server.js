import { setupServer } from 'msw/node';
import { getHandlers } from './handlers';

export const startServer = () => {
    const server = setupServer(...getHandlers());

    beforeEach(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
};
