import { Icons } from '@/components/icons'
import { ReadMore } from '@/components/read-more'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import styled from 'styled-components'

/** Host (+ optional path) for use as the visible project title. */
function formatUrlForTitle(url: string): string {
    try {
        const u = new URL(url)
        const host = u.hostname.replace(/^www\./i, '')
        const path =
            u.pathname && u.pathname !== '/'
                ? u.pathname.replace(/\/$/, '')
                : ''
        return path ? `${host}${path}` : host
    } catch {
        return url
    }
}

interface ProjectProps {
    name: string
    icon?: keyof typeof Icons
    imageClasses?: string
    shortDescription?: string
    description: string
    image?: string
    url: string
    tags: {
        name: string
        icon?: keyof typeof Icons
    }[]
    testimonial?: string
    github?: string
    nameBadges?: string[]
}

const Project = ({
    name,
    icon,
    imageClasses,
    shortDescription,
    description,
    image,
    url,
    tags,
    testimonial,
    github,
    nameBadges,
}: ProjectProps) => {
    const Icon = icon ? Icons[icon] : null
    const filterId = React.useId()

    return (
        <div className='rounded-none border-none p-3 sm:p-4 sm:rounded-lg'>
            <div className='flex flex-col gap-2'>
                {/* Main row: stacks vertically on mobile, horizontal on sm+ */}
                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4'>
                    <div className='flex items-start gap-3 sm:gap-6'>
                        {/* 3D Flip Card on the Left */}
                        <StyledCardWrapper className='shrink-0'>
                            <div className='card'>
                                {/* Front Side: Project Logo */}
                                <div className='card__front'>
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={name}
                                            className={`card__logo ${imageClasses || ''}`}
                                        />
                                    ) : Icon ? (
                                        <Icon className={`card__logo ${imageClasses || ''}`} />
                                    ) : (
                                        <div className='card__logo_text'>{name[0]}</div>
                                    )}
                                </div>

                                {/* Flipped Back Side: Details */}
                                <div className='card__content'>
                                    <p className='card__title'>{name}</p>
                                    <p className='card__description'>{shortDescription || description}</p>
                                </div>
                            </div>
                        </StyledCardWrapper>

                        {/* Project Info on the Right */}
                        <div className='flex min-w-0 flex-col gap-1'>
                            <div className='flex flex-wrap items-center gap-2'>
                                <h3 className='shrink-0'>
                                    {url ? (
                                        <a
                                            href={url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            title={name}
                                            className='text-foreground decoration-muted-foreground font-semibold no-underline underline-offset-2 hover:underline'
                                        >
                                            {name}
                                        </a>
                                    ) : (
                                        name
                                    )}
                                </h3>
                                {nameBadges?.map((label) => (
                                    <Badge
                                        key={label}
                                        variant='secondary'
                                        className='font-normal'
                                    >
                                        {label}
                                    </Badge>
                                ))}
                            </div>
                            <p className='text-muted-foreground text-sm leading-relaxed'>
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Links: GitHub & Website */}
                    {url && (
                        <div className='flex shrink-0 items-center gap-3 sm:gap-4 self-end sm:self-auto'>
                            <StyledGithubWrapper className='shrink-0'>
                                <a
                                    href={github || 'https://github.com'}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='GitHub'
                                    className='button-icon'
                                >
                                    <div className='icon'>
                                        <svg viewBox='0 0 24 24'>
                                            <path
                                                d='M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z'
                                                fill='#222229'
                                            />
                                        </svg>
                                    </div>
                                    <div className='cube'>
                                        <span className='side front'>hover me</span>
                                        <span className='side top'>check it on github</span>
                                    </div>
                                </a>
                            </StyledGithubWrapper>
                            <a
                                href={url}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Visit Website'
                                className='group relative flex shrink-0 items-center justify-center text-xs font-bold text-zinc-600 no-underline'
                            >
                                <div className='pointer-events-none absolute z-10 -translate-y-[300%] opacity-0 shadow-md transition-all duration-200 skew-y-[20deg] group-hover:-translate-y-[150%] group-hover:opacity-100 group-hover:skew-y-0 group-hover:delay-75'>
                                    <div className='flex items-center gap-1 rounded-md bg-white p-2 text-xs font-bold text-zinc-800 whitespace-nowrap shadow-sm'>
                                        <svg
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            height='18px'
                                            width='18px'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='stroke-zinc-700'
                                        >
                                            <circle strokeLinejoin='round' r={9} cy={12} cx={12} />
                                            <path strokeLinejoin='round' d='M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21' />
                                            <path strokeLinejoin="round" d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21" />
                                            <path strokeLinejoin="round" d="M3 12H21" />
                                            <path strokeLinejoin="round" d="M19.5 7.5H4.5" />
                                            <g filter={`url(#${filterId})`}>
                                                <path strokeLinejoin="round" d="M19.5 16.5H4.5" />
                                            </g>
                                            <defs>
                                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={3} width={17} y={16} x="3.5" id={filterId}>
                                                    <feFlood result="BackgroundImageFix" floodOpacity={0} />
                                                    <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha" />
                                                    <feOffset dy={1} />
                                                    <feGaussianBlur stdDeviation="0.5" />
                                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" type="matrix" />
                                                    <feBlend result="effect1_dropShadow_15_556" in2="BackgroundImageFix" mode="normal" />
                                                    <feBlend result="shape" in2="effect1_dropShadow_15_556" in="SourceGraphic" mode="normal" />
                                                </filter>
                                            </defs>
                                        </svg>
                                        <span>{formatUrlForTitle(url)}</span>
                                    </div>
                                    <div className='absolute bottom-0 left-1/2 p-1 translate-y-1/2 rotate-45 translate-x-full bg-white shadow-md' />
                                    <div className='absolute top-0 left-0 h-full w-full rounded-md bg-white transition-all duration-200 group-hover:scale-[115%] group-hover:opacity-0 group-hover:delay-150'>
                                        <div className='absolute bottom-0 left-1/2 p-1 translate-y-1/2 rotate-45 translate-x-full border-r border-b border-white bg-white' />
                                    </div>
                                </div>
                                <div className='flex cursor-pointer items-center rounded-full bg-white p-2.5 shadow-md duration-200 group-hover:gap-2'>
                                    <svg
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        height='18px'
                                        width='18px'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='fill-zinc-700 shrink-0'
                                    >
                                        <path
                                            strokeLinejoin='round'
                                            strokeLinecap='round'
                                            d='M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z'
                                        />
                                    </svg>
                                    <span className='overflow-hidden text-[0px] font-semibold text-zinc-800 whitespace-nowrap duration-300 group-hover:text-xs'>
                                        Visit Website
                                    </span>
                                </div>
                            </a>
                        </div>
                    )}
                </div>

                {/* Tech Tags */}
                <div>
                    {tags && (
                        <ul className='mt-2 flex flex-wrap gap-1 pl-0 sm:pl-[140px]'>
                            {tags.map((tag) => (
                                <li key={tag.name}>
                                    <Badge variant={'outline'}>
                                        {tag.name}
                                    </Badge>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Testimonial */}
                {testimonial && (
                    <blockquote className='text-muted-foreground max-w-[65ch] border-l border-border pl-5 text-sm leading-relaxed italic mt-2 ml-0 sm:ml-[140px]'>
                        <ReadMore text={testimonial} />
                    </blockquote>
                )}
            </div>
        </div>
    )
}

const StyledCardWrapper = styled.div`
    .card {
        position: relative;
        width: 80px;
        height: 60px;
        background-color: rgba(22, 22, 24, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        perspective: 1000px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
    }

    @media (min-width: 640px) {
        .card {
            width: 120px;
            height: 90px;
            border-radius: 12px;
        }
    }

    .card__front {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 8px;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @media (min-width: 640px) {
        .card__front {
            padding: 12px;
        }
    }

    .card__logo {
        width: 32px;
        height: 32px;
        object-fit: contain;
        fill: #ffffff;
        color: #ffffff;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @media (min-width: 640px) {
        .card__logo {
            width: 42px;
            height: 42px;
        }
    }

    .card__logo_text {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 700;
        color: #fff;
    }

    @media (min-width: 640px) {
        .card__logo_text {
            width: 42px;
            height: 42px;
            border-radius: 10px;
            font-size: 18px;
        }
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.35);
    }

    .card:hover .card__front {
        transform: scale(0);
        opacity: 0;
    }

    .card__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 8px;
        box-sizing: border-box;
        background-color: #1a1a1e;
        transform: rotateX(-90deg);
        transform-origin: bottom;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
    }

    @media (min-width: 640px) {
        .card__content {
            padding: 10px;
        }
    }

    .card:hover .card__content {
        transform: rotateX(0deg);
    }

    .card__title {
        margin: 0;
        font-size: 10px;
        color: #ffffff;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (min-width: 640px) {
        .card__title {
            font-size: 12px;
        }
    }

    .card__description {
        margin: 2px 0 0;
        font-size: 9px;
        color: #a1a1aa;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    @media (min-width: 640px) {
        .card__description {
            margin: 3px 0 0;
            font-size: 10px;
            -webkit-line-clamp: 3;
        }
    }
`

const StyledGithubWrapper = styled.div`
    .button-icon {
        display: flex;
        border: 2px #ffffff solid;
        border-radius: 8px;
        width: fit-content;
        height: 38px;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease;
    }

    .icon {
        background-color: #ffffff;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .icon svg {
        width: 20px;
        height: 20px;
    }

    /* Hide the cube text on mobile, show icon-only */
    .cube {
        display: none;
    }

    @media (min-width: 640px) {
        .cube {
            display: block;
            transition: all 0.4s ease;
            transform-style: preserve-3d;
            width: 140px;
            height: 38px;
            position: relative;
        }
    }

    .button-icon:hover {
        border-color: #ffffff;
        box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
    }

    .button-icon:hover .cube {
        transform: rotateX(90deg);
    }

    .side {
        position: absolute;
        height: 38px;
        width: 140px;
        display: flex;
        font-size: 0.68rem;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: bold;
        white-space: nowrap;
        backface-visibility: hidden;
    }

    .top {
        background: #0f0f0f;
        color: #ffffff;
        transform: rotateX(-90deg) translate3d(0, 0, 19px);
    }

    .front {
        background: #222229;
        color: #ffffff;
        transform: translate3d(0, 0, 19px);
    }
`

export default Project


