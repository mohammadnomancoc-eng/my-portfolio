import GitHubContributions from '@/components/github-contributions'
import Header from '@/components/header'
import ResumeButton from '@/components/resume-button'
import ProjectsButton from '@/components/projects-button'
import MoreProjectsButton from '@/components/more-projects-button'
import { Icons } from '@/components/icons'
import Project from '@/components/project'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CONFIG } from '@/config'
import { Link } from 'react-router-dom'
import React from 'react'
import Skills from '@/sections/Skills'
import Experience from '@/components/experience'

/** Centered rule between major homepage blocks (same pattern as between featured projects). */
function SectionRule() {
    return <Separator className='mx-auto my-12' />
}

export default function Home() {
    return (
        <div className='flex flex-col'>
            <Header />
            <section id='about' className='mt-12 scroll-mt-24' aria-labelledby='home-about'>
                <div className='animate-slide-from-down-and-fade-2 space-y-4 px-4'>
                    <div className='flex flex-wrap items-center justify-between gap-4'>
                        <h2 id='home-about'>About me</h2>
                        <div className='flex items-center gap-3'>
                            <ProjectsButton />
                            <ResumeButton />
                        </div>
                    </div>
                    <div className='text-muted-foreground max-w-[65ch] space-y-3 leading-relaxed'>
                        {CONFIG.description}
                    </div>
                </div>
            </section>
            <SectionRule />
            <section id='projects' className='scroll-mt-24' aria-labelledby='home-projects'>
                <div className='animate-slide-from-down-and-fade-3 flex flex-col gap-7'>
                    <div className='-mb-4 flex items-center justify-between gap-4 px-4'>
                        <h2 id='home-projects'>Projects I worked on</h2>
                        <Button
                            asChild
                            className='text-muted-foreground hover:text-foreground shrink-0 underline'
                            variant={'link'}
                        >
                            <Link to='/projects'>
                                All projects
                                <Icons.arrowUpRight />
                            </Link>
                        </Button>
                    </div>
                    {CONFIG.projects
                        .filter((project) => project.featured)
                        .map((project, idx, array) => (
                            <React.Fragment key={project.url}>
                                <Project
                                    name={project.name}
                                    icon={project.icon}
                                    imageClasses={project.imageClasses}
                                    shortDescription={project.shortDescription}
                                    description={project.description}
                                    image={project.image}
                                    url={project.url}
                                    tags={project.tags}
                                    testimonial={project.testimonial}
                                    github={project.github}
                                    nameBadges={project.nameBadges}
                                />
                                {idx < array.length - 1 && (
                                    <Separator className='mx-auto max-w-96' />
                                )}
                            </React.Fragment>
                        ))}
                    <div className='flex justify-center my-4'>
                        <MoreProjectsButton to='/projects' text='More Projects' />
                    </div>
                </div>
            </section>
            <SectionRule />

            <Skills />
            <SectionRule />

            {CONFIG.education && CONFIG.education.length > 0 && (
                <>
                    <section id='education' className='scroll-mt-24' aria-labelledby='home-education'>
                        <div className='animate-slide-from-down-and-fade-2 space-y-4 px-4'>
                            <h2 id='home-education'>Education</h2>
                            <div className='mt-8 flex max-w-[65ch] flex-col gap-7'>
                                {CONFIG.education.map((item, idx, array) => (
                                    <React.Fragment key={`${item.level}-${item.title}-${idx}`}>
                                        <div className='flex flex-col gap-2'>
                                            <div className='flex items-center gap-2'>
                                                <span className='rounded-md bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 text-xs font-semibold text-purple-400 uppercase tracking-wide'>
                                                    {item.level}
                                                </span>
                                            </div>
                                            <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4'>
                                                <span className='text-foreground font-semibold text-lg'>
                                                    {item.title}
                                                </span>
                                                <span className='text-muted-foreground shrink-0 tabular-nums text-sm sm:text-right'>
                                                    {item.period}
                                                </span>
                                            </div>
                                            <p className='text-foreground/90 font-medium text-sm'>
                                                {item.institutionUrl ? (
                                                    <a
                                                        href={item.institutionUrl}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='text-foreground hover:text-purple-400 decoration-muted-foreground underline underline-offset-2 transition-colors'
                                                    >
                                                        {item.institution}
                                                        <Icons.arrowUpRight className='inline-block size-4 ml-0.5' />
                                                    </a>
                                                ) : (
                                                    item.institution
                                                )}
                                            </p>
                                            <p className='text-muted-foreground leading-relaxed text-sm'>
                                                {item.description}
                                            </p>
                                        </div>
                                        {idx < array.length - 1 && (
                                            <Separator className='mx-auto max-w-96' />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </section>
                    <SectionRule />
                </>
            )}

            <Experience />
            <SectionRule />
            <section id='github' className='scroll-mt-24' aria-label='GitHub activity'>
                <GitHubContributions />
            </section>
        </div>
    )
}
