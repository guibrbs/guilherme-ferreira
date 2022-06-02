import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiExpo,
  SiFigma,
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
} from 'react-icons/si'

const iconStyles = 'w-10 h-10 border border-light-700 dark:border-dark-100 rounded-md p-1 mt-3 overflow-hidden'
const contentStyle = 'mt-2 text-sm leading-[15px] dark:text-textLight-600'
const boldStyle = 'font-bold dark:font-medium dark:text-textLight-300'
const habilities = [
  {
    title: 'Web Development',
    content:
      <p className={contentStyle}>
          Meus projetos web são <span className={boldStyle}>totalmente responsíveis</span>, com 
          <span className={boldStyle}> acessibilidade</span>, 
          certificando que irá renderizar <span className={boldStyle}>igualmente</span> para todos os browsers.
      </p>,
    tech: (
      <>
        <SiReact className={iconStyles} color={'#5ccfee'} title={'ReactJS'} />
        <SiJavascript
          className={iconStyles}
          color={'#FFA701'}
          title={'Javascript'}
        />
        <SiTypescript
          className={iconStyles}
          color={'#2f72bc'}
          title={'Typescript'}
        />
        <SiNextdotjs className={iconStyles} color={'black'} title={'Next Js'} />
        <SiTailwindcss
          className={iconStyles}
          color={'#35b3eb'}
          title={'TailwindCSS'}
        />
        <SiCss3 className={iconStyles} color={'#35b3e9'} title={'CSS3'} />
        <SiNodedotjs className={iconStyles} color={'green'} title={'NodeJS'} />
        <SiMongodb className={iconStyles} color={'#293'} title={'MongoDB'} />
      </>
    ),
  },
  {
    title: 'Mobile Development',
    content: (
      <p className={contentStyle}>
        A base para todos os meus projetos mobile é o foco em <span className={boldStyle}>acessibilidade </span> 
        e <span className={boldStyle}>UI/UX desing.</span>
      </p>
    ),
    tech: (
      <>
        <SiReact className={iconStyles} color={'#5ccfee'} title={'ReactJS'} />
        <SiJavascript
          className={iconStyles}
          color={'#FFA701'}
          title={'Javascript'}
        />
        <SiTypescript
          className={iconStyles}
          color={'#2f72bc'}
          title={'Typescript'}
        />
        <SiExpo className={iconStyles} title={'Expo'} />
      </>
    ),
  },
  {
    title: 'Prototyping',
    content:
      <p className={contentStyle}>
        Nas minhas prototipagens eu tento buscar <span className={boldStyle}>inspirações modernas</span>  e que fazem sentido 
        ao meu contexto, com o máximo de <span className={boldStyle}> foco na experiência do usuário.</span>
      </p>,
    tech: (
      <>
        <SiFigma className={iconStyles} color={'#f26c5d'} title={'Figma'} />
        <SiAdobephotoshop
          className={iconStyles}
          color={'royalblue'}
          title={'Photoshop'}
        />
        <SiAdobexd
          className={iconStyles}
          color={'#f75eee'}
          title={'Adobe XD'}
        />
        <SiFramer className={iconStyles} color={'#62d0f2'} title={'Framer'} />
      </>
    ),
  },
]

export function Habilities() {
  return (
    <section className="mt-4 flex w-full flex-wrap justify-between max-md:justify-center max-md:gap-7">
      {habilities.map((habilities, key) => {
        return (
          <div
            className="flex h-[256px] w-full max-w-[220px] flex-col justify-center
                     rounded-xl border border-light-700 p-4 dark:border-dark-100"
            key={key}
          >
            <h3 className="text-lg font-semibold">{habilities.title}</h3>
            {habilities.content}
            <div className="flex h-full flex-wrap items-end justify-between">
              {habilities.tech}
            </div>
          </div>
        )
      })}
    </section>
  )
}
