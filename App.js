import React from 'react'
import { ThemeProvider } from 'styled-components'

import NavigationOptions from './src/NavigationOptions'
import appTheme from './src/theme'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={appTheme}>
        <NavigationOptions />
      </ThemeProvider>
    )
  }
}
