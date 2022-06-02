import Link from "next/link"
import { UnderlineLayout } from "../UnderlineLayout"

const Layout = ({ children, homepage }) => (
    <div className="flex h-full max-h-max w-full justify-center">
      <section className={`mt-32 flex w-full max-w-customWidth flex-col items-center relative max-sm:mt-24 max-sm:px-4 ${
        homepage ? 'after:content-[""] after:w-full after:h-px after:bg-light-700 after:dark:bg-dark-100 after:absolute after:-bottom-16'
        : ''
      }`}>
        <h1 className="text-3xl font-bold max-sm:text-2xl">
          {homepage ? 'PRINCIPAIS PROJETOS' : 'PROJETOS'}
        </h1>
        {children}
        {homepage 
        ?
        <>
          <Link href={'/projetos'}>
            <a className="mt-12 text-2xl font-medium relative group hover:brightness-110 duration-0 max-md:text-xl">
              Explore mais projetos
              <UnderlineLayout />  
            </a>
          </Link>
        </>
        :
        <>
        </>
        }
      </section>
    </div>
  )

export default Layout