'use client';

import { useThemeContext } from "@/contexts/ThemeProvider";

const HandleTheme = () => {
    const {theme, setTheme} = useThemeContext();

    const changeTheme = (): void => {
        setTheme(() => theme === 'light' ? 'dark' : 'light');
    }

    return (
        <button onClick={changeTheme}>Change theme</button>
    )
}

export default HandleTheme;