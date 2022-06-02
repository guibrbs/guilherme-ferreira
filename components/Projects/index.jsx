import { useRouter } from 'next/router'
import { ProjectsMap } from './ProjectsMap'
import { IoIosArrowForward } from 'react-icons/io'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

export function Projects() {
  const routes = useRouter()
  const {slug} = routes.query
  return (
    <div className="mt-36 flex h-fit w-full justify-center max-md:px-10 max-sm:mt-24">
      {ProjectsMap.map((project) => {
        if(slug === project.routes)
        return (
          <div className="w-full max-w-customWidth" key={project.id}>
            <div className="flex items-center space-x-4">
              <Link href={'/projetos'}>
                <a className="text-xl text-elementary-300 dark:text-brand-300 underline max-sm:text-lg">
                  Projetos
                </a>
              </Link>
              <IoIosArrowForward />
              <div className="flex cursor-pointer items-center justify-center">
                <a
                  href={project.link}
                  className="text-3xl font-bold flex items-center justify-center max-sm:text-xl max-sm:leading-5"
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
            <div className="mt-3 flex w-full justify-between max-sm:flex-col">
              <div className="flex w-full max-w-xs flex-col flex-wrap mb-5 max-sm:max-w-full">
                <h1 className="text-[1.75rem] font-bold max-sm:text-2xl max-sm:text-center">
                  Tecnologias utilizadas
                </h1>
                <div className="flex flex-wrap justify-center">{project.tech}</div>
              </div>
              <Image
                src={project.img}
                alt={project.alt}
                width={400}
                height={272}
                className="rounded-xl"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
