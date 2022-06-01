import { ThemeChanger } from './ThemeChanger'
import { Navigation } from './Navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const [hamburguerMenu, setHamburguerMenu] = useState(false)
  const hamburguerMenuActive = () => {
    setHamburguerMenu(!hamburguerMenu)
  }
  return (
    <header
      className="fixed top-0 z-20 flex h-16 w-screen items-center 
        justify-center gap-56 bg-light-300/90 px-10 backdrop-blur-md dark:bg-dark-500/90 max-md:justify-between max-md:gap-2"
    >
      <nav className="flex items-center">
        <Link href={'/'}>
          <a className="mr-9 text-xl font-bold transition-colors hover:text-dark-300 dark:hover:text-textLight-300 max-md:mr-0 
          max-md:text-base max-md:w-16 max-md:leading-4">
            Guilherme Ferreira
          </a>
        </Link>
        <Navigation hamburguerMenu={hamburguerMenu}/>
      </nav>
      <ThemeChanger />
      <div className='hidden w-fit max-md:flex justify-center'>
        <span className={`hidden max-md:block w-9 h-1 relative bg-dark-300 dark:bg-textLight-500 rounded-md  
        after:content-[""] after:absolute after:w-full after:h-1 after:bg-dark-300 after:dark:bg-textLight-500 after:mt-2 after:rounded-md 
        after:transition-all after:duration-300
        before:content-[""] before:absolute before:w-full before:h-1 before:bg-dark-300 before:dark:bg-textLight-500 before:-mt-2 before:rounded-md
        before:transition-all before:duration-300
        ${hamburguerMenu ? 'after:transform after:rotate-45 before:-rotate-45 after:mt-0 before:mt-0 bg-opacity-0 dark:bg-opacity-0 transition' : ''}
        `}
        onClick={hamburguerMenuActive} 
        />
      </div>
    </header>
  )
}
