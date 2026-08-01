import Contact from '@/components/contact'
import Preloader from '@/components/preloader'
import Navbar from '@/components/navbar'
import { Separator } from '@/components/ui/separator'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
    return (
        <>
            <Preloader />
            <Navbar />
            <main className='mx-auto max-w-3xl py-4 md:pt-10'>
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
