'use client'

// import React from 'react'

import clsx from "clsx"


// type StateProp = {
//     children? : React.ReactNode;
//     className?: string;
// }

// export const StatCard = () => {
//   return (
//     <div className=' bg-white border border-slate-200 p-4 rounded-2xl w-100'>
//         <StatHeader>
//             Leads Contacted
//         </StatHeader>
//         <StatValue />
//         <div className='w-full h-0.5 rounded-full my-4 bg-neutral-200'></div>
//         <StatLoader / >
//     </div>
//   )
// }


// const StatHeader = ({children, className}: StateProp) => {
//     return <h1 className='font-primary text-gray-800 tracking-tight'>
//         {children}
//     </h1>
// }

// const StatValue = () => {
//     return (
//         <div className='flex justify-between items-center mt-4'>
//             <h1 className='font-[Inter] text-5xl font-medium text-gray-900'>1,234</h1>
//             <div className='flex gap-2 justify-between items-center'>
//                 <p className='text-gray-600'>targer:</p>
//                 <div className='px-2 py-1 text-gray-900 bg-slate-100 border border-slate-200 rounded-lg'>5000</div>
//             </div>

//         </div>
//     )
// }

// const StatLoader = () => {
//         return (
//         <div className='w-full h-4 bg-slate-200 rounded-full'>
//             <div className='h-4 bg-black rounded-full w-30'>
//                 <div className='bg-gray-50 rounded-md absolute z-20 px-2 py-1 border border-slate-200 text-md '>drag</div>
//             </div>

//         </div>
//     )
// }



import { useState } from "react"

export const StatCard = () => {

    const [count, setCount] = useState('')

    return <div className={clsx("outline outline-dashed p-2",

    )}>
        <Button />
    </div>
}

const Button = () => {
        return <div className="flex justify-between items-center gap-4">
        <div className="bg-blue-600/20 px-4 py-2 outline outline-dashed outline-blue-600 hover:bg-blue-400/50 cursor-pointer ">
        <p className="font-primary text-blue-600 w-full h-full ">Click Me</p>
        </div>
        <div className={clsx('px-4 py-2 outline outline-dashed  outline-blue-600 hover:bg-slate-100 cursor-pointer')}>
            <p className="font-primary w-full h-full text-blue-600 ">Connect</p>
        </div>
    </div>
}