"use client";
import React from 'react'
import clsx from 'clsx';
import { Btn1, ToggleBtn } from '@/ui/button1';

const Card = ({children, className}: {children:React.ReactNode, className?: string}) => {
    return <div className={clsx('bg-white h-80 flex justify-center items-center',
        "bg-[radial-gradient(var(--color-neutral-100)_1px,_transparent_1px)]",
        "[background-size:10px_10px]",
         className
    )}>
        {children}
    </div>
}

export default function ShowCase() {
  return (
    <div className='max-w-5xl mx-auto min-h-screen bg-gray-100 border-x border-neutral-200 '>
        <div className='grid grid-cols-2 divide-x divide-y divide-neutral-200'>
            <Card>
                <Btn1>Continue</Btn1>
            </Card>
            <Card>
                <ToggleBtn />   
            </Card>         
        </div>
    </div>
  )
}
