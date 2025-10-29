'use client'

import { div } from "motion/react-client";
import { SVG } from "./svg1";
import { motion } from "motion/react"

// export const SVGLines =  () => {
//     return(   
//         <div className="rounded-md flex justify-between items-center w-full ">
//             <div className="flex flex-col gap-5 justify-between">
//                 <div className="relative text-md">
//                     Meeting Summarizer
//                     <TopLine className="absolute top-3 left-40" />
//                 </div>
//                 <div className="relative text-md">
//                     Code Reviewer
//                     <MidLine className="absolute top-3 left-40" />
//                 </div>
//                 <div className="relative text-md">
//                     Customer Support
//                     <BottomLine className="absolute -top-3 left-40" />
//                 </div>  
//             </div>
//         <div className="relative z-20 size-12 rounded-sm bg-black -translate-x-84 p-px ">
//             <div className="w-full h-full bg-white rounded-[3px]"></div>
//         </div>
            
//         </div>
//     )
// }

export const SVGLines = () => {
  return (
    <div
      className="rounded-md flex justify-between items-center w-full font-primary"
    >
      <div className="flex flex-col gap-5 justify-between">
        <div className="relative text-[10px] font-medium">
          Meeting Summarizer
          <TopLine className="absolute top-2 left-30" />
        </div>
        <div className="relative text-[10px] font-medium">
          Code Reviewer
          <MidLine className="absolute top-2 left-30" />
        </div>
        <div className="relative text-[10px] font-medium">
          Junior Intern
          <BottomLine className="absolute -top-4 left-30" />
        </div>
      </div>
      <div className="size-12 -translate-x-8 rounded-sm bg-neutral-100 p-px overflow-hidden relative z-20">
        <div className="h-full w-full relative z-20 bg-white rounded-[3px] flex items-center justify-center">
            <SVG />
        </div>
        <div className="absolute h-full w-full inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] animate-spin scale-[1.4]"></div>
        <div className="absolute h-full w-full inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] animate-spin scale-[1.4] [animation-delay:0.6s] "></div>
      </div>
    </div>
  );
};

export const SVGTree = () => {
    return (
        <div>
            <HorzLine />

        </div>
    )
}




export const TopLine = (props: React.SVGProps<SVGSVGElement>) => {
    return (
<svg width="376" height="25" viewBox="0 0 376 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="" {...props}>
<path d="M0 0.5H240V25" stroke="url(#line-one-gradient)" strokeLinecap="round"/>
<defs>
    <motion.linearGradient
        gradientUnits="userSpaceOnUse"
        id="line-one-gradient"
        initial={{
            x1: "0%",
            x2: "10%"
        }}
        animate={{
            x1:"90%",
            x2: "100%"
        }}
        transition={{
            duration: 2,
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear",
        }}
    >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.33" stopColor="#F17563" />
        <stop offset="0.66" stopColor="#F17563" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />       
    </motion.linearGradient>    
</defs>
</svg>


    )
}

export const MidLine = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="376" height="1" viewBox="0 0 376 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400" {...props}>
        <path d="M0 0.5H240" stroke="url(#line-mid-gradient)"/>
        <defs>
    <motion.linearGradient
        gradientUnits="userSpaceOnUse"
        id="line-mid-gradient"
        initial={{
            x1: "0%",
            x2: "10%"
        }}
        animate={{
            x1:"90%",
            x2: "100%"
        }}
        transition={{
            duration: 2,
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear",
        }}
    >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.33" stopColor="#4f95ff" />
        <stop offset="0.66" stopColor="#4f95ff" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />       
    </motion.linearGradient>    
</defs>
</svg>
    )
}   

export const BottomLine = (props: React.SVGAttributes<SVGSVGElement>) => {
    return (
<svg width="376" height="25" viewBox="0 0 376 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400" {...props}>
<path d="M0 24H240V-2.38419e-07" stroke="url(#line-below-gradient)"/>
    <defs>
    <motion.linearGradient
        gradientUnits="userSpaceOnUse"
        id="line-below-gradient"
        initial={{
            x1: "0%",
            x2: "10%"
        }}
        animate={{
            x1:"90%",
            x2: "100%"
        }}
        transition={{
            duration: 2,
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear",
        }}
    >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.33" stopColor="#ffe84f" />
        <stop offset="0.66" stopColor="var(--color-yellow-500)" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />       
    </motion.linearGradient>    
</defs>
</svg>

    )
}   

export const HorzLine = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="376" height="1" viewBox="0 0 376 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400" {...props}>
        <path d="M0 0.5H240" stroke="url(#line-mid-gradient)"/>
        <defs>
    <motion.linearGradient
        gradientUnits="userSpaceOnUse"
        id="line-mid-gradient"
        initial={{
            x1: "0%",
            x2: "10%"
        }}
        animate={{
            x1:"90%",
            x2: "100%"
        }}
        transition={{
            duration: 2,
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear",
        }}
    >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.33" stopColor="#4f95ff" />
        <stop offset="0.66" stopColor="#4f95ff" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />       
    </motion.linearGradient>    
</defs>
</svg>
    )
}   



