import { ChatTeardropDots, CheckCircle } from 'phosphor-react'
import { MdDriveFileRenameOutline, MdMail } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function Form( { isToForm } ) {
  const [isEmailSent, setIsEmailSent] = useState(false)
  const myRef = useRef(null)

  useEffect(() => {
    if(isToForm){
      myRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isToForm])
  const titleInputStyle =
    'font-semibold text-base leading-4 text-dark-500 mb-1 after:content-["*"] after:ml-0.5 after:text-red-500 dark:text-textLight-500 max-sm:text-[8px] max-sm:mb-0'
  const inputStyle =
    'w-[606px] rounded-lg bg-light-500 focus:border-light-700 focus:outline-none focus:ring-1 focus:ring-light-700 text-base pl-12 py-2 \
    placeholder:text-light-800 font-medium leading-5 dark:bg-dark-300 dark:placeholder:text-textLight-600 max-sm:w-[272px] max-sm:text-[8px] \
    max-sm:rounded-md max-sm:pl-6'

  function Mailer(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_810kcmm',
        'template_6998imi',
        e.target,
        'uA0o6y8D4ZXWRR-U3'
      )
      .then((res) => {
        setIsEmailSent(true)
        setTimeout(() => {
          setIsEmailSent(false)
        }, "4000")
        e.target.reset()
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="flex h-full w-full justify-center ">
      <section
        className="mt-32 flex h-[576px] w-full max-w-customWidth flex-col items-center justify-center rounded-3xl border-[1px]
     border-stone-300 bg-light-100 dark:border-zinc-700 dark:bg-dark-100 max-sm:max-w-[320px] max-sm:h-[310px] max-sm:rounded-xl"
      ref={myRef}>
        <h1 className="text-2xl font-semibold text-dark-500 dark:text-textLight-500 max-sm:text-sm">
          Envie sua mensagem
        </h1>
        <form
          className="mt-7 flex w-full flex-col items-center space-y-4 max-sm:mt-2"
          onSubmit={Mailer}
        >
          <label>
            <p className={titleInputStyle}>Nome Completo</p>
            <div className="relative flex items-center">
              <MdDriveFileRenameOutline
                className="pointer-events-none absolute ml-4 h-5 w-5 rounded-md max-sm:h-3 max-sm:w-3 max-sm:rounded-sm max-sm:ml-2
              border border-dark-500 bg-dark-500 p-0.5 text-sm text-textLight-500 dark:bg-textLight-500 dark:text-dark-300"
              />
              <input
                type="text"
                className={`${inputStyle} h-[58px] max-sm:h-[26px] `}
                required
                placeholder="Escreva seu nome"
                name="name"
              />
            </div>
          </label>

          <label>
            <p className={titleInputStyle}>Email</p>
            <div className="relative flex items-center">
              <MdMail className="pointer-events-none absolute ml-4 h-5 w-5 text-dark-500 dark:text-textLight-500 max-sm:h-3 
              max-sm:w-3 max-sm:rounded-sm max-sm:ml-2" />
              <input
                type="email"
                className={`${inputStyle} h-[58px] max-sm:h-[26px]`}
                required
                placeholder="Escreva seu email"
                name="user_email"
              />
            </div>
          </label>

          <label>
            <p className={titleInputStyle}>Mensagem</p>
            <div className="relative flex">
              <ChatTeardropDots
                className="pointer-events-none absolute ml-4 mt-4 h-5 w-5 text-dark-500 dark:text-textLight-500
                max-sm:h-3 max-sm:w-3 max-sm:rounded-sm max-sm:ml-2 max-sm:mt-2"
                weight="fill"
              />
              <textarea
                type="text"
                className={`${inputStyle} h-[193px] max-sm:h-[86px] resize-none pt-4 pr-4 max-sm:pt-1.5`}
                required
                placeholder="Escreva sua mensagem"
                name="message"
              />
            </div>
          </label>

          <div className='w-full flex justify-center relative'>
            <input
              type="submit"
              value="Enviar"
              className="h-8 w-full max-w-[130px] cursor-pointer rounded-lg flex justify-center items-center
              bg-dark-500 text-base font-bold text-textLight-500 transition-all hover:brightness-110
              dark:bg-textLight-500 dark:text-dark-300 max-sm:w-[58px] max-sm:h-[20px] max-sm:rounded-md max-sm:text-[10px]"
            />
            <AnimatePresence exitBeforeEnter>
            {isEmailSent  
            ?
              <motion.div 
                className='absolute left-[60%]'
                key={isEmailSent ? true : "empty"}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                >
                <CheckCircle size={32} weight="fill" className=' text-green-500'/>
              </motion.div>
            :
            <>
            </>
            } 
            </AnimatePresence>
          </div>
        </form>
      </section>
    </div>
  )
}
