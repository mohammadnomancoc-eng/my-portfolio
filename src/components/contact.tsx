import { CONFIG } from '@/config'
import { cn } from '@/lib/utils'
import SocialTooltip from '@/components/social-tooltip'
import ContactCard from '@/components/contact-card'
import { buttonVariants } from './ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip'

const Contact = () => {
    return (
        <footer id='contact' className='scroll-mt-24 px-4 pb-20'>
            <h2>Get in touch</h2>
            <p className='text-muted-foreground max-w-[65ch] leading-relaxed'>
                Feel free to reach out if you want to collaborate on a project,
                have a question, or just want to connect.
            </p>
            <div className='mt-8 flex flex-wrap items-center gap-10 md:gap-14'>
                <ContactCard />
                <div className='flex flex-col items-start gap-6'>
                    <SocialTooltip />
                    {CONFIG.calendarLink && (
                        <TooltipProvider delayDuration={70}>
                            <div className='flex items-center gap-3'>
                                <p className='text-muted-foreground text-sm'>
                                    Or we can book a call directly
                                </p>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={CONFIG.calendarLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label='Book a call'
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                })
                                            )}
                                        >
                                            Book a call
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>cal.com</TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Contact
