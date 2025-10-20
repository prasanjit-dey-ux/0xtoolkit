'use client'
import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import { Github, Globe, icons, Linkedin, Repeat2,} from 'lucide-react'
import { Btn1, ToggleBtn } from '@/ui/button1'

export const SelectedTrackingSources = () => {
  return (
    <div className='max-w-5xl mx-auto min-h-screen flex justify-center items-center px-40 font-primary selection:bg-orange-200'>
        <div className='bg-white rounded-2xl border border-neutral-300 [box-shadow:0px_11px_24px_0px_rgba(135,135,135,0.10),0px_45px_45px_0px_rgba(135,135,135,0.09),0px_100px_60px_0px_rgba(135,135,135,0.05),0px_178px_71px_0px_rgba(135,135,135,0.01),0px_278px_78px_0px_rgba(135,135,135,0.00)] '>
          <div className=' flex gap-4 items-center p-4 border-b border-neutral-300 text-neutral-950'>
            <Image 
            src="/icons/tick_black.svg"
            alt="tick"
            height={24}
            width={24}
            className="bg-lime-400 p-1 rounded-full"
            />
            <h1 className='text-base font-medium font-primary'>Add company details</h1>
          </div>
          <div className='flex gap-4 items-center py-4 px-4 border-b border-neutral-300 text-neutral-950'>
            <Image 
            src="/icons/tick_black.svg"
            alt="tick"
            height={24}
            width={24}
            className="bg-lime-400 p-1 rounded-full"
            />
            <h1 className='text-base font-medium font-primary'>Confirm your competitors</h1>
          </div>
       
       {/*Select tracking sources*/}
        <div className='p-4 space-y-6 '> 
        {/*Title */}
          <div className='space-y-1'>
            <h1 className='text-lg font-medium font-primary'>Select tracking sources</h1>
            <p className='text-gray-500 w-2/3 text-base font-secondary'>MarketPulse monitors selected sources and
generated daily AI summaries.</p>
          </div>

        <div className='grid lg:grid-cols-2  bg-zinc-100 p-2 gap-2 rounded-xl border border-zinc-200'>
          {SOURCE.map(src => (
            <Card key={src.key} >
              <CardHeader>
                  <div className='flex items-start gap-4 w-full'>
                      {src.icon}
                    <div className="flex-1">
                      <CardTitle>{src.label}</CardTitle>
                      <CardDescription>{src.desc}</CardDescription>
                    </div>
                    <ToggleBtn />
                  </div>
              </CardHeader>
            </Card>       
          ))}
        </div>
        <div className='flex justify-end items-center mb-4'>
            <Btn1>Continue</Btn1>
        </div>
        </div>

        </div>
    </div>
  )
}

const SOURCE = [
  {
    key: "website", 
    label: "Website", 
    desc: "Detect content & price updates.",
    icon: <span className='bg-orange-100 rounded-md flex justify-center items-center p-1'>
      <Globe size={16} color="#F79009"/>
    </span>,
    className: "bg-orange-50 p-1"
  },
    {
    key: "changelog",
    label: "Changelog",
    desc: "Summarize new product releases.",
    icon: (
      <span className="bg-orange-100 p-1 rounded-md flex items-center justify-center">
        <Repeat2 size={16} color="#F79009" />
      </span>
    )
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    desc: "See hiring and announcement patterns.",
    icon: (
      <span className="bg-orange-100 p-1 rounded-md flex items-center justify-center">
        <Linkedin size={16} color="#F79009" />
      </span>
    )
  },
  {
    key: "X(Twitter)",
    label:"X(Twitter)",
    desc: "See hiring and announcement patterns",
    icon: (
      <span className="bg-orange-100 p-1 rounded-md flex items-center justify-center">
        <Image
        src='/icons/x_orange.svg'
        alt='x/twitter'
        height={16}
        width={16}
        />
      </span>
    )
  },
  {
    key: "github",
    label: "GitHub",
    desc: "Follow commits & repo activity.",
    icon: (
      <span className="bg-orange-100 p-1 rounded-md flex items-center justify-center">
        <Github size={16} color="#F79009" />
      </span>
    )
  }
]


const Card = ({children, className} : {children: React.ReactNode, className?: string}) => {
  return <div className={clsx("p-4 bg-white rounded-xl flex justify-between items-center w-full border border-neutral-300",className)}>
    {children}
  </div>
}

const CardHeader = ({children}:{children:React.ReactNode}) =>{
  return <div className='  flex items-start justify-between gap-2 w-full '>
    {children}
  </div>
}

const CardTitle = ({children, className}: {children:React.ReactNode, className?: string}) => {
  return <h2 className={clsx('text-base tracking-tight font-medium font-primary',className)}>
    {children}
  </h2>
}

const CardDescription = ({children, className}: {children:React.ReactNode, className?: string}) => {
  return <p className={clsx('text-sm text-gray-700 font-secondary',className)}>
    {children}
  </p>

}
