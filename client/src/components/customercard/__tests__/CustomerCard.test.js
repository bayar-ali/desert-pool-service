import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import MDBInput from '../CustomerCard';

describe('MDBInput', () => {
    test('renders form component for customer card', () => {
        // Confirming that MDBCol div is rendering
        render(<MDBInput />);
        // Confirming that the header is going to be present
        expect(screen.getByPlaceholderText('Enter Customer First Name')).toBeInTheDocument();

    });
});
