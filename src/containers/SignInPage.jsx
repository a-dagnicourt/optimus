import * as React from "react";

import { ThemeProvider, useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import GoogleButton from "react-google-button";

import { signIn } from "../firebaseConfig";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function SignInPage(props) {
    const { handleThemeChange } = props;
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h3">
                        Optimus
                    </Typography>
                    <IconButton
                        sx={{ mt: 4 }}
                        onClick={() => {
                            handleThemeChange();
                        }}
                        color="inherit"
                    >
                        {theme.palette.mode === "dark" ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                    <Box sx={{ m: 10 }}>
                        <GoogleButton
                            onClick={() => signIn()}
                            type={
                                theme.palette.mode === "dark" ? "light" : "dark"
                            }
                        />
                    </Box>
                </Box>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}
