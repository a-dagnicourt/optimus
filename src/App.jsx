import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material";
import { indigo, deepOrange, deepPurple, orange } from "@mui/material/colors";

import Dashboard from "./containers/Dashboard";

export default function App() {
    const [darkState, setDarkState] = useState(true);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? orange[600] : indigo[400];
    const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[600];
    const theme = createTheme({
        palette: {
            mode: palletType,
            primary: {
                main: mainPrimaryColor,
            },
            secondary: {
                main: mainSecondaryColor,
            },
        },
    });
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    return (
        <ThemeProvider theme={theme}>
            <Dashboard
                darkState={darkState}
                handleThemeChange={handleThemeChange}
            />
        </ThemeProvider>
    );
}
