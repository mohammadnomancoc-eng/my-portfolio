import { GitHubContributionsClient } from '@/components/github-contributions-client'
import { CONFIG } from '@/config'
import { useEffect, useRef, useState } from 'react'
import type { Activity } from 'react-activity-calendar'

type ApiResponse = {
    total: Record<string, number>
    contributions: Array<{
        date: string
        count: number
        level: 0 | 1 | 2 | 3 | 4
    }>
}

const GitHubContributions = () => {
    const year = 'last'
    const [activities, setActivities] = useState<Activity[]>([])
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const apiUrl =
                    'https://github-contributions-api.jogruber.de/v4/'
                const response = await fetch(
                    `${apiUrl}${CONFIG.githubUsername}?y=${String(year)}`
                )

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch contribution data for "${CONFIG.githubUsername}"`
                    )
                }

                const data = (await response.json()) as ApiResponse

                const mapped: Activity[] = data.contributions.map(
                    (contribution) => ({
                        date: contribution.date,
                        count: contribution.count,
                        level: contribution.level,
                    })
                )
                setActivities(mapped)
            } catch (err) {
                setError(
                    err instanceof Error ? err : new Error('Unknown error')
                )
            } finally {
                setLoading(false)
            }
        }
        fetchContributions()
    }, [])

    useEffect(() => {
        if (!loading && activities.length > 0 && containerRef.current) {
            const timer = setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.scrollLeft = containerRef.current.scrollWidth
                }
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [loading, activities])

    return (
        <div className='animate-slide-from-down-and-fade-2 space-y-4 px-1 sm:px-4'>
            <div className='space-y-2'>
                <h2>GitHub Activity</h2>
                <p className='text-muted-foreground max-w-[65ch] leading-relaxed'>
                    My contribution graph from GitHub, showing daily coding
                    activity throughout the year.
                </p>
            </div>

            {loading ? (
                <p className='text-muted-foreground text-sm'>
                    Loading contributions…
                </p>
            ) : error ? (
                <p className='text-muted-foreground text-sm'>
                    Unable to load contribution data at this time.
                </p>
            ) : (
                <div ref={containerRef} className='flex overflow-x-auto scrollbar-hide'>
                    <GitHubContributionsClient data={activities} year={year} />
                </div>
            )}
        </div>
    )
}

export default GitHubContributions
