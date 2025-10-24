"use client";
import React, { useState } from 'react'
import clsx from 'clsx'
import { CardBox } from '../showcase/page';
import Image from 'next/image';


export default function Contact(){
    
    const [profileImage, setProfileImage] = useState('');

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
                <Group>
                    <Label>Profile Image</Label>
                    <ProfileImageCard
                    value={profileImage}
                    onChange={e=> setProfileImage(e.target.value)}
                    />              
                    
                </Group>
                <Group>
                    <Label>Banner Image</Label>
                </Group>
                <ImageInputCard>
                    <Button></Button>
                </ImageInputCard>
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

const Button = ({children, className}:{children:React.ReactNode, className?:string}) => {
    return <button className={clsx('px-4 py-2 bg-[#FF5A4D] rounded-md text-white hover:bg-[#f74235] cursor-pointer drop-shadow-sm',
        'transitio-all duration-150 ease-out hover:-translate-y-0.5 active:scale-98',
        className
    )}>
        {children}
    </button>
}


const ProfileImageCard = ({ value, onChange }: { value: string; onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={value || '/profile.gif'}
        alt="Profile Image"
        height={88}
        width={88}
        className="rounded-full object-cover w-20 h-20"
      />
      <Input
        name="profileImage"
        placeholder="Paste your image url"
        value={value}
        onChange={onChange}
        type="url"
        className="flex-1"
      />
      <Button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-paste-icon lucide-clipboard-paste"><path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg></Button>
    </div>
  );
};

type ImageInputProps = {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    layout?: 'row' | 'column';
    inputName?: string;
    inputPlaceholder?: string;
    defaultImage?: string;
    imgClassName?: string;
    children?: React.ReactNode;
}

const ImageInputCard = ({
    value,
    onChange,
    layout = "row",
    inputName = "imageUrl",
    inputPlaceholder = "Paste your image url",
    defaultImage = '/profile.gif',
    imgClassName = 'rounded-full w-20 h-20',
    children,
}: ImageInputProps) => {
    
    if( layout === 'row') {
        return (
            <div className='flex item-center gap-2'>
                <img 
                    src={value || defaultImage}
                    alt="Image Preveiw"
                    className={`object-cover ${imgClassName}`}
                />
                <Input
                    name={inputName}
                    placeholder=''
                />
            </div>
        )
    }


}



