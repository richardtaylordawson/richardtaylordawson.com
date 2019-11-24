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
  let themeToUse
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
  const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
  const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified

  if (isDarkMode) themeToUse = Themes.dark
  if (isLightMode) themeToUse = Themes.light
  if (isNotSpecified || hasNoSupport) {
    const now = new Date()
    const hour = now.getHours()

    if (hour < 4 || hour >= 16) {
      themeToUse = Themes.dark
    }
  }

  const [theme, setTheme] = useState(themeToUse)
  const value = useMemo(() => [theme, setTheme], [theme])

  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && setTheme(Themes.dark))
  window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && setTheme(Themes.light))

  return <ThemeContext.Provider value={value} {...props} />
}

export { ThemeProvider, useTheme }
