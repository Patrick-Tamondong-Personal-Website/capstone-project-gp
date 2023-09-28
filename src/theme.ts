import { createTheme } from "@mui/material";
//import { Experimental_CssVarsProvider } from "@mui/material";
import { experimental_extendTheme as extendTheme } from "@mui/material";
/* import { CSSObject, SxProps, Theme } from "@mui/material/styles";

const theme2:Theme = {
    unstable_sx: function (props: SxProps<Theme>): CSSObject {
        throw new Error("Function not implemented.");
    },
    unstable_sxConfig: undefined,
    mixins: undefined,
    palette: undefined,
    shadows: [],
    transitions: undefined,
    typography: undefined,
    zIndex: undefined,
    shape: undefined,
    breakpoints: undefined,
    direction: "ltr",
    spacing: undefined
} */
const theme2 = extendTheme();


const theme = createTheme({
    palette: {
        primary: {
            main: "#202020",
        },
        secondary: {
            main: "#000000",
        },
    },
    typography: {
        h1:{
            fontSize:"clamp(0.59rem, calc(0.58rem + 0.03vw), 0.63rem)"
        },
        h2:{
            fontSize:"clamp(1.20rem, calc(0.14rem + 4.05vw), 5.00rem)"
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },

});

export default theme;