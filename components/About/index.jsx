import Image from 'next/image'
import { BsFileTextFill } from 'react-icons/bs'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'
import { Habilities } from './Habilities'

export function About() {
  const textBold = 'font-bold dark:text-textLight-500'
  const paragraphStyle =
    'mt-7 text-justify text-xl leading-[22.5px] tracking-wide text-dark-100 dark:text-textLight-600 max-sm:text-lg max-sm:leading-6'
  return (
    <div className="mt-14 flex h-full w-full justify-center">
      <section className="h-max w-full max-w-customWidth max-md:px-10">
        <div
          className="relative mt-9 flex items-end justify-between after:absolute after:-bottom-4 
          after:h-px after:w-full after:bg-light-700 after:content-[''] dark:after:bg-dark-100"
        >
          <div className="flex w-full items-end">
            <div className=' w-full max-w-[56px] h-full max-h-[56px] overflow-hidden rounded-full flex justify-center 
              items-center max-sm:max-w-[40px] max-sm:max-h-[40px]'
            >
              <Image src={'/photo.jpg'} width={56} height={90} layout='intrinsic' alt='Photo Guilherme'/>
            </div>
            <h2 className="ml-2 text-2xl font-bold max-sm:text-base max-sm:leading-4 max-md:leading-5">Guilherme Ferreira</h2>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/guibrbs"
              target={'_blank'}
              rel="noreferrer"
              className="hover:brightness-200"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/guibrbs/"
              target={'_blank'}
              rel="noreferrer"
              className="hover:brightness-200"
            >
              <SiLinkedin size={20} />
            </a>
            <a
              href={'mailto: mrguilhermeferreira@gmail.com'}
              target={'_blank'}
              rel="noreferrer"
              className="hover:brightness-200"
            >
              <SiGmail size={20} />
            </a>
            <a
              href="/CurriculoGuilhermeFerreira.pdf"
              target={'_blank'}
              rel="noreferrer"
              className="hover:brightness-200"
            >
              <BsFileTextFill size={20} />
            </a>
          </div>
        </div>
        <div className={`${paragraphStyle} `}>
          <p>
            Eu sou o Guilherme, sou{' '}
            <span className={textBold}>t??cnico em inform??tica</span> e atualmente
            estou fazendo gradua????o em{' '}
            <span className={textBold}>Engenharia de Software</span> pela
            <span className={textBold}> Universidade de Bras??lia. </span>
          </p>
          <p className='mt-4'>
            Em <span className={textBold}>2017</span> tive meu primeiro contato com <span className={textBold}> programa????o</span> dentro do Ensino
            M??dio, no qual eu cursava juntamente o curso de t??cnico em
            inform??tica, e atrav??s dos <span className={textBold}> conte??dos passados</span> pelos professores, eu me
            apaixonei pelo desenvolvimento web, e atrav??s dessa experi??ncia, em
            <span className={textBold}> 2020</span> eu passei na Universidade de Bras??lia para cursar Engenharia de
            Software, e at?? ent??o estou <span className={textBold}> amando o curso.</span>
          </p>
          <p className='mt-4'>
            Pretendo seguir a ??rea de desenvolvimento{' '}
            <span className={textBold}>Web e Mobile</span> com a ambi????o de
            participar das equipes de desenvolvimento de{' '}
            <span className={textBold}>grandes empresas</span>, me tornando uma{' '}
            <span className={textBold}>refer??ncia</span> para os profissionais da
            ??rea.
          </p>
          <p className='mt-4'>
            Atualmente sou trainee na{' '}
            <a
              href="https://orcestra.com.br/"
              className="font-extrabold underline decoration-1 dark:text-textLight-500"
              target={'_blank'}
              rel="noreferrer"
            >
              Orc&apos;estra Gamifica????o 
            </a>
            {' '} a <span className={textBold}>primeira empresa j??nior de gamifica????o do Brasil</span> e est?? sendo um
            momento muito <span className={textBold}> prazeroso e divertido.</span>
          </p>
        </div>
        <h2 className="mt-7 text-2xl font-bold max-md:text-center">Habilidades</h2>
        <Habilities />
      </section>
    </div>
  )
}
