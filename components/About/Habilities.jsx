import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiCss3, SiNodedotjs, SiReact, SiMongodb, SiReactivex, SiExpo, SiStyledcomponents, SiFigma, SiAdobephotoshop, SiAdobexd, SiFramer } from "react-icons/si"
const iconStyles = "w-10 h-10 border border-light-700 dark:border-dark-100 rounded-md p-1 mt-3 overflow-hidden"
const habilities = [
    {
        title: 'Web Development',
        content: 'lobortis, varius adipiscing viverra Lorem laoreet sollicitudin. non Cras sodales. cursus Nullam efficitur. tincidunt Donec',
        tech: 
            <>
                <SiReact className= {iconStyles} color={'#5ccfee'} title={'ReactJS'}/>
                <SiJavascript className={iconStyles} color={'#FFA701'} title={'Javascript'} />
                <SiTypescript className={iconStyles} color={'#2f72bc'} title={'Typescript'} />
                <SiNextdotjs className={iconStyles} color={'black'} title={'Next Js'} />
                <SiTailwindcss className={iconStyles} color={'#35b3eb'} title={'TailwindCSS'} />
                <SiCss3 className={iconStyles} color={'#35b3e9'} title={'CSS3'} />
                <SiNodedotjs className={iconStyles} color={'green'} title={'NodeJS'} />
                <SiMongodb className={iconStyles} color={'#293'} title={'MongoDB'} />
            </>
    },
    {
        title: 'Mobile Development',
        content: 'lobortis, varius adipiscing viverra Lorem laoreet sollicitudin. non Cras sodales. cursus Nullam efficitur. tincidunt Donec',
        tech: 
            <>
                <SiReact className= {iconStyles} color={'#5ccfee'} title={'ReactJS'}/>
                <SiJavascript className={iconStyles} color={'#FFA701'} title={'Javascript'} />
                <SiTypescript className={iconStyles} color={'#2f72bc'} title={'Typescript'} />
                <SiExpo className={iconStyles} title={'Expo'} />
            </>
    },
    {
        title: 'Prototyping',
        content: 'lobortis, varius adipiscing viverra Lorem laoreet sollicitudin. non Cras sodales. cursus Nullam efficitur. tincidunt Donec',
        tech: 
            <>
                <SiFigma className={iconStyles} color={'#f26c5d'} title={'Figma'} />
                <SiAdobephotoshop className={iconStyles} color={'royalblue'} title={'Photoshop'} />
                <SiAdobexd className={iconStyles} color={'#f75eee'} title={'Adobe XD'} />
                <SiFramer className={iconStyles} color={'#62d0f2'} title={'Framer'} />
            </>
    },
]

export function Habilities() {
    return(
        <section className="w-full flex justify-between mt-4 flex-wrap">
            {habilities.map((habilities) => {
                return(
                    <div className="w-full h-full max-w-[220px] min-h-[256px] border border-light-700
                     dark:border-dark-100 rounded-xl p-4 flex flex-col">
                        <h3 className="text-xl">{habilities.title}</h3>
                        <p className="dark:text-textLight-600 leading-[15px] text-sm mt-2">{habilities.content}</p>
                        <div className="items-end justify-between flex flex-wrap">{habilities.tech}</div>
                    </div>
                )
            })}
        </section>
    )
}