import ProfileCard from '@/components/profile-card'

const Header = () => {
    return (
        <header id='home' className='animate-slide-from-down-and-fade-1 flex w-full flex-col items-start justify-start gap-6 px-4 pt-16 md:pt-20'>
            <div className='flex w-full items-center justify-start'>
                <ProfileCard />
            </div>
        </header>
    )
}

export default Header
