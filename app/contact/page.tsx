"use client";
import React from 'react'
import clsx from 'clsx'


export default function Contact(){
    return <div className='max-w-5xl h-screen bg-neutral-100 mx-auto'>
        <div className='grid grid-cols-2 divide-x divide-neutral-200'>
            <div className='bg-pink-200 h-screen w-full'>

            </div>
            <div className={clsx(
                'bg-white h-screen w-full',
                'bg-[radial-gradient(var(--color-neutral-100)_1px,transparent_1px)]',
                '[background-size:10px_10px]'
                
                )}>

            </div>
        </div>
        
    </div>
}
