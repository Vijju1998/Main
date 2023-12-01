import React, { FC, useMemo, useState, createContext } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { createTheme, CssBaseline, IconButton, ThemeProvider } from '@mui/material'
import Header from '@component/component/Header'
import darkTheme from '@component/theme/darkTheme';
import lightTheme from '@component/theme/lightTheme';
import Layout from '@component/component/Layout'

const ColorModeContext = createContext({ toggleColorMode: () => { } });

const App: FC<AppProps> = ({
  Component, pageProps: { session, ...pageProps }
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>("dark");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prev => prev === 'dark' ? 'light' : 'dark')
    }
  }), [mode])


  const darkThemeOption = useMemo(
    () =>
      createTheme({
        ...darkTheme

      }), [mode]);


  const ligthThemeOption = useMemo(
    () =>
      createTheme({
        ...lightTheme

      }), [mode]);



  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeOption : ligthThemeOption}>
        <SessionProvider session={session}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>
            <Component {...pageProps} />
          </Layout> 
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default App;