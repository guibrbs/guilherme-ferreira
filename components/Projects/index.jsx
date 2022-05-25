import { useRouter } from 'next/router'
import { ProjectsMap } from './ProjectsMap'
import { IoIosArrowForward } from 'react-icons/io'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import Link from 'next/link'

export function Projects() {
  const routes = useRouter()
  const {slug} = routes.query
  return (
    <div className="mt-36 flex h-fit w-full justify-center">
      {ProjectsMap.map((project) => {
        if(slug === project.routes)
        return (
          <div className="w-full max-w-customWidth" key={project.id}>
            <div className="flex items-center space-x-4">
              <Link href={'/projetos'}>
                <a className="text-xl text-elementary-300 dark:text-brand-300 underline">
                  Projetos
                </a>
              </Link>
              <IoIosArrowForward />
              <div className="flex cursor-pointer items-center justify-center">
                <a
                  href={project.link}
                  className="text-3xl font-bold flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                  <BsBoxArrowInUpRight className="ml-1 text-2xl" />
                </a>
              </div>
            </div>
            <p className="mt-5 text-justify text-xl font-normal leading-7 dark:text-textLight-600">
              {project.description}
            </p>
            <div className="mt-3 flex w-full justify-between">
              <div className="flex w-full max-w-xs flex-col flex-wrap">
                <h1 className="text-[1.75rem] font-bold ">
                  Tecnologias utilizadas
                </h1>
                <div className="flex flex-wrap justify-center">{project.tech}</div>
              </div>
              <img
                src={project.img}
                alt={project.alt}
                className="w-full max-w-[400px] h-full max-h-[272px] rounded-xl"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
