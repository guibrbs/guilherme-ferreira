import AvatarImage from '../../public/avatar.png'
import Image from 'next/image'

export default function Avatar(){
    return(
        <div className='w-full max-w-[235px] max-md:hidden'>
            <Image src={AvatarImage} layout={'intrinsic'} alt={'Avatar'} priority/>
        </div>
    )
}