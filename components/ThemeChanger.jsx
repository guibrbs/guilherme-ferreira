const { useTheme } = require("next-themes")
const { useEffect, useState } = require("react")
import { Moon, Sun } from "phosphor-react";

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    const handleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    if (!mounted) return null
    return (
        <button
            type="button"
            onClick={handleTheme} 
            className="flex items-center justify-center rounded-lg w-8 h-8 text-textLight-500 hover:text-textLight-300
            bg-elementary-300 hover:bg-elementary-500 transition-colors 
            dark:bg-brand-300 dark:hover:bg-brand-500 dark:text-dark-500" 
            >
            {theme === 'light' ? <Moon weight="fill" /> : <Sun weight="fill" />}
        </button>
    )
}