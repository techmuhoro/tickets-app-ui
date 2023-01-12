import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
}
