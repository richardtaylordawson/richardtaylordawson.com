import React, { useState, useContext, createContext, useMemo } from "react"

const MenuContext = createContext()

const useMenu = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error(`useMenu must be used within a MenuProvider`)
  }

  return context
}

const MenuProvider = props => {
  const [theme, setMenu] = useState(false)
  const value = useMemo(() => [theme, setMenu], [theme])

  return <MenuContext.Provider value={value} {...props} />
}

export { MenuProvider, useMenu }
