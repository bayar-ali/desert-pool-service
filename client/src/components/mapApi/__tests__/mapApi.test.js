import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import MapApi from '../MapApi';

describe('MapApi', () => {
    test('renders map api', () => {
        render(<Map />);

    });
});
