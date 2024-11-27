import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>I am styled by theme context!</button>;
}

export default ThemedButton;