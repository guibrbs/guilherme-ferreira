export function Footer() {
  return (
    <footer className="mt-10 p-8 flex h-16 w-full items-center justify-center border-t border-t-light-100 
    bg-light-100 dark:border-t-dark-100 dark:bg-dark-500">
      <p className="text-sm font-extralight tracking-wider text-dark-100 opacity-80 dark:text-textLight-600 dark:opacity-50 max-sm:text-[10px]">
        <span className="font-sans font-thin opacity-70">&copy;</span>{' '}
        {new Date().getFullYear()} Guilherme Ferreira. All Rights Reserved
      </p>
    </footer>
  )
}
