import Link from "next/link";
import { Sun } from "phosphor-react";

export default function Header(){
    return(
        <div className="flex justify-center items-center space-x-36 w-screen h-20 bg-dark-500">
            <a href="/" className="text-2xl font-bold hover:text-textLight-300 transition-colors">Guilherme Ferreira</a>
            <nav className="flex">
                {[
                    ['Projetos', '/projects', 'key: 1'],
                    ['Sobre', '/about', 'key: 2'],
                    ['Source', '/', 'key: 3'],
                ].map(([title, url, id]) => (
                    <div className="group relative w-fit mx-4" key={id}>
                        <a href={url} className="font-normal duration-300 hover:text-textLight-300">
                            {title}
                        </a>
                        <span className="absolute -bottom-px left-1/2 w-0 h-px bg-brand-300 group-hover:w-1/2 
                        group-hover:transition-all hover:duration-500 duration-300 ease-in-out"/>
                        <span className="absolute -bottom-px right-1/2 w-0 h-px bg-brand-300 group-hover:w-1/2 
                        group-hover:transition-all hover:duration-500 duration-300 ease-in-out"/>
                    </div>
                ))}
            </nav>
            <button className="flex items-center justify-center rounded-lg text-dark-500 w-8 h-8 bg-brand-300 hover:bg-brand-500 transition-colors">
                <Sun weight="fill"/>
            </button>
        </div>
    )
}