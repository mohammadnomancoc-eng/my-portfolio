import React from 'react'
import { Link } from 'react-router-dom'

interface MoreProjectsButtonProps {
  to?: string
  text?: string
  onClick?: () => void
}

export const MoreProjectsButton: React.FC<MoreProjectsButtonProps> = ({
  to = '/projects',
  text = 'More Projects',
  onClick,
}) => {
  const content = (
    <div className="group cursor-pointer border bg-zinc-200 dark:bg-zinc-900 border-zinc-400 dark:border-zinc-500/30 bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full transition-all duration-300 hover:border-zinc-500 dark:hover:border-zinc-400 shadow-md">
      <div data-slot="button" className="cursor-pointer gap-2 whitespace-nowrap text-sm font-medium transition-all shrink-0 outline-none backdrop-blur-sm shadow-[inset_0_3px_2px_rgba(255,255,255,0.1),inset_0_-3px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.20),inset_0_-8px_12px_rgba(0,0,0,0.4),0_6px_14px_-8px_rgba(0,0,0,0.3)] hover:bg-zinc-900 hover:border-black/15 active:translate-y-[1px] bg-black dark:bg-black text-white px-4 py-2 h-[40px] rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-life-buoy h-4 w-4 animate-spin" aria-hidden="true">
          <circle cx={12} cy={12} r={10} />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx={12} cy={12} r={4} />
        </svg>
        <p className="flex items-center gap-2 justify-center font-semibold text-white tracking-wide">{text}</p>
      </div>
      <div className="group-hover:ml-4 ease-in-out transition-all duration-300 size-[24px] flex items-center justify-center rounded-full border border-zinc-400 dark:border-zinc-600 text-black dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:-rotate-45 ease-in-out transition-all duration-300">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </div>
  )

  if (onClick) {
    return (
      <button onClick={onClick} className="inline-block text-black dark:text-white focus:outline-none">
        {content}
      </button>
    )
  }

  return (
    <Link to={to} className="inline-block text-black dark:text-white focus:outline-none">
      {content}
    </Link>
  )
}

export default MoreProjectsButton
