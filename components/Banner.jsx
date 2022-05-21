export function Banner() {
  const banner_map = [
    {
      link: '/projetos/INDICAA',
      img: '/metabase.png',
      alt: 'Metabase',
      title: 'INDICAA',
      description:
        'Feito exclusivamente para coordenadores e pessoas da gestão da Universidade de Brasília, com o intuito de auxiliar a \
             administração das matérias ofertadas, indicando através de gráficos disponíveis no Metabase.',
      id: '1',
    },
    {
      link: '/projetos/NLW',
      img: '/nlw-impulse.png',
      alt: 'Nlw Impulse',
      title: 'Nlw Impulse',
      description:
        'Projeto pessoal seguindo os passos no NLW Return Impulse, realizado pela Rocketseat, com o objetivo de aprender novas tecnologias, \
        melhorar o desenvolvimento técnico e introduzir o desenvolvimento mobile.',
      id: '2',
    },
    {
      link: '/projetos/SignIn',
      img: '/sliding-signin.png',
      alt: 'image-sign-in',
      title: 'Sign in | Sign up',
      description:
        'Mini projeto pessoal com o objetivo de aprimorar as habilidades técnicas no qual envolve o desenvolvimento de formulários de sign in e sign up, alternando entre si \
            com animações sem nenhum framework.',
      id: '3',
    },
    {
      link: '/projetos/Landing-Page',
      img: '/landing-page.png',
      alt: 'Landing Page',
      title: 'Landing Page',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma Landing Page responsiva em qualquer dispositivo, além de incluir o modo noturno\
            animado.',
      id: '4',
    },
    {
      link: '/projetos/Clone-Netflix',
      img: '/clone-netflix.png',
      alt: 'Clone Netflix',
      title: 'Clone Netflix',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma interface parecida com a da Netflix, utilizando imagens captadas \
            através de uma API open source.',
      id: '5',
    },
    {
      link: '/projetos/Interactive-Rating',
      img: '/interactive-rating.png',
      alt: 'Interactive Rating Component',
      title: 'Interactive Rating Component',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento um componenete interativo de classificação. ',
      id: '6',
    },
    {
      link: '/projetos/Covid-Tracker',
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
    <div className="flex h-full max-h-max w-full justify-center">
      <section className="mt-32 flex w-full max-w-customWidth flex-col items-center">
        <h1 className="text-3xl font-bold">PRINCIPAIS PROJETOS</h1>
        {banner_map.map((banner) => {
          return (
            <a href={banner.link} className="group mt-12" key={banner.id}>
              <div className="relative flex h-60 w-full rounded-3xl border border-light-700 dark:border-dark-100">
                <div
                  className="absolute z-0 h-full w-full max-w-xs rounded-3xl bg-light-100 transition-all duration-500 
                ease-in-out group-hover:max-w-full dark:bg-dark-100"
                />
                <img
                  src={banner.img}
                  alt={banner.alt}
                  className="z-10 w-full max-w-imgWidth rounded-l-3xl"
                />
                <div className="relative ml-6 mr-6 flex h-full w-full flex-col justify-center">
                  <h1 className="mb-1 text-2xl font-bold">{banner.title}</h1>
                  <p className="text-lg leading-5 dark:text-textLight-600">
                    {banner.description}
                  </p>
                  <p className="relative mt-1 self-end text-xl font-bold">
                    Saiba mais
                    <span
                      className="absolute -bottom-px left-1/2 h-px w-0 bg-elementary-300 transition-all duration-500 
                    ease-in-out group-hover:w-1/2 dark:bg-brand-300"
                    />
                    <span
                      className="absolute -bottom-px right-1/2 h-px w-0 bg-elementary-300 transition-all duration-500 
                    ease-in-out group-hover:w-1/2 dark:bg-brand-300"
                    />
                  </p>
                </div>
              </div>
            </a>
          )
        })}
      </section>
    </div>
  )
}
