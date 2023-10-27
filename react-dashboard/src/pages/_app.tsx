import React, { FC, useMemo, useState } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Box, createTheme, CssBaseline, IconButton, ThemeProvider } from '@mui/material'
import ThemeToggleButton from '@component/component/ThemeToggleButton';



const App: FC<AppProps> = ({
  Component, pageProps: { session, ...pageProps }
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>("dark");
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prev => prev === 'dark' ? 'light' : 'dark')
    }
  }), [mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }), [mode]);

  return (

    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <CssBaseline />
        <Box sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3
        }}>
          
          <ThemeToggleButton colorMode={colorMode.toggleColorMode} theme={theme} />
        </Box>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>

  )
}
export default App;