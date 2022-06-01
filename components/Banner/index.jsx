import Image from "next/image"
import {UnderlineLayout} from '../UnderlineLayout'
import Layout from './Layout'

export function Banner({ homepage }) {
  const banner_map = [
    {
      link: '/projetos/indicaa',
      img: '/metabase.png',
      alt: 'Metabase',
      title: 'INDICAA',
      description:
        'Feito exclusivamente para coordenadores e pessoas da gestão da Universidade de Brasília, com o intuito de auxiliar a \
             administração das matérias ofertadas, indicando através de gráficos disponíveis no Metabase.',
      id: '1',
    },
    {
      link: '/projetos/nlw',
      img: '/nlw-impulse.png',
      alt: 'Nlw Impulse',
      title: 'Nlw Impulse',
      description:
        'Projeto pessoal seguindo os passos no NLW Return Impulse, realizado pela Rocketseat, com o objetivo de aprender novas tecnologias, \
        melhorar o desenvolvimento técnico e introduzir o desenvolvimento mobile.',
      id: '2',
    },
    {
      link: '/projetos/signin',
      img: '/sliding-signin.png',
      alt: 'image-sign-in',
      title: 'Sign in | Sign up',
      description:
        'Mini projeto pessoal com o objetivo de aprimorar as habilidades técnicas no qual envolve o desenvolvimento de formulários de sign in e sign up, alternando entre si \
            com animações sem nenhum framework.',
      id: '3',
    },
    {
      link: '/projetos/landing-page',
      img: '/landing-page.png',
      alt: 'Landing Page',
      title: 'Landing Page',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma Landing Page responsiva em qualquer dispositivo, além de incluir o modo noturno\
            animado.',
      id: '4',
    },
    {
      link: '/projetos/clone-netflix',
      img: '/clone-netflix.png',
      alt: 'Clone Netflix',
      title: 'Clone Netflix',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma interface parecida com a da Netflix, utilizando imagens captadas \
            através de uma API open source.',
      id: '5',
    },
    {
      link: '/projetos/interactive-rating',
      img: '/interactive-rating.png',
      alt: 'Interactive Rating Component',
      title: 'Interactive Rating Component',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento um componenete interativo de classificação. ',
      id: '6',
    },
    {
      link: '/projetos/covid-tracker',
      img: '/covid-tracker.png',
      alt: 'Covid Tracker',
      title: 'Covid Tracker',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de um rastreador de casos de \
            COVID-19 no Brasil e no mundo, através de uma API open source.',
      id: '7',
    },
  ]
  return (
    <>
      <Layout homepage={homepage}>
        {banner_map
          .filter(
            homepage
              ? (banner) => banner.id == '1' || banner.id == '2'
              : (banner) => banner.id
          )
          .map((banner) => {
            return (
              <a href={banner.link} className="group mt-12" key={banner.id}>
                <div className="relative flex h-60 w-full rounded-3xl border border-light-700 dark:border-dark-100 
                max-sm:max-w-[320px] max-sm:h-[106px] max-sm:rounded-xl">
                  <div
                    className="absolute z-0 h-full w-full max-w-xs rounded-3xl bg-light-100 transition-all duration-500 
                    ease-in-out group-hover:max-w-full dark:bg-dark-100 max-sm:rounded-xl max-sm:max-w-[100px]"
                  />
                  <div className="z-10 w-full max-w-imgWidth rounded-l-3xl overflow-hidden max-sm:rounded-l-xl">
                    <Image src={banner.img} layout='intrinsic' width={329} height={239} alt={banner.alt} />
                  </div>
                  <div className="relative ml-6 mr-6 flex h-full w-full flex-col justify-center max-sm:ml-2 max-sm:mr-4">
                    <h1 className="mb-1 text-2xl font-bold max-sm:text-sm max-md:mt-1">{banner.title}</h1>
                    <p className="text-lg leading-5 dark:text-textLight-600 max-sm:text-[8px] max-sm:leading-[8px]">
                      {banner.description}
                    </p>
                    <p className="relative mt-1 self-end text-xl font-bold max-sm:text-[10px] max-sm:mt-0">
                      Saiba mais
                      <UnderlineLayout />
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
      </Layout>
    </>
  )
}


