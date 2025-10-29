'use client'
import React from 'react'
import clsx from 'clsx'
import { Brain, FormInputIcon, Search, Send } from 'lucide-react'
import Image from 'next/image'
import { SVGLines } from '../svg-components/svg-lines'

export const Grid = () => {

  return (
    <div className='max-w-5xl py-20 mx-auto min-h-screen border-x border-neutral-200 bg-gray-100 selection:bg-red-400 selection:text-white '>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 divide-x divide-y divide-neutral-200'>
        <Card className='lg:col-span-2'>
            <div className='flex flex-col justify-center items-center w-full p-4'>
            <h1 className='text-red-400 font-medium text-md'>Features</h1>
                <div className='mt-6 space-y-4'>
                    <div className='text-3xl font-medium tracking-tight font-primary text-center'>Built for Agentic Intelligence</div>
                    <p className='w-100 text-center text-sm text-neutral-500'>Build, test and deploy AI agents with a powerful visual interface designed for technical teams</p> 
                </div>
            </div>


        </Card>
        <Card>
            <CardHeader>
                <Brain size={18} />
                <CardTitle>LLM Model Selector</CardTitle>
            </CardHeader>
            <CardDescription>
                Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.            </CardDescription>
            <CardSkeleton className='mask-radial-from-10%' >
                <div className='relative'>
                    <OpenAICard />
                </div>
                <ModelSkeleton />
            </CardSkeleton>
        </Card>
        <Card>
            <CardHeader>
                <Search size={18} />
                <CardTitle>Text to workflow builder</CardTitle>
            </CardHeader>
            <CardDescription>
               Preview and debug workflow logic in a safe sandbox before deploying, helping you iterate with confidence.
            </CardDescription>
            <CardSkeleton className="bg-gray  ">
                    <MainSkeleton className='px-8' />
            </CardSkeleton>
        </Card>
        <Card className='lg:col-span-2'>
            <CardHeader>
                <Search size={18} />
                <CardTitle>Notion Search</CardTitle>
            </CardHeader>
            <CardDescription>
                I forked the Notion Search extension so I can easily paste tokenized doc links into Slack.
            </CardDescription>
            <CardSkeleton className='bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)] grid grid-cols-2 '>
                    <div className='w-full pr-34 py-20 pl-10 bg-blue-200'>
                    <SVGLines />  
                    </div>
            </CardSkeleton>

        </Card> 
        </div>
        
    </div>
  )
}

const MainSkeleton = ({className} : {className?: string}) => {
    const chat = [{
        role: "user",
        text: "Hello, how are you?"
    },{
        role: "assistant",
        text: "I'm good, thank you! How can I help you today?"
    },{
        role: "user",
        text: "I want to create a workflow that will send an email to all my clients"
    },{
        role: "assistant",
        text: "Nah, do it yourself"
    }];

    const UserMessage = ({text}: { text: string }) => {
        return <div className='flex justify-end items-start gap-2'>
        <div className='flex ml-auto justify-end items-center gap-2 bg-blue-500 rounded-tr-2xl 
        rounded-tl-2xl rounded-bl-2xl rounded-br-lg w-fit px-4 py-2'>
            <p className='text-sm text-white'>{text}</p>
        </div>
        
        <div className='rounded-full size-6 flex justify-center'>
            <Image
            src="/avatar.png"
            height={24}
            width={24}
            alt='avatar'
            className='rounded-full'
            />
        </div>  
        </div>
       }

    const AIMessage = ({text}: { text: string }) => {
        return <div className='flex justify-start gap-2'>
            <div className='rounded-full size-5 shrink-0  bg-cover'>
                <Image
                src="/ai.jpg"
                alt='assistant'
                height={20}
                width={20}
                />
            </div>
            <div className='w-fit mr-auto flex justify-start items-end gap-2 bg-white rounded-tr-full 
        rounded-tl-full rounded-bl-lg rounded-br-full px-4 py-2'>
                <p className='text-sm text-black'>{text}</p>
            </div>
            
        </div>  
    }
    

    return <div className={clsx("h-full w-full relative flex flex-col",className)}>

        <div className='flex-1 overflow-y-auto flex flex-col gap-4 pb-4 px-4'>
                {chat.map((message, index) => {
            return message.role === "user" ? (
                <UserMessage key={index} text={message.text} />
            ): (
                <AIMessage key={index} text= {message.text} />
            )
        })}
    </div>

<div className=' bg-white p-4'>
  <div className='relative'>
    <input
      type="text"
      placeholder='Type your message here'
      className='w-full h-10 bg-white border border-gray-400 px-4 pr-10 text-xs rounded-md placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
    <button className='absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded'>
      <Send size={18} className='text-gray-600' />
    </button>
  </div>
</div>

    </div>
}

const OpenAICard = ({className}: {className?: string}) => {
 return (
    <div className={clsx(
      "absolute top-4 right-8 border border-neutral-300 rounded-lg z-20 w-34 p-2 bg-white",
      className
    )}>
      <div className='flex justify-between items-center gap-4'>
        <Image src="/icons/openai.svg" alt="OpenAI" width={12} height={12}/>
        <CardTitle className="text-[10px] font-medium">Open AI</CardTitle>
        <span className="ml-auto font-mono text-[10px] text-gray-600">GPT 5</span>
      </div>
      <div className="bg-gray-300 h-[1px] w-full my-2" />
      <StatusBadge label="Connected" color="blue" className='w-fit' />
    </div>
  );
}

const StatusBadge = ({
    label,
    color,
    className,
}:{
    label: string
    color: "emerald" | "red" | "yellow" | "blue"
    className?: string
}) => {
    const statusColor = {
        emerald: 'bg-emerald-50 text-emerald-500 border border-emerald-500',
        red: 'bg-red-50 text-red-500 border border-red-500',
        yellow: 'bg-yellow-50 text-yellow-500 border border-yellow-500',
        blue: 'text-blue-500 bg-blue-50 border border-blue-500',
    };
    return <div className={clsx(
        "text-[10px] px-2 py-0.5 rounded-sm",
        statusColor[color],
        className
    )}>    
        {label}
    </div>
}

const CardSkeleton = ({children, className} : {children: React.ReactNode; className?: string}) => {
    return <div className={clsx('bg-gray-50 h-60 w-full my-4 rounded-lg overflow-hidden',
        "bg-[radial-gradient(var(--color-neutral-100)_1px,_transparent_1px)]",
        "[background-size:10px_10px]",
        "mask-radial-from-40%",
        className
    )}>{children}</div>
}


const Card = ({className, children}:{
    className?: string;
    children: React.ReactNode
}) => {
    return <div className={clsx("bg-white p-4", className)}>
        {children}
    </div>
}

const CardHeader = ({ children } : { children: React.ReactNode }) => {
    return <div className={clsx('flex items-center gap-2')} >{children}</div>
}

const CardTitle = ({ children, className}:{ children:React.ReactNode; className?: string }) => {
    return <h2 className={clsx('font-medium text-lg tracking-tight', className)}>
        {children}
    </h2>
}

const CardDescription = ({children, className}:{ children:React.ReactNode; className?: string }) => {
    return <p className={clsx('text-base text-neutral-400', className)}>{children}</p>
}

const ModelSkeleton = ({className}:{className?: string}) => {
    const models = [
        {
            name: "Claude 4 Opus",
            icon: "icons/claude.svg",
            status: "Unavailable",
            color: "red"
            
        },
        {
            name: "ChatGPT",
            icon: "icons/openai.svg",
            status: "Connected",
            color: "emerald"

        },
        {
            name: "Llama 3.2",
            icon: "icons/meta.svg",
            status: "Waiting",
            color: "yellow"
        }
    ] as const;

    return <div className={clsx("h-full w-full p-14  ",className)}>
        <div className=' bg-white h-60 rounded-xl border border-neutral-200 p-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <div className='flex items-center gap-1'>
                <div className='rounded-full bg-red-500 size-3'></div>
                <div className='rounded-full bg-yellow-400 size-3'></div>
                <div className='rounded-full bg-emerald-500 size-3'></div>
            </div>

            <div className='mt-10 flex justify-start items-center gap-2 border-b border-neutral-200 pb-2'>
                <FormInputIcon size={14} color='black'/>
                <h2 className='text-xs text-black'>All models</h2>
                <p className='bg-neutral-100 text-gray-900 text-xs px-2 rounded-full'>69,890</p>
            </div>

            <div className='mt-2 space-y-0.5'>
                {models.map((model, index) => {
                    return <div key={index} className=' flex justify-between items-center p-1'>
                        <div className='flex gap-2 justify-between items-center'>
                            <Image 
                            src={model.icon}
                            alt={model.name}
                            height={12}
                            width={12}
                            />
                            <span className='text-xs'>{model.name}</span>
                        </div>
                        <StatusBadge label={model.status} color={model.color} />
                    </div>
                })}

            </div>

            

        </div>

    </div>
}

