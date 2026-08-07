import { CONFIG } from '@/config'
import SocialTooltip from '@/components/social-tooltip'
import ContactCard from '@/components/contact-card'
import WhatsappButton from '@/components/whatsapp-button'
import CallButton from '@/components/call-button'
import { Separator } from '@/components/ui/separator'

const Contact = () => {
    return (
        <footer id='contact' className='scroll-mt-24 px-1 sm:px-4 pb-6'>
            <h2>Get in touch</h2>
            <p className='text-muted-foreground max-w-[65ch] leading-relaxed mb-8'>
                Feel free to reach out if you want to collaborate on a project,
                have a question, or just want to connect.
            </p>
            <div className='mt-8 flex flex-col md:flex-row items-start justify-between gap-10 md:gap-14'>
                {/* Left Half: Contact Form */}
                <div className='flex flex-col items-start gap-6 w-full max-w-sm md:max-w-md'>
                    <h3 className='text-xl font-bold tracking-tight text-foreground'>
                        Contact ME
                    </h3>
                    <ContactCard />
                </div>

                {/* Separator Line between Contact and Socials */}
                <Separator className='hidden md:block self-stretch h-auto min-h-[320px]' orientation='vertical' />
                <Separator className='block md:hidden my-2' />

                {/* Right Half: Socials & Quick Connect */}
                <div className='flex flex-col items-start gap-6 w-full md:w-auto'>
                    <h3 className='text-xl font-bold tracking-tight text-foreground'>
                        Follow me 
                    </h3>
                    <SocialTooltip />
                    
                    <div className='flex flex-col items-start gap-4 mt-2'>
                        <div className='flex items-center gap-3'>
                            <p className='text-muted-foreground text-sm'>
                                Or text me directly
                            </p>
                            <WhatsappButton phoneNumber='917028106759' />
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-muted-foreground text-sm'>
                                Or call me directly
                            </p>
                            <CallButton phoneNumber='917028106759' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className='mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-muted-foreground'>
                <p>
                    © 2026 Check repository on{' '}
                    <a
                        href='https://github.com/mohammadnomancoc-eng/my-portfolio'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline hover:text-foreground font-medium transition-colors'
                    >
                        GitHub
                    </a>
                </p>
                <p className='font-medium text-foreground'>
                    Created by Mohammad Noman
                </p>
            </div>
        </footer>
    )
}

export default Contact
