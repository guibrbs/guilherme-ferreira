import { ThemeChanger } from './ThemeChanger'
import { Navigation } from './Navigation'
import Link from 'next/link'

export function Header(){
    return(
        <header className="flex justify-center items-center gap-56 w-screen h-16 bg-light-300/90 dark:bg-dark-500/90 fixed top-0 z-20 backdrop-blur-md">
            <nav className="flex items-center">
                <Link href={"/"}>
                    <a className="text-xl font-bold hover:text-dark-300 dark:hover:text-textLight-300 transition-colors mr-9">
                        Guilherme Ferreira
                    </a>
                </Link>
                <Navigation />
            </nav>
            <ThemeChanger />
        </header>
    )
}