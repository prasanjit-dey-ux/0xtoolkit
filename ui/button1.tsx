import clsx from 'clsx'
import React, { useState } from 'react'

export const Btn1 = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <button className={clsx('bg-neutral-950 text-neutral-50 px-4 py-2 w-fit rounded-lg text-base hover:bg-neutral-900 hover:text-neutral-100 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-100 transition-transform delay-200 cursor-pointer',className)}>
      {children}
    </button>
  )
}

export const ToggleBtn = ({
  onColor ="bg-orange-400",
  offColor = "bg-gray-300",
  className
}: {
  onColor?:string,
  offColor?: string,
  className?: string}) => {

  const [isOn, setIsOn] = useState(false);

  const handleClick = () => setIsOn(prev => !prev)

  return <button className={clsx('rounded-full bg-blue-950 w-10 h-6 p-1 flex items-center transition-colors duration-300 cursor-pointer',
  isOn ? onColor : offColor,
  className)}
  onClick={handleClick}
  aria-pressed={isOn}
  >
  <div className={clsx("rounded-full w-4 h-4 bg-white transition-transform duration-300",
          isOn ? "translate-x-4" : "translate-x-0")}>
  </div>
  </button>
}
