import { useRouter } from 'next/router'
import { ProjectsMap } from './ProjectsMap'
import { IoIosArrowForward } from 'react-icons/io'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import Link from 'next/link'

export function Projects() {
    const routes = useRouter()
    return (
        <div className='w-full h-fit flex justify-center mt-36'>
            {ProjectsMap.filter(banner => banner.id == 1).map((project) => {
                return(
                    <div className='w-full max-w-customWidth' key={project.id}>
                        <div className='flex items-center space-x-4'>
                            <Link href={'/projetos'}>
                                <a className='text-xl text-elementary-300 underline'>Projetos</a>
                            </Link>
                            <IoIosArrowForward />
                            <Link href={project.link}>
                                <div className='flex items-center justify-center cursor-pointer'>
                                    <a className='font-bold text-3xl' target="_blank" rel="noopener noreferrer">{project.title}</a>
                                    <BsBoxArrowInUpRight className='ml-1 text-2xl'/>
                                </div>
                            </Link>
                        </div>
                        <p className='font-normal text-xl leading-7 text-justify mt-5'>{project.description}</p>
                        <div className='w-full flex justify-between mt-3'>
                            <div>
                                <h1 className='font-bold text-[1.75rem]'>Tecnologias utilizadas</h1>
                                <p className='flex space-x-4'>
                                    {project.tech}
                                </p>
                            </div>
                            <img src={project.img} alt={project.alt} className='rounded-xl w-full max-w-[400px]'/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}