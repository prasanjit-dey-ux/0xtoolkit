import clsx from 'clsx'
import React from 'react'
const Card = ({children, className}: {
    children: React.ReactNode,
    className?: string,
}) => {
    return <div className={clsx('w-full border border-neutral-200 bg-white p-10 flex justify-center items-center',className)}>
        {children}
    </div>
}



// export const TitledCardShowcase = () => {
//   return (
//     <div className='grid grid-cols-3 divide-x divide-y divide-neutral-200 font-primary '>
//         <Card className=''>
//             <h2>TEMPLATES</h2>
//         </Card>
//         <Card>
//             <h2>UI BLOCKS</h2>
//         </Card>
//         <Card>
//             <h2>UI KIT</h2>
//         </Card>
//         <Card className='col-span-3 mt-2 h-160 overflow-hidden object-top space-x-10 m-2 rounded-3xl   '>
//             <div>
//                 <img src="https://cdn.dribbble.com/userupload/16375469/file/original-88af8a5c75fc7670988f234b2f4c7f2a.png?resize=640x2214&vertical=center" alt="" 
//                 className={clsx(
//                     'perspective-distant h-[2000px]',
//                     'transform -rotate-z-30 rotate-x-60 -rotate-y-10')}
//                 />
//             </div>
//                         <div>
//                 <img src="https://cdn.dribbble.com/userupload/16375469/file/original-88af8a5c75fc7670988f234b2f4c7f2a.png?resize=640x2214&vertical=center" alt="" 
//                 className={clsx(
//                     'perspective-distant h-[2000px]',
//                     'transform -rotate-z-30 rotate-x-60 -rotate-y-10')}
//                 />
//             </div>
//                <div>
//                 <img src="https://cdn.dribbble.com/userupload/16375469/file/original-88af8a5c75fc7670988f234b2f4c7f2a.png?resize=640x2214&vertical=center" alt="" 
//                 className={clsx(
//                     'perspective-distant h-[2000px]',
//                     'transform -rotate-z-30 rotate-x-60 -rotate-y-10')}
//                 />
//             </div>
   
   
//         </Card>
//     </div>

//   )
// }
