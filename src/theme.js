// import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// A custom theme for this app
const theme = createMuiTheme({
    // palette: {
    //     primary: {
    //         light: purple[300],
    //         main: purple[500],
    //         dark: purple[700],
    //     },
    //     secondary: {
    //         light: green[300],
    //         main: green[500],
    //         dark: green[700],
    //     },
    // },
    // typography: {
    //     useNextVariants: true,
    // },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    background:
                        'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)',
                },
            },
        },
    },
});

export default theme;

/*
function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
*/
