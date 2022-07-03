const { useTheme } = require('next-themes')
const { useEffect, useState } = require('react')
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'phosphor-react'

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const styles = 'flex items-center justify-center rounded-lg w-8 h-8'
  useEffect(() => setMounted(true), [])
  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  if (!mounted) return null
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {theme === 'light' ? (
          <motion.button
            key={theme ? 'light' : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            type="button"
            onClick={handleTheme}
            className={`${styles} bg-elementary-300 text-textLight-500 transition-colors hover:bg-elementary-500 hover:text-textLight-300`}
          >
            <Moon weight="fill" />
          </motion.button>
        ) : (
          <motion.button
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            type="button"
            onClick={handleTheme}
            className={`${styles} bg-brand-300 text-dark-500 transition-colors hover:bg-brand-500`}
          >
            <Sun weight="fill" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
