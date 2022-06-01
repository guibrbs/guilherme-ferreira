import { UnderlineLayout } from '../UnderlineLayout'
import { Model3D } from './Model3D'

export function CuriositySection() {
  const boldClass = 'font-bold dark:text-textLight-500'
  return (
    <div className="mt-32 flex h-full w-full justify-center">
      <section className="flex h-full max-h-max w-full max-w-customWidth items-center justify-evenly relative 
      after:content[''] after:w-full after:h-px after:bg-light-700 after:dark:bg-dark-100 after:absolute after:-bottom-16 max-md:flex-col">
        <div className="w-72 max-md:w-full max-md:max-w-[293px]">
          <p className="flex h-14 w-full max-w-[238px] items-center justify-center rounded-lg bg-light-100 text-3xl font-bold dark:bg-dark-100
          max-md:m-auto max-sm:text-2xl ">
            CURIOSIDADE
          </p>
          <p className="mt-5 text-2xl leading-7 dark:text-textLight-600 max-md:text-center max-sm:text-xl max-sm:leading-6">
            <span
              className={`${boldClass} block after:not-italic after:content-['⚡']`}
            >
              Harry Potter
            </span>
            é minha
            <span className={boldClass}> série de filmes favorita</span>, e o
            <span className={boldClass}> objeto 3D</span> ao lado representa um{' '}
            <span className={boldClass}>dormitório</span> de uma das
            <span className={boldClass}> quatro casas</span> da Escola de Magia
            e Bruxaria de <span className={boldClass}>Hogwarts</span>, a{' '}
            <span className={boldClass}>Grifinória</span>.
          </p>
          <p className="mt-5 text-sm leading-4 tracking-wide dark:text-textLight-600 max-md:text-center">
            Se não conhece nada sobre o universo mágico, confira o
            <a
              href="https://www.wizardingworld.com/"
              target="_blank" rel="noopener noreferrer"
              className="group relative font-bold dark:text-textLight-500"
            >
              {' '}
              site oficial. <UnderlineLayout />
            </a>
          </p>
        </div>
        <div className="h-[347px] w-[350px] max-md:mt-2 max-md:h-[225px] max-md:w-[203px]">
          <Model3D />
        </div>
      </section>
    </div>
  )
}
