"use client";
import React from 'react'
import clsx from 'clsx'
import { CardBox } from '../showcase/page';


export default function Contact(){
    return <div className='max-w-7xl h-screen bg-neutral-100 mx-auto'>
        <div className='grid grid-cols-2 divide-x divide-neutral-200 '>
            <form className='bg-neutral-50 h-screen p-12'>
                <h1 className='text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 '>User Information</h1>
                <div className='flex flex-col my-10 gap-8'>
                    <Group>
                    <Label htmlFor="username" className="after:content-['*'] after:text-orange-600 after:ml-0.5">Username</Label>
                    <Input
                    name='username'
                    type='text'
                    placeholder='Enter your username'
                    />
                </Group>  
                <Group>
                    <Label htmlFor='displayname'>
                        Display Name
                    </Label>
                    <Input
                        name='displayname'
                        type='text'
                        placeholder='Enter your display name'
                        />
                </Group>
                <Button>Submit</Button>                          
                </div>
            </form>
            <div className={clsx(
                'bg-white h-screen flex justify-center items-center',
                'bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]',
                'mask-radial-from-60%',
                '[background-size:10px_10px]'
                )}>
                <CardBox className='border border-neutral-200 w-80 rounded-2xl'> 
                    Profile card
                </CardBox>
            </div>
        </div>
        
    </div>
}

const Label = ({children, className, ...props}:{children: React.ReactNode, className?:string} & React.LabelHTMLAttributes<HTMLLabelElement> ) => {
    return <label {...props}  className={clsx("text-neutral-800 font-medium",className)}>
        {children}
    </label>
}

const Input = ({ className,...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
                    <input 
                    name='Email'
                    type='text'
                    placeholder='Enter your email'
                    className={clsx(
                        'shadow-input bg-white px-4 py-2 rounded-md border border-transparent',
                        'focus:outline-none focus:border-gray-300 focus:bg-gray-100 focus:ring-2 focus:ring-gray-300  focus:ring-offset-2 ',
                        'will-change-transform duration-200',
                        'placeholder:text-neutral-400',
                        className
                    )} 
                    {...props}
                    />

    )
}

const Group = ({children}:{children:React.ReactNode}) => {
    return <div className='flex flex-col gap-2'>
        {children}
    </div>
}

const Button = ({children}:{children:React.ReactNode}) => {
    return <button className={clsx('w-full px-4 py-2 bg-[#FF5A4D] rounded-md text-white hover:bg-[#f74235] cursor-pointer drop-shadow-sm',
        'transitio-all duration-150 ease-out hover:-translate-y-0.5 active:scale-98'
    )}>
        {children}
    </button>
}



