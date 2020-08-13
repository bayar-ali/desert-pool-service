import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import MDBCol from '../LandingPage';

describe('MDBCol', () => {
    test('renders MDBCol component', () => {
        // Confirming that MDBCol div is rendering
        render(<MDBCol />);
        // Confirming that the header is going to be present
        expect(screen.getByText('Your Local pool professional')).toBeInTheDocument();
        // Confirming images to also be pesent
        expect(screen.getByAltText('Granite Spa Inground Pool')).toBeInTheDocument();
        expect(screen.getByAltText('Gazebo Pool')).toBeInTheDocument();
        expect(screen.getByAltText('Wading Pool')).toBeInTheDocument();
    });
});