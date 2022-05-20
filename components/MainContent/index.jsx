import Avatar from './Avatar'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function MainContent(){
    return(
        <div className='flex w-full h-full justify-center mt-20'>
            <section className='w-full max-w-customWidth h-full max-h-max flex flex-1 justify-center space-x-12 relative after:absolute 
            after:content[""] after:w-full after:h-px after:bg-dark-300 dark:after:bg-textLight-500 after:-bottom-16'>
                <Avatar />
                <div className='w-full max-w-txtWidth'>
                    <p className='text-5xl font-bold '>Guilherme Ferreira</p>
                    <p className='text-2xl font-light dark:text-textLight-600'>Web &amp; Mobile Developer (Fullstack)</p>
                    <p className='w-full font-light text-2xl mt-6 dark:text-textLight-600 text-dark-500 leading-7'>
                        Sou estudante de <b className='dark:text-textLight-500 font-bold'><i>Engenharia de Software</i></b> pela 
                        <b className='dark:text-textLight-500 font-bold'><i> Universidade de Brasília</i></b>. 
                        Esse é o meu portfólio, onde você consegue encontrar alguns de meus projetos 
                        como <b className='dark:text-textLight-500 font-bold'><i>Desenvolvedor Web</i></b>. Se estiver procurando alguém 
                        <b className='dark:text-textLight-500 font-bold'><i> competente e focado</i></b>, hoje é seu dia de sorte, pois esse sou eu!
                    </p>
                    <div className='flex mt-7 items-center space-x-3'>
                        <button className='w-52 h-12 dark:bg-textLight-500 bg-dark-500 dark:text-dark-500 text-textLight-500 
                        font-bold text-xl rounded-lg hover:brightness-110 transition-all'>
                            Entre em contato
                        </button>
                        <a href="" className="flex justify-center relative h-12 w-12 items-center hover:scale-110 transition ease-in-out hover:bg-light-100 
                        hover:dark:bg-dark-100 rounded-md hover:after:block after:hidden after:-bottom-9 after:absolute after:content-['Github'] after:py-1 after:px-2 
                        after:rounded-md after:bg-light-100 dark:after:bg-dark-100 text-sm font-medium after:transition after:ease-in-out after:duration-300
                        after:font-semibold">
                            <BsGithub size={32}/>
                        </a>
                        <a href="" className="flex justify-center relative h-12 w-12 items-center hover:scale-110 transition ease-in-out hover:bg-light-100 
                        hover:dark:bg-dark-100 rounded-md hover:after:block after:hidden after:-bottom-9 after:absolute after:content-['Linkedin'] after:py-1 after:px-2 
                        after:rounded-md after:bg-light-100 dark:after:bg-dark-100 text-sm font-medium after:transition after:ease-in-out after:duration-300
                        after:font-semibold"><BsLinkedin size={32} /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}