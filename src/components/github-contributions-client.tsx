
import { ActivityCalendar, type Activity } from 'react-activity-calendar'

type GitHubContributionsClientProps = {
    data: Activity[]
    year: number | string
    totalCount?: number
}

// GitHub dark theme colors
const gitHubTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
}

export const GitHubContributionsClient = ({
    data,
    year,
    totalCount = 190,
}: GitHubContributionsClientProps) => {
    const currentYear = year === 'last' ? new Date().getFullYear() : year

    return (
        <ActivityCalendar
            data={data}
            theme={gitHubTheme}
            colorScheme='dark'
            labels={{
                totalCount: `${totalCount} contributions in ${year === 'last' ? 'the last year' : String(currentYear)}`,
            }}
            maxLevel={4}
            blockSize={11}
            blockRadius={2}
            blockMargin={2}
            fontSize={12}
        />
    )
}
