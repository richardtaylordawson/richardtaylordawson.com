import React, { useState, useContext, createContext, useMemo } from "react"
import { Themes } from "./"

const ThemeContext = createContext()

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }

  return context
}

const ThemeProvider = props => {
  const [theme, setTheme] = useState(Themes.light)
  const value = useMemo(() => [theme, setTheme], [theme])

  return <ThemeContext.Provider value={value} {...props} />
}

export { ThemeProvider, useTheme }
