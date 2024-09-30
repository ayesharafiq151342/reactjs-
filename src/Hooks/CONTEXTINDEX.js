import React from 'react';
import { BioContext } from './CONTEXTINDEX.js';

// The Provider component
export const BioProvider = ({ children }) => {
    const MyName = "Ash";
    const age = 23;

    return (
        <BioContext.Provider value={{ MyName, age }}>
            {children}
        </BioContext.Provider>
    );
};
