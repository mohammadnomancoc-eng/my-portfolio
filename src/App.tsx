import { useEffect, useState } from 'react'
import Contact from '@/components/contact'
import Preloader from '@/components/preloader'
import Navbar from '@/components/navbar'
import ScrollToTop from '@/components/scroll-to-top'
import { Separator } from '@/components/ui/separator'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [showTopLoader, setShowTopLoader] = useState(false)

    useEffect(() => {
        const handlePreloaderFinished = () => {
            setShowTopLoader(true)
            setIsLoaded(true)

            setTimeout(() => {
                setShowTopLoader(false)
            }, 1200)
        }

        window.addEventListener('preloader-finished', handlePreloaderFinished)
        return () => window.removeEventListener('preloader-finished', handlePreloaderFinished)
    }, [])

    return (
        <>
            {showTopLoader && <div className='top-loader-line' />}
            <ScrollToTop />
            <Preloader />
            <Navbar />
            <main className={`mx-auto max-w-3xl px-3 sm:px-4 md:px-0 py-4 md:pt-10 transition-all duration-700 ${isLoaded ? 'animate-site-reveal' : 'opacity-95'}`}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
                <Separator className='my-12' />
                <Contact />
            </main>
        </>
    )
}
