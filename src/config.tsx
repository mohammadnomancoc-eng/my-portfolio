import { Icons } from '@/components/icons'
import type { JSX } from 'react'

type Config = {
    name: string
    avatar: string
    title: string
    githubUsername: string
    siteUrl: string
    resumeUrl?: string
    socials: {
        name: string
        url: string
        icon: keyof typeof Icons
    }[]
    calendarLink?: string
    googleAppsScriptUrl?: string
    description: string | JSX.Element
    descriptionRaw: string
    projects: {
        name: string
        icon?: keyof typeof Icons
        imageClasses?: string
        image?: string
        shortDescription?: string
        description: string
        url: string
        tags: {
            name: string
            icon?: keyof typeof Icons
        }[]
        github?: string
        featured: boolean
        testimonial?: string
        /** Short labels shown as badges next to the project name (e.g. usage stats). */
        nameBadges?: string[]
    }[]
    education?: {
        level: string
        institution: string
        institutionUrl?: string
        title: string
        period: string
        description: string
    }[]
    experiences?: {
        company: string
        companyUrl?: string
        logo?: string
        companyTitleImage?: string
        icon?: keyof typeof Icons
        logoClasses?: string
        shortDescription?: string
        status?: string
        role: string
        period: string
        stats?: {
            value: string
            label: string
        }[]
        skills?: string[]
        bullets: string[]
    }[]
}

export const CONFIG: Config = {
    name: 'Mohammad Noman',
    avatar: '/images/author.jpeg',
    title: 'Software Developer',
    githubUsername: 'mohammadnomancoc-eng',
    siteUrl: 'https://nader.run/',
    resumeUrl: '/resume.pdf',
    googleAppsScriptUrl: import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || '',
    socials: [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mohammad-noman-23b0a4324/',
            icon: 'linkedin',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/mohammadnomancoc-eng',
            icon: 'github',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/_noman_khan_23_/',
            icon: 'x', // fallback icon identifier
        },
        {
            name: 'Email',
            url: 'mailto:mohammadnomancoc@gmail.com',
            icon: 'email',
        },
    ],
    calendarLink: 'https://cal.com/naderferjani/15',
    description: (
        <>
            <p>
                Hi, I&apos;m <span className='text-purple-400 font-semibold'>Noman</span>. I work part-time as a full-stack developer
                at{' '}
                <a
                    href='https://hi-interns.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-foreground decoration-muted-foreground font-medium whitespace-nowrap underline underline-offset-2'
                >
                    Hi Interns
                    <Icons.arrowUpRight className='inline-block size-4' />
                </a>
                , shipping product with Next.js, Astro, React, and Tailwind at
                scale. I always try to find what&apos;s stopping users from
                converting, and keep developer experience in good shape while we
                iterate.
            </p>
            <p>
                I&apos;ve freelanced on{' '}
                <a
                    href='https://www.upwork.com/freelancers/~0108a6d64ff5b64440'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-foreground decoration-muted-foreground font-medium whitespace-nowrap underline underline-offset-2'
                >
                    Upwork
                    <Icons.arrowUpRight className='inline-block size-4' />
                </a>{' '}
                for about four years, with a 100% job success rate and five-star
                reviews. Several clients from year one still ping me for work. I
                lean on AI a lot for speed and drafts, but architecture, edge
                cases, and actually shipping still land on me.
            </p>
        </>
    ),
    descriptionRaw: `Full-stack developer. Part-time at Hi Interns (Next.js, Astro, Tailwind). Focus on conversion blockers and solid DX. Upwork: 100% job success, five-star reviews, ~4 years. Pragmatic about AI; owns the hard parts.`,
    projects: [
        {
            name: "Alzheimer's Detection AI",
            image: '/images/alzheimerai.jpg',
            nameBadges: ['AI/ML Diagnostic Tool'],
            description:
                "An advanced machine learning & deep learning diagnostic system designed to detect and classify early-stage Alzheimer's disease from MRI brain scans with high precision.",
            url: 'https://alzheimerai.vercel.app/',
            github: 'https://github.com/mohammadnomancoc-eng/Alzheimers-Detection-Using-ML',
            tags: [
                { name: 'Python' },
                { name: 'PyTorch' },
                { name: 'TensorFlow' },
                { name: 'React', icon: 'react' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
            ],
            featured: true,
        },
        {
            name: 'À Faire - Task & Todo App',
            image: '/images/afaire.svg',
            nameBadges: ['Task Management with 100-150 daily users'],
            description:
                'A sleek, minimal task management application built to streamline daily workflows, track productivity, and organize tasks with an intuitive interface.',
            url: 'https://a-faire.vercel.app/',
            github: 'https://github.com/mohammadnomancoc-eng/-Faire',
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Supabase' },
                { name: 'Vite' },
            ],
            featured: true,
        },
        {
            name: 'Headtrixx',
            image: '/images/headtrixx.webp',
            nameBadges: ['E-Commerce Platform 2k-3k daily users'],
            description:
                'A modern full-stack e-commerce platform built for audio gear and electronics, featuring seamless product browsing, shopping cart management, secure checkout integration, and interactive UI components.',
            url: 'https://headtrixx.com/',
            github: 'https://github.com/mohammadnomancoc-eng',
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'Node.js' },
                { name: 'Express' },
                { name: 'MongoDB' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
            ],
            featured: true,
        },

        {
            name: 'Zootopia - Resort and Restaurant',
            image: '/images/zootopia.png',
            nameBadges: ['Luxury Resort & Restaurant Platform'],
            description:
                'An engaging, interactive web application featuring rich animations, responsive design, and dynamic content presentation.',
            url: 'https://zootopiaresortandrestaurant.com/',
            github: 'https://github.com/mohammadnomancoc-eng',
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'JavaScript' },
                { name: 'CSS3' },
                { name: 'HTML5' },
            ],
            featured: true,
        },
        {
            name: 'WhereTF',
            icon: 'saasStellar',
             nameBadges: ['Web Application'],
            description:
                'A full-stack real-time Lost & Found platform for college campuses — built with React (Vite), Node.js/Express, MongoDB, Socket.io, and JWT authentication.',
            url: 'Under construction 😂',
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'Node.js'},
                { name: 'Express'},
                { name: 'MongoDB'},
                { name: 'Socket.io'},
                { name: 'JWT'},
            ],
            featured: false,
            github: 'https://github.com/mohammadnomancoc-eng/WhereTF',
        },
        {
            name: 'EMS - Employee Management System',
            image: '/images/firstplace.png',
            imageClasses: 'invert',
            nameBadges: ['Web Application'],
            description:
                'An employee management system built to streamline employee management.',
            url: 'Under construction 😂',
            github: 'https://github.com/mohammadnomancoc-eng/EMS-',
            tags: [
                { name: 'Next.js', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'shadcn/ui', icon: 'shadcn' },
                { name: 'Google Search Console' },
            ],
            featured: false,
        },
        {
            name: '🚀 CareerOS — Web App',
            icon: 'purng',
             nameBadges: ['Open Source Contribution'],
            description:
                'CareerOS is an open-source AI platform that replaces the 5–8 disconnected tools. Instead of switching between ATS checkers, mock interview platforms, job trackers, and LinkedIn tools — everything lives in one intelligent system that knows your resume, your target role, and your progress.',
            url: 'It is a OSC project, so no link🥲',
            tags: [
                { name: 'Next.js', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Convex' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'shadcn/ui', icon: 'shadcn' },
                { name: 'Drizzle', icon: 'drizzle' },
            ],
            featured: false,
            github: 'https://github.com/vikash1311/careeros-web',
        },
        
        
    ],
    education: [
        {
            level: 'College',
            institution: 'Anjuman college of Engineering and Technology',
            institutionUrl: 'https://anjumanengg.edu.in/',
            title: 'B.Tech in Computer Science and Engineering (CSE)',
            period: '2022–2026',
            description:
                'Core computer science fundamentals including programming, algorithms, and systems.',
        },
        {
            level: 'HSC',
            institution: 'Al-Irfan Secondary School (CBSE)',
            institutionUrl: '',
            title: 'Higher Secondary Certificate (HSC)',
            period: '2020–2022',
            description:
                'Higher secondary education focusing on mathematics,physics, chemistry and fundamentals.',
        },
        {
            level: 'SSC',
            institution: 'St. Vincent Pallotti School (CBSE)',
            institutionUrl: '',
            title: 'Secondary School Certificate (SSC)',
            period: '2019–2020',
            description:
                'Secondary education with foundational coursework in mathematics, science, literature',
        },
    ],
    experiences: [
        {
            company: 'Royals Webtech Pvt. Ltd.',
            companyUrl: 'https://royalswebtechpvtltd.com/',
            logo: '/images/royalswebtech.png',
            companyTitleImage: '/images/royalswebtech_title.png',
            shortDescription: 'Jr. Software Developer Intern',
            role: 'Jr. Software Developer Intern',
            period: 'Dec 2025 – Present',
            stats: [
                { value: '10K+', label: 'Users' },
                { value: '12×', label: 'Login faster' },
                { value: '12×', label: 'Data fetch' },
                { value: '5+', label: 'Apps shipped' },
            ],
            skills: [
                'React',
                'Node.js',
                'Express',
                'JavaScript',
                'MongoDB',
                'Supabase',
                'Firebase',
                'Render',
            ],
            bullets: [
                ' Built and shipped an internal HR platform from scratch — role-based access (Admin/Employee), geofenced attendance, leave/WFH quota management, drag-and-drop ID card designer, and Google Apps Script email notifications. Serving 40+ daily users in active production.',
                'Built a hair care e-commerce platform from scratch — React + Vite frontend with Cloudinary-powered media pipeline, product pages, skeleton loading states, and a custom hamburger menu with CSS animations; deployed to production on Render.',
                'Engineered a Watch & Shop video commerce feature — users browse and purchase directly from shoppable video content, adding a conversion-focused discovery channel to the storefront.',
                'Owned complete analytics and conversion tracking setup for a high-traffic e-commerce client — GTM architecture, Meta Pixel event pipeline, and production debugging with zero downtime.',
                'Delivered 5+ client projects across logistics, civic tech, and hospitality — React frontends, Node.js/Express backends; direct client communication throughout.',
            ],
        },
    ],
}
