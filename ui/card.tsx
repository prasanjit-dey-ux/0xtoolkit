import React from 'react'
import clsx from 'clsx'

export const Hovercard = ({className}: {className?:string}) => {
  return (
    <div className={clsx("bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)]",
        "[background-size:10px_10px]",
        "size-50 border border-neutral-200 rounded-2xl bg-neutral-100 group-hover:bg-neutral-200",
        "shadow-lg relative perspective-distant transition-colors duration-300 delay-300",
        className
    )}
    >    
      <img src="https://i.pinimg.com/736x/30/c0/3b/30c03b076f9045ec09b39e6607bffc15.jpg" alt=""
      className={clsx(
        'transition-transform delay-200 [transition-timing-function:cubic-bezier(.4,0,.2,1)]',
        'object-cover rounded-2xl h-full w-full object-bootom border border-neutral-200',
        'transform rotate-x-30 rotate-z-30 -rotate-y-30 translate-z-20',
        'group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85'

      )}
      />
    </div>
  )
}

export const PolarCard = () => {
      return <div className='flex justify-center items-center grid-col-2 size-60 px-2 bg-white border border-neutral-200 overflow-hidden'>
        <div className='border border-neutral-200 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-50 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-50 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-100 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-200 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-300 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-400 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-500 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-600 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-700 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-800 w-full h-60 p-2'>
                  <div className='hover:border border-neutral-200 bg-blue-900 w-full h-60 p-2'>
          
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
}
