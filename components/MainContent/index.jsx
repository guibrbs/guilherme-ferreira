import Avatar from './Avatar'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';

export function MainContent(){
    return(
        <div className='flex w-full h-full justify-center mt-36 max-sm:mt-24'>
            <section className='w-full max-w-customWidth h-full max-h-max flex flex-1 justify-center space-x-12 relative after:absolute 
                after:content[""] after:w-full after:h-px after:bg-light-700 dark:after:bg-dark-100 after:-bottom-16 max-sm:space-x-0 max-sm:px-10'>
                <Avatar/>
                <div className='w-full max-w-txtWidth max-sm:max-w-[350px]'>
                    <p className='text-[2.9rem] leading-[2.9rem] font-bold max-sm:text-[30px] max-sm:leading-[30px]'>Guilherme Ferreira</p>
                    <p className='text-2xl font-light dark:text-textLight-600 max-sm:text-[15px] max-sm:leading-[17px]'>
                        Web &amp; Mobile Developer (Fullstack)
                    </p>
                    <p className='w-full font-light text-2xl mt-6 dark:text-textLight-600 text-dark-500 leading-7 max-sm:text-xl max-sm:leading-6
                    max-sm:text-justify max-sm:mt-3'>
                        Sou estudante de <b className='dark:text-textLight-500 font-bold'>Engenharia de Software</b> pela 
                        <b className='dark:text-textLight-500 font-bold'> Universidade de Brasília</b>. 
                        Esse é o meu portfólio, onde você consegue encontrar alguns de meus projetos 
                        como <b className='dark:text-textLight-500 font-bold'>Desenvolvedor Web</b>. Se estiver procurando alguém 
                        <b className='dark:text-textLight-500 font-bold'> competente e focado</b>, hoje é seu dia de sorte, pois esse sou eu!
                    </p>
                    <div className='flex mt-7 items-center space-x-3 max-sm:mt-4'>
                        <button className='w-52 h-12 dark:bg-textLight-500 bg-dark-500 dark:text-dark-500 text-textLight-500 
                        font-bold text-xl rounded-lg hover:brightness-110 transition-all'>
                            Entre em contato
                        </button>
                        <Link href="https://github.com/guibrbs">
                            <a target="_blank" rel="noopener noreferrer"
                            className="flex justify-center relative h-12 w-12 items-center hover:scale-110 transition ease-in-out hover:bg-light-100 
                            hover:dark:bg-dark-100 rounded-md hover:after:block after:hidden after:-bottom-9 after:absolute after:content-['Github'] after:py-1 after:px-2 
                            after:rounded-md after:bg-light-100 dark:after:bg-dark-100 text-sm font-medium after:transition after:ease-in-out after:duration-300
                            after:font-semibold">
                                <BsGithub size={32}/>
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/guibrbs/">
                            <a target="_blank" rel="noopener noreferrer"
                            className="flex justify-center relative h-12 w-12 items-center hover:scale-110 transition ease-in-out hover:bg-light-100 
                            hover:dark:bg-dark-100 rounded-md hover:after:block after:hidden after:-bottom-9 after:absolute after:content-['Linkedin'] after:py-1 after:px-2 
                            after:rounded-md after:bg-light-100 dark:after:bg-dark-100 text-sm font-medium after:transition after:ease-in-out after:duration-300
                            after:font-semibold"><BsLinkedin size={32} /></a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}