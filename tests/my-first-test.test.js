import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Index from '../pages/index';

// test("Example test", ()=>{
//     const sum = 1 + 2;
//     expect(sum).toBe(3);
// })

describe('Index page', () => {
    it('should render', () => {
        render(<Index />);
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    })
});
