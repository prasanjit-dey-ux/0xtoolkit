"use client"
import React from 'react'

export const SVGComponent = () => {
  return (
    <div className='flex gap-12 justify-between items-center p-10 bg-white rounded-lg border
    border-neutral-200 shadow-md '>
        <div className='flex flex-col justify-between'>
            <div className='relative text-sm'>
                <p>Meeting Summarizer</p>
                <TopLine className='absolute top-2 left-32' />
            </div>
            <div className='relative text-sm'>
                <p>Code Reviewer</p>
                <MidLine className='absolute top-2 left-32' />
            </div>
            <div className='relative text-sm'>
                <p>Customer Support</p>
                <BottomLine className='absolute top-2 left-32' />
            </div>
        </div>
    </div>
  )
}


export const SVG = () => {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className='text-neutral-400 size-4'
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
            <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
        </svg>
    )
}

export const TopLine = (props: React.SVGProps<SVGSVGElement>) => {
    return (
<svg width="376" height="25" viewBox="0 0 376 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M0 0.5H375.5V25" stroke="#282828"/>
</svg>


    )
}

export const MidLine = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="375" height="1" viewBox="0 0 375 1" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0 0.5H375" stroke="currentColor"/>
        </svg>
    )
}   

export const BottomLine = (props: React.SVGAttributes<SVGSVGElement>) => {
    return (
<svg width="376" height="25" viewBox="0 0 376 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M0 24H375V-2.38419e-07" stroke="#282828"/>
</svg>

    )
}   


