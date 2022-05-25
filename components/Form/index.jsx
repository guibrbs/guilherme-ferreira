import { ChatTeardropDots } from 'phosphor-react'
import { MdDriveFileRenameOutline, MdMail } from 'react-icons/md'

export function Form() {
  const titleInputStyle = 'font-semibold text-base leading-4 text-dark-500 mb-1 after:content-["*"] after:ml-0.5 after:text-red-500 dark:text-textLight-500'
  const inputStyle =
    'w-[606px] rounded-lg bg-light-500 focus:border-light-700 focus:outline-none focus:ring-1 focus:ring-light-700 text-base pl-12 py-2 \
    placeholder:text-light-800 font-medium leading-5 dark:bg-dark-300 dark:placeholder:text-textLight-600'
  return (
    <div className="flex h-full w-full justify-center ">
      <section className="flex h-[576px] w-full max-w-customWidth flex-col items-center justify-center rounded-3xl bg-light-100 dark:bg-dark-100
     border-stone-300 dark:border-zinc-700 border-[1px] mt-32 ">
        <h1 className="text-2xl font-semibold text-dark-500 dark:text-textLight-500">
          Envie sua mensagem
        </h1>
        <form
          action=""
          className="mt-7 flex w-full flex-col items-center space-y-4 "
        >
          <label >
            <p className={titleInputStyle}>Nome Completo</p>
            <div className='relative flex items-center'>
              <MdDriveFileRenameOutline className='absolute w-5 h-5 ml-4 border border-dark-500 
              bg-dark-500 rounded-md text-textLight-500 text-sm p-0.5 pointer-events-none dark:bg-textLight-500 dark:text-dark-300'/>
              <input type="text" className={`${inputStyle} h-[58px] `} 
              required 
              placeholder='Escreva seu nome'
              />
            </div>
          </label>

          <label>
            <p className={titleInputStyle}>Email</p>
            <div className='relative flex items-center'>
              <MdMail className='absolute w-5 h-5 ml-4 text-dark-500 pointer-events-none dark:text-textLight-500'/>
              <input type="email" className={`${inputStyle} h-[58px]`} required placeholder='Escreva seu email'/>
            </div>
          </label>

          <label>
            <p className={titleInputStyle}>Mensagem</p>
            <div className='relative flex'>
              <ChatTeardropDots className='absolute ml-4 w-5 h-5 mt-4 text-dark-500 pointer-events-none dark:text-textLight-500' weight="fill" />
              <textarea type="text" className={`${inputStyle} h-[193px] pt-4 resize-none`} required placeholder='Escreva sua mensagem'/>
            </div>
          </label>

          <input type="submit" value="Enviar" className='w-full max-w-[130px] h-8 bg-dark-500 dark:bg-textLight-500
           text-textLight-500 dark:text-dark-300 hover:brightness-110 transition-all rounded-lg font-bold
           text-base cursor-pointer'/>
        </form>
      </section>
    </div>
  )
}
