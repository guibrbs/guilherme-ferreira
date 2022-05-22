import { useRouter } from "next/router";

export function UnderlineLayout( { href } ) {
  const router = useRouter()
  return (
    <>
      <span
        className={`absolute -bottom-px left-1/2 h-px w-0 bg-elementary-300 transition-all duration-500 
        ease-in-out group-hover:w-1/2 dark:bg-brand-300 ${
              router.pathname === href ? 'w-1/2' : ''
        }`}
      />
      <span
        className={`absolute -bottom-px right-1/2 h-px w-0 bg-elementary-300 transition-all duration-500 
        ease-in-out group-hover:w-1/2  dark:bg-brand-300 ${
              router.pathname === href ? 'w-1/2' : ''
        }`}
      />
    </>
  )
}
