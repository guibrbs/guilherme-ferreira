import { useTheme } from "next-themes";
import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";

export default function Header(){
    return(
        <div className="flex justify-center items-center gap-36 w-screen h-20 bg-light-300 dark:bg-dark-500">
            <a href="/" className="text-2xl font-bold hover:text-dark-300 dark:hover:text-textLight-300 transition-colors">Guilherme Ferreira</a>
            <nav className="flex">
                {[
                    ['Projetos', '/projects', '1'],
                    ['Sobre', '/about', '2'],
                    ['Source', '/', '3', ],
                ].map(([title, url, id]) => (
                    <div className="group relative w-fit mx-4 flex" key={id}>
                        {id === '3' ? <BsGithub style={{marginRight: '4px', marginTop: '2.5px'}} /> : <></>}
                        <a href={url} className="font-normal duration-300 hover:text-dark-300 dark:hover:text-textLight-300">
                            {title}
                        </a>
                        <span className="absolute -bottom-px left-1/2 w-0 h-px bg-elementary-300 dark:bg-brand-300 group-hover:w-1/2 
                        group-hover:transition-all hover:duration-500 duration-300 ease-in-out"/>
                        <span className="absolute -bottom-px right-1/2 w-0 h-px bg-elementary-300 dark:bg-brand-300 group-hover:w-1/2 
                        group-hover:transition-all hover:duration-500 duration-300 ease-in-out"/>
                    </div>
                ))}
            </nav>
            <ThemeChanger />
        </div>
    )
}

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    const handleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    if (!mounted) return null
    return (
    <button 
        onClick={handleTheme} 
        className="flex items-center justify-center rounded-lg w-10 h-10 text-textLight-500 hover:text-textLight-300
        bg-elementary-300 hover:bg-elementary-500 transition-colors 
        dark:bg-brand-300 dark:hover:bg-brand-500 dark:text-dark-500" 
    >
        {theme === 'light' ? <Moon weight="fill" /> : <Sun weight="fill" />}
    </button>
    )
}