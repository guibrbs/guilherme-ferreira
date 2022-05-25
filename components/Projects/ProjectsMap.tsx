import { DiHeroku, DiPostgresql, DiDocker, DiDjango, DiPython, DiGithubBadge, DiReact, DiNodejs, DiCss3 } from 'react-icons/di'
import { SiSelenium, SiTypescript, SiJavascript, SiTailwindcss, SiExpress, SiJest, SiEslint, SiMaterialui, SiHtml5 } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { PhosphorLogo } from 'phosphor-react'

type Projects_map = object[]
const iconStyle = 'w-14 h-14 border-[1px] border-light-700 rounded-md text-4xl flex items-center justify-center mr-4 mt-5 p-1 relative'
export const ProjectsMap: Projects_map = [
  {
    title: "INDICAA",
    description: "INDICAA é um projeto desenvolvido por alunos da matéria de Métodos de Desenvolvimento de Software da Universidade de Brasília - UnB com o objetivo \
    de facilitar o acesso às informações apresentadas pelo site acadêmico SIGAA. É um projeto que visa a busca e a disponibilização \
    visual de informações acadêmicas relevantes aos coordenadores da Universidade de Brasília - UnB, e também, possibilitar a pesquisa e a filtragem de dados por \
    meio da interface do Metabase.",
    tech: 
      <>
        <DiHeroku className={`${iconStyle} hover:text-[#400099] transition-colors`} title={'Heroku'} /> 
        <DiPostgresql className={`${iconStyle} hover:text-[#30628a] transition-colors`} title={'PostgreSQL'} />
        <DiDocker className={`${iconStyle} hover:text-[#228ee1] transition-colors`} title={'Docker'} />
        <DiDjango className={`${iconStyle} hover:text-[#092b1d] transition-colors`} title={'Django'} />
        <SiSelenium className={`${iconStyle} hover:text-[#c4092a] transition-colors`} title={'Selenium'} />
        <DiPython className={`${iconStyle} hover:text-[#f2ca3b] transition-colors`} title={'Python'} />
        <FiFigma className={`${iconStyle} hover:text-[#f26c5d] transition-colors`} title={'Figma'} />
        <a href="https://github.com/fga-eps-mds/2021.2-INDICAA" target={"_blank"} rel={"noreferrer noopener"}>
          <DiGithubBadge className={`${iconStyle} hover:text-elementary-300 dark:hover:text-brand-300 transition-colors`}/>
        </a>
      </>,
    img: '/metabase.png',
    link: 'https://fga-eps-mds.github.io/2021.2-INDICAA-Wiki/',
    id: '1',
    routes: 'indicaa'
  },
  {
    title: "Nlw Impulse",
    description: "Nlw Return Impulse é um projeto seguindo os passos disponibilizados em vídeos pela Rocketseat. É uma semana inteira de programação \
    na prática, onde o objetivo era desenvolver um widget de feedback, que apresenta três opções: Bug, Problema ou Outro. Ao selecionar a opção do feedback, \
    é possível realizar um comentário e printar a tela. É um projeto full-stack, então há um um backend que recebe as informações e enviam para o email \
    do autor.",
    tech: 
      <>
        <DiReact className={`${iconStyle} hover:text-[#5ccfee] transition-colors`} title={'React'} />
        <SiJavascript className={`${iconStyle} hover:text-[#FFA701] transition-colors`} title={'Javascript'} />
        <SiTypescript className={`${iconStyle} hover:text-[#2f72bc] transition-colors`} title={'Typescript'} />
        <SiTailwindcss className={`${iconStyle} hover:text-[#35b3eb] transition-colors`} title={'TailwindCSS'} />
        <PhosphorLogo className={`${iconStyle} hover:text-[#ce93fe] transition-colors`} xlinkTitle={'Phosphor'} weight="fill" />
        <SiExpress className={`${iconStyle} hover:text-green-600 transition-colors`} title={'Express'} />
        <SiJest className={`${iconStyle} hover:text-[#c03b13] transition-colors`} title={'Jest'} />
        <DiNodejs className={`${iconStyle} hover:text-[#7cb900] transition-colors`} title={'Node'} />
        <a href="https://github.com/guibrbs/nlw-impulse-web" target={"_blank"} rel={"noreferrer noopener"}>
          <DiGithubBadge className={`${iconStyle} hover:text-elementary-300 dark:hover:text-brand-300 transition-colors`}/>
        </a>
        <a href="https://github.com/guibrbs/nlw-impulse-server" target={"_blank"} rel={"noreferrer noopener"}>
          <DiPostgresql className={`${iconStyle} hover:text-[#30628a] transition-colors`} title={'PostgreSQL'} />
        </a>
      </>,
    img: '/nlw-impulse.png',
    link: 'http://nlw-impulse-web-six.vercel.app/',
    id: '2',
    routes: 'nlw'
  },
  {
    title: "Sign In | Sign Up",
    description: "Sign In | Sign Up é um projeto de cunho pessoal com o intuito de realizar, somente com CSS, a animação entre páginas de cadastro e login. As ilustrações \
    foram coletadas a partir do site UnDraw, que disponibiliza gratuitamente seus arquivos. O objetivo com o desenvolvimento dessa interface foi para aprimorar as habilidades técnicas \
    referentes às tecnologias utilizadas, procurando seguir boas práticas de programação e construir um código limpo.",
    tech: 
      <>
        <DiReact className={`${iconStyle} hover:text-[#5ccfee] transition-colors`} title={'React'} />
        <SiJavascript className={`${iconStyle} hover:text-[#FFA701] transition-colors`} title={'Javascript'} />
        <DiCss3 className={`${iconStyle} hover:text-blue-600 transition-colors`} title={'CSS3'} />
        <a href="https://github.com/guibrbs/Sliding-Sign-In" target={"_blank"} rel={"noreferrer noopener"}>
          <DiGithubBadge className={`${iconStyle} hover:text-elementary-300 dark:hover:text-brand-300 transition-colors`}/>
        </a>
      </>,
    img: '/sliding-signin.png',
    link: 'https://guibrbs.github.io/Sliding-Sign-In/',
    id: '3',
    routes: 'signin'
  },
  {
    title: "Landing Page",
    description: "Landing Page é um projeto de cunho pessoal, seguido através de um guia no youtube e tem o intuito de desenvolver uma página totalmente responsiva, com animações \
    e um efeito de Dark e Light mode incrível. O objetivo com o desenvolvimento dessa página foi para ter conhecimento sobre responsividade conforme a elaboração do projeto, \
    além de aprender a realizar a troca para o modo noturno, no qual o mesmo mecanismo de troca foi utilizado neste portfólio.",
    tech: 
      <>
        <DiReact className={`${iconStyle} hover:text-[#5ccfee] transition-colors`} title={'React'} />
        <SiJavascript className={`${iconStyle} hover:text-[#FFA701] transition-colors`} title={'Javascript'} />
        <SiTypescript className={`${iconStyle} hover:text-[#2f72bc] transition-colors`} title={'Typescript'} />
        <DiCss3 className={`${iconStyle} hover:text-blue-600 transition-colors`} title={'CSS3'} />
        <a href="https://github.com/guibrbs/landing_page" target={"_blank"} rel={"noreferrer noopener"}>
         <DiGithubBadge className={`${iconStyle} hover:text-elementary-300 dark:hover:text-brand-300 transition-colors`}/>
        </a>
      </>,
    img: '/landing-page.png',
    link: 'https://guibrbs.github.io/landing_page/',
    id: '4',
    routes: 'landing-page'
  },
  {
    title: "Clone Netflix",
    description: "Esse projeto foi o primeiro onde eu tive contato com ReactJs através de uma live realizada no canal Bonieky Lacerda, no qual envolve o desenvolvimento \
    de uma aplicação do zero, clonando visualmente a interface da Netflix. As informações utilizadas como séries em destaque, filtro por categoria, banner de séries/filmes \
    foram coletadas através da API TMDB, contudo vale ressaltar que não são inclusos os catálogos disponibilizados oficialmente pela Netflix.",
    tech: 
      <>
        <DiReact className={`${iconStyle} hover:text-[#5ccfee] transition-colors`} title={'React'} />
        <SiJavascript className={`${iconStyle} hover:text-[#FFA701] transition-colors`} title={'Javascript'} />
        <SiEslint className={`${iconStyle} hover:text-[#482fbd] transition-colors`} title={'Eslint'} />
        <SiMaterialui className={`${iconStyle} hover:text-[#007dc5] transition-colors`} title={'MaterialUI'} />
        <DiCss3 className={`${iconStyle} hover:text-blue-600 transition-colors`} title={'CSS3'} />
        <a href="https://github.com/guibrbs/ProjetoNetflix" target={"_blank"} rel={"noreferrer noopener"}>
          <DiGithubBadge className={`${iconStyle} hover:text-elementary-300 dark:hover:text-brand-300 transition-colors`}/>
        </a>
      </>,
    img: '/clone-netflix.png',
    link: 'https://guibrbs.github.io/ProjetoNetflix/',
    id: '5',
    routes: 'clone-netflix'
  },
  {
    title: "Interactive Rating",
    description: "Esse projeto foi um desafio disponbilizado pela plataforma Frontend Mentor, cujo desafio é desenvolver esse componente de classificação interativo e tentar \
    se aproximar o mais possível com as imagens disponbilizadas. Meu objetivo ao desenvolver foi me desafiar ao tentar implementar uma aplicação básica do zero, sem ajuda nenhuma \
    e com alguns conhecimentos prévios das técnologias utilizadas.",
    tech: 
      <>
        <SiJavascript className={`${iconStyle} hover:text-[#FFA701] transition-colors`} title={'Javascript'} />
        <DiCss3 className={`${iconStyle} hover:text-blue-600 transition-colors`} title={'CSS3'} />
        <SiHtml5 className={`${iconStyle} hover:text-[#e96228] transition-colors`} title={'HTML5'} />
        <a href="https://github.com/guibrbs/Interacting_rating_component" target={"_blank"} rel={"noreferrer noopener"}>
          <DiGithubBadge className={`${iconStyle} hover:text-elementary-300 dark:hover:text-brand-300 transition-colors`}/>
        </a>
      </>,
    img: '/interactive-rating.png',
    link: 'https://guibrbs.github.io/Interacting_rating_component/',
    id: '6',
    routes: 'interactive-rating'
  },
  {
    title: "Covid-19 Tracker",
    description: "Com o estouro da pandemia de COVID-19, achei interessante a realização de gráficos que dispobilizase as informações de casos de COVID sobre os casos de óbito \
    por todo o mundo, ou seja, as regiões mais influentes estão inclusas, e todos os dados foram coletados através de uma API (dados não estão mais sendo atualizados). \
    O objetivo com o desenvolvimento desse projeto foi aprender a coletar dados de API e representar graficamente.",
    tech: 
      <>
        <DiReact className={`${iconStyle} hover:text-[#5ccfee] transition-colors`} title={'React'} />
        <SiJavascript className={`${iconStyle} hover:text-[#FFA701] transition-colors`} title={'Javascript'} />
        <SiMaterialui className={`${iconStyle} hover:text-[#007dc5] transition-colors`} title={'MaterialUI'} />
        <DiCss3 className={`${iconStyle} hover:text-blue-600 transition-colors`} title={'CSS3'} />
        <a href="https://github.com/guibrbs/Covid-Tracker" target={"_blank"} rel={"noreferrer noopener"}>
          <DiGithubBadge className={`${iconStyle} hover:text-elementary-300 dark:hover:text-brand-300 transition-colors`}/>
        </a>
      </>,
    img: '/covid-tracker.png',
    link: 'https://guibrbs.github.io/Covid-Tracker/',
    id: '7',
    routes: 'covid-tracker'
  },
]
