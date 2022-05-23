import { MdDriveFileRenameOutline } from 'react-icons/md'

export function Form() {
  const titleInputStyle = 'font-semibold text-base leading-4 text-dark-500 mb-1 after:content-["*"] after:ml-0.5 after:text-red-500'
  const inputStyle =
    'w-[606px] rounded-lg bg-light-500 focus:border-light-700 focus:outline-none focus:ring-1 focus:ring-light-700 text-base'
  return (
    <div className="mt-32 flex h-full w-full justify-center ">
      <section className="flex h-[576px] w-full max-w-customWidth flex-col items-center justify-center rounded-3xl bg-light-100">
        <h1 className="text-2xl font-semibold text-dark-500">
          Envie sua mensagem
        </h1>
        <form
          action=""
          className="mt-7 flex w-full flex-col items-center space-y-4"
        >
          <label className='group'>
            <p className={titleInputStyle}>Nome Completo</p>
            <input type="text" className={`${inputStyle} h-[58px]`} 
            required />
          </label>

          <label>
            <p className={titleInputStyle}>Email</p>
            <input type="email" className={`${inputStyle} h-[58px]`} required/>
          </label>

          <label>
            <p className={titleInputStyle}>Mensagem</p>
            <textarea type="text" className={`${inputStyle} h-[193px]`} required/>
          </label>

          <input type="submit" value="Enviar" />
        </form>
      </section>
    </div>
  )
}
