import { LayoutGroup } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsGithub } from 'react-icons/bs'
import { UnderlineLayout } from './UnderlineLayout'

export function Navigation( { hamburguerMenu } ) {
  const router = useRouter()
  const links = [
    {
      name: 'Projetos',
      href: '/projetos',
      id: 1,
    },
    {
      name: 'Sobre',
      href: '/sobre',
      id: 2,
    },
    {
      name: 'Source',
      href: 'https://github.com/guibrbs/guilherme-ferreira',
      id: 3,
    },
  ]
  return (
    <LayoutGroup>
      <div className={`flex max-md:fixed max-md:-bottom-14 max-md:-right-28 max-md:opacity-0 max-md:bg-light-100 max-md:dark:bg-dark-100 max-md:p-2
       max-md:rounded-md duration-300 pointer-events-none 
      ${hamburguerMenu ? 'max-md:right-2 max-md:opacity-100 pointer-events-auto' : ''}`}>
        {links.map(({ name, href, id }) => {
          return (
            <div key={id} className='group relative mx-4 flex w-fit'>
              {id === 3 ? (
                <BsGithub style={{ marginRight: '4px', marginTop: '4px' }}/>
              ) : (
                <></>
              )}
              <Link href={href} key={id}>
                <a
                  className="text-base font-normal duration-300 hover:text-dark-300 dark:hover:text-textLight-300"
                  target={id === 3 ? '_blank' : ''}
                  rel={id === 3 ? 'noopener noreferrer' : ''}
                >
                  {name}
                </a>
              </Link>
              <UnderlineLayout href={href} />
            </div>
          )
        })}
      </div>
    </LayoutGroup>
  )
}
