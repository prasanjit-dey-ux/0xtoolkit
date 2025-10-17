'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image'


export const Card = () => {

//   const handleThemeChange = () => {
//     const currentTheme = document.documentElement.classList.contains("dark")
//         ?"light"
//         :"dark";
//     document.documentElement.classList.toggle("dark");
//     localStorage.setItem("theme", currentTheme);
//   }

// there is a better way
const {theme, setTheme} = useTheme();

const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
}

  return (
    <div className='h-screen dark:-bg- w-full flex flex-col items-center justify-center text-black selection:bg-pink-300 font-primary dark:selection:bg-green-400 bg-[#F0F1F3]'>
        <div className='bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 rounded-3xl h-80 w-100 px-6 py-8'>
            <div>
                <div className='text-xs text-black dark:text-neutral-400'>Unclaimed earn tokens</div>
                <div className='flex justify-start items-center gap-2'>
                     <h1 className='text-[40px] font-medium dark:text-neutral-100'>7560.83</h1>
                     <div className='bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 pl-1 pr-1.5 py-1 rounded-full text-xs flex font justify-center gap-1 '>
                        <div className='bg-white dark:bg-neutral-500 rounded-full p-1 flex justify-center items-center'>
                            <Image 
                        src="/eth.png" 
                        alt='Eth'
                        draggable="false"
                        width={8}
                        height={8}
                        />
                        </div>
                        ETH Tokens
                     </div>
                </div>
                <div className='w-full h-[0.5px] bg-neutral-200 dark:bg-neutral-800 mt-4'>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex flex-col py-1 gap-1'>
                        <p className='text-xs text-neutral-400 dark:text-neutral-500'>Start Date</p>
                        <p className='text-xs text-black dark:text-neutral-100'>16 Oct, 2025</p>
                    </div>
                    <div className='flex flex-col p-1 gap-1'>
                        <p className='text-xs text-neutral-400 dark:text-neutral-500'>Cliff End</p>
                        <p className='text-xs text-black dark:text-neutral-100'>20 Oct, 2025</p>
                    </div>
                        <div className='flex flex-col p-1 gap-1'>
                        <p className='text-xs text-neutral-400 dark:text-neutral-500 '>Release End</p>
                        <p className='text-xs text-black dark:text-neutral-100 '>24 Oct, 2025</p>
                    </div>
                </div> 
                <button className='px-6 rounded-full bg-neutral-950 dark:bg-white text-neutral-200 border border-neutral-700 dark:border-neutral-400  dark:text-neutral-950 text-sm mt-18 cursor-pointer h-10 flex  items-center text-center'>Claim earn Tokens</button>             
            </div>
        </div>
        <button onClick={handleThemeChange} className='bg-neutral-50 text-sm rounded-xl border border-neutral-200 text-black hover:bg-neutral-100 transition-transform delay-200 mt-10 px-4 py-2 cursor-pointer inset-0'>Switch theme</button>
    </div>
  )
}
