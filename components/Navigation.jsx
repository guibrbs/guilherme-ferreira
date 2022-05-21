import { LayoutGroup } from 'framer-motion'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsGithub } from "react-icons/bs";

export function Navigation() {
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
      {links.map(({ name, href, id }) => (
        <div className="group relative mx-4 flex w-fit" key={id}>
          {id === 3 ? (
            <BsGithub style={{ marginRight: '4px', marginTop: '4px' }} />
          ) : (
            <></>
          )}
          <Link href={href}>
            <a
              className="text-base font-normal duration-300 hover:text-dark-300 dark:hover:text-textLight-300"
              target={id === 3 ? '_blank' : ''}
              rel={id === 3 ? 'noopener noreferrer' : ''}
            >
              {name}
            </a>
          </Link>
          <span className={`absolute -bottom-px left-1/2 h-px w-0 bg-elementary-300 duration-300 ease-in-out 
            hover:duration-500 group-hover:w-1/2 group-hover:transition-all dark:bg-brand-300 ${
                router.pathname === href
                ? 'w-1/2'
                : ''
            }`}/>
          <span className={`absolute -bottom-px right-1/2 h-px w-0 bg-elementary-300 duration-300 ease-in-out 
            hover:duration-500 group-hover:w-1/2 group-hover:transition-all dark:bg-brand-300 ${
                router.pathname === href
                ? 'w-1/2'
                : ''
            }`}/>
        </div>
      ))}
    </LayoutGroup>
  )
}
