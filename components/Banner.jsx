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
      id: 'one',
    },
    {
      link: '/projetos/NLW',
      img: '/nlw-impulse.png',
      alt: 'Nlw Impulse',
      title: 'Nlw Impulse',
      description:
        'Projeto pessoal seguindo os passos no NLW Return Impulse, realizado pela Rocketseat, com o objetivo de aprender novas tecnologias, \
        melhorar o desenvolvimento técnico e introduzir o desenvolvimento mobile.',
      id: 'two',
    },
    {
      link: '/projetos/SignIn',
      img: '/sliding-signin.png',
      alt: 'image-sign-in',
      title: 'Sign in | Sign up',
      description:
        'Mini projeto pessoal com o objetivo de aprimorar as habilidades técnicas no qual envolve o desenvolvimento de formulários de sign in e sign up, alternando entre si \
            com animações sem nenhum framework.',
      id: 'three',
    },
    {
      link: '/projetos/Landing-Page',
      img: '/landing-page.png',
      alt: 'Landing Page',
      title: 'Landing Page',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma Landing Page responsiva em qualquer dispositivo, além de incluir o modo noturno\
            animado.',
      id: 'four',
    },
    {
      link: '/projetos/Clone-Netflix',
      img: '/clone-netflix.png',
      alt: 'Clone Netflix',
      title: 'Clone Netflix',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma interface parecida com a da Netflix, utilizando imagens captadas \
            através de uma API open source.',
      id: 'five',
    },
    {
      link: '/projetos/Interactive-Rating',
      img: '/interactive-rating.png',
      alt: 'Interactive Rating Component',
      title: 'Interactive Rating Component',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento um componenete interativo de classificação. ',
      id: 'six',
    },
    {
      link: '/projetos/Covid-Tracker',
      img: '/covid-tracker.png',
      alt: 'Covid Tracker',
      title: 'Covid Tracker',
      description:
        'Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de um rastreador de casos de \
            COVID-19 no Brasil e no mundo, através de uma API open source.',
      id: 'seven',
    },
  ]
  return (
    <div className="flex h-full max-h-max w-full justify-center">
      <section className="mt-32 flex w-full max-w-customWidth flex-col items-center">
        <h1 className="text-3xl font-bold">PRINCIPAIS PROJETOS</h1>
        {banner_map.map((banner) => {
          return (
            <a href={banner.link} className="group mt-12" key={banner.id}>
              <div className="flex h-60 w-full rounded-3xl border border-light-700 dark:border-dark-100 relative">
                <div className="w-full max-w-xs h-full bg-light-100 dark:bg-dark-100 absolute rounded-3xl group-hover:max-w-full z-0 
                transition-all duration-500"/>
                <img
                  src={banner.img}
                  alt={banner.alt}
                  className="w-full max-w-imgWidth rounded-l-3xl z-10"
                />
                <div className="relative ml-6 mr-6 flex h-full w-full flex-col justify-center">
                  <h1 className="mb-1 text-2xl font-bold">{banner.title}</h1>
                  <p className="text-lg leading-5 dark:text-textLight-600">
                    {banner.description}
                  </p>
                  <p className="mt-1 self-end text-xl font-bold relative">
                    Saiba mais
                    <span className="absolute -bottom-px left-1/2 w-0 h-px bg-elementary-300 dark:bg-brand-300 group-hover:w-1/2 
                    transition-all duration-500"/>
                    <span className="absolute -bottom-px right-1/2 w-0 h-px bg-elementary-300 dark:bg-brand-300 group-hover:w-1/2 
                    transition-all duration-500"/>
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
