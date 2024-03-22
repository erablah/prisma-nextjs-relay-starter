import { TuitionType } from '@prisma/client';
import React, { createContext, useContext, useState } from 'react';

interface TuitionApplication {
    couponId?: string;
    userId?: string;
    startTime?: Date;
    endTime?: Date;
    type?: TuitionType
}

// Define the type for the context
interface TuitionContextType {
    TuitionApplication: TuitionApplication | null;
    setTuitionApplication: React.Dispatch<React.SetStateAction<TuitionApplication | null>>;
}

// Create the context
const TuitionContext = createContext<TuitionContextType | undefined>(undefined);

// Define a custom hook to consume the context
export const useTuitionContext = (): TuitionContextType => {
    const context = useContext(TuitionContext);
    if (!context) {
        throw new Error('useTuitionContext must be used within a TuitionProvider');
    }
    return context;
};

// Define the provider component
export const TuitionProvider = ({ children }: { children: React.ReactNode }) => {
    const [TuitionApplication, setTuitionApplication] = useState<TuitionApplication | null>(null);

    return (
        <TuitionContext.Provider value={{ TuitionApplication, setTuitionApplication }}>
            {children}
        </TuitionContext.Provider>
    );
};