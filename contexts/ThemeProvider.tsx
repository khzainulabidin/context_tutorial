'use client';

import { createContext, PropsWithChildren, useContext, useState } from "react";

type ThemeType = 'light' | 'dark';

type ThemeContextType = {
    theme: ThemeType;
    setTheme: Function;
}

const DEFAULT_VALUE: ThemeContextType = {
    theme: 'light',
    setTheme: () => { },
}

export const ThemeContext = createContext<ThemeContextType>(DEFAULT_VALUE);

const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<ThemeType>(DEFAULT_VALUE.theme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export default ThemeProvider;