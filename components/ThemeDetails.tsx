'use client';

import { useThemeContext } from "@/contexts/ThemeProvider";

const ThemeDetails = () => {
    const {theme} = useThemeContext();

    return (
        <div>Current theme: {theme}</div>
    )
}

export default ThemeDetails;