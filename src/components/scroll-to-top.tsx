import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // Disable browser scroll restoration on refresh/reload
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Scroll to the top of the page on route change or refresh
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // Extra safeguard for slow rendering components or preloader finish
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 50)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default ScrollToTop
