// Prefer color scheme
"use client"

import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const ModeToggle = () => {

    const {theme, setTheme, systemTheme} = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    const SWITCH_THEME = () => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
    }
 
    return (
    <div className='relative flex justify-center items-center h-screen font font-primary'>

        <button onClick={SWITCH_THEME} className=' bg-neutral-200 p-2 rounded-2xl outline-none hover:bg-sky-100  dark:bg-orange-200 shadow-md hover:dark:bg-orange-300 flex justify-center items-center '>
            <div className='relative bg-neutral-50 p-6 rounded-xl flex justify-center items-center   hover:border-white hover:bg-neutral-100 dark:border-orange-100 transition-transform delay-200 dark:text-neutral-700  border border-neutral-300  shadow-lg '>
                <Image 
                    src='/sun.svg'
                    height={24}
                    width={24}
                    alt='light mode'
                    className= {`absolute transition-all duration-300 ease-in-out object-contain
      ${currentTheme === "dark" ? "scale-0 opacity-0 rotate-45" : "scale-100 opacity-100 -rotate-0"}`}
                /> 
                <Image 
                    src='/moon.svg'
                    height={24}
                    width={24}
                    alt='dark mode'
                    className= {`absolute transition-all duration-300 ease-in-out object-contain
      ${currentTheme === "dark" ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-45"}`}
                />

            </div>
        </button>

    </div>
  )
}
