import AvatarImage from '../../public/avatar.png'
import Image from 'next/image'

export default function Avatar(){
    return(
        <Image src={AvatarImage} width={235} height={417} />
    )
}