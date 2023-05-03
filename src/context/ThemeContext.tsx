import { createContext, useContext, useState } from 'react';
import { ThemeChoices } from '@/types/utils';

interface ThemeContextProps {
    themeMode: ThemeChoices;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

const initialThemeContext = {
    themeMode: ThemeChoices.light,
    toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(
    initialThemeContext
);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ThemeChoices>(ThemeChoices.light);

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === ThemeChoices.light ? ThemeChoices.dark : ThemeChoices.light));
    };

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};