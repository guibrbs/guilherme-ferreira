import { BsFileTextFill } from 'react-icons/bs'
import { SiGithub, SiGmail, SiLinkedin, SiMailchimp } from 'react-icons/si'
import { Habilities } from './Habilities'

export function About() {
  return (
    <div className="mt-32 flex h-full w-full justify-center">
      <section className="h-max w-full max-w-customWidth">
        <div className="relative mt-9 flex items-end after:absolute after:-bottom-4 after:h-px 
          after:w-full after:bg-light-700 after:content-[''] dark:after:bg-dark-100 justify-between">
          <div className='flex w-full items-end'>
            <img className="h-14 max-h-[56px] w-full max-w-[56px] rounded-full bg-[url('/photo.jpg')] bg-cover bg-center bg-no-repeat" />
            <h2 className="ml-2 text-2xl font-bold">Guilherme Ferreira</h2>
          </div>
          <div className='space-x-4 flex'>
            <a href="https://github.com/guibrbs" target={'_blank'} className='hover:brightness-200'>
              <SiGithub size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/guibrbs/" target={'_blank'} className='hover:brightness-200'>
              <SiLinkedin size={20}/>
            </a>
            <a href={"mailto: mrguilhermeferreira@gmail.com"} target={'_blank'} className='hover:brightness-200'>
              <SiGmail size={20}/>
            </a>
            <a href="/CurriculoGuilhermeFerreira.pdf" target={'_blank'} className='hover:brightness-200'>
              <BsFileTextFill size={20}/>
            </a>
          </div>
        </div>
        <p className="mt-7 text-justify text-xl leading-[22.5px] tracking-wide text-dark-100 dark:text-textLight-600">
          Eu sou o Guilherme, sou{' '}
          <span className="font-extrabold dark:text-textLight-500">técnico em informática</span> e
          atualmente estou fazendo graduação em{' '}
          <span className="font-extrabold dark:text-textLight-500">Engenharia de Software</span> pela
          <span className="font-extrabold dark:text-textLight-500"> Universidade de Brasília. </span>
          Pretendo seguir a área de desenvolvimento{' '}
          <span className="font-extrabold dark:text-textLight-500">Web e Mobile</span> com a ambição de
          participar das equipes de desenvolvimento de{' '}
          <span className="font-extrabold dark:text-textLight-500">grandes empresas</span>, me tornando
          uma <span className="font-extrabold dark:text-textLight-500">referência</span> para os
          profissionais da área. Atualmente sou trainee na{' '}
          <a
            href="https://orcestra.com.br/"
            className="font-extrabold underline decoration-1 dark:text-textLight-500"
            target={'_blank'}
          >
            Orc'estra Gamificação.
          </a>
        </p>
        <h2 className="text-2xl font-bold mt-7">Habilidades</h2>
        <Habilities />
      </section>
    </div>
  )
}
