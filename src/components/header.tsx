import ProfileCard from '@/components/profile-card'

const Header = () => {
    return (
        <header id='home' className='animate-slide-from-down-and-fade-1 flex w-full flex-col items-center justify-center gap-6 px-4 pt-16 md:pt-20'>
            <div className='flex w-full items-center justify-center'>
                <ProfileCard />
            </div>
        </header>
    )
}

export default Header
