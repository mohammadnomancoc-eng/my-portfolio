import React from 'react'
import styled from 'styled-components'
import { CONFIG } from '@/config'
import { Icons } from '@/components/icons'

export const Experience: React.FC = () => {
  if (!CONFIG.experiences || CONFIG.experiences.length === 0) return null

  return (
    <section id='experience' className='scroll-mt-24' aria-labelledby='home-experience'>
      <div className='animate-slide-from-down-and-fade-2 space-y-6 px-4'>
        <h2 id='home-experience'>Experience</h2>
        <div className='flex flex-col gap-8 max-w-[65ch]'>
          {CONFIG.experiences.map((exp, idx) => {
            const Icon = exp.icon ? Icons[exp.icon] : null

            return (
              <div
                key={`${exp.company}-${idx}`}
                className='flex flex-col gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-all duration-300'
              >
                {/* Header with 3D Flip Card & Company Info */}
                <div className='flex items-start gap-4 sm:gap-6 justify-between'>
                  <div className='flex items-start gap-4 sm:gap-6'>
                    {/* 3D Flip Card for Company Logo */}
                    <StyledCardWrapper className='shrink-0'>
                      <div className='card'>
                        {/* Front Side: Company Logo */}
                        <div className='card__front'>
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className={`card__logo ${exp.logoClasses || ''}`}
                            />
                          ) : Icon ? (
                            <Icon className={`card__logo ${exp.logoClasses || ''}`} />
                          ) : (
                            <div className='card__logo_text'>{exp.company[0]}</div>
                          )}
                        </div>

                        {/* Flipped Back Side: Details */}
                        <div className='card__content'>
                          <p className='card__title'>{exp.company}</p>
                          <p className='card__description'>{exp.shortDescription || exp.role}</p>
                        </div>
                      </div>
                    </StyledCardWrapper>

                    {/* Company & Role Text Info */}
                    <div className='flex flex-col gap-1'>
                      <h3 className='text-xl font-bold text-white tracking-tight flex items-center'>
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-1.5 hover:opacity-85 transition-opacity'
                            title={exp.company}
                          >
                            {exp.companyTitleImage ? (
                              <img
                                src={exp.companyTitleImage}
                                alt={exp.company}
                                className='h-10 sm:h-12 w-auto object-contain max-w-[300px] sm:max-w-[420px]'
                              />
                            ) : (
                              <span>{exp.company}</span>
                            )}
                            <Icons.arrowUpRight className='inline-block size-4 shrink-0 text-muted-foreground' />
                          </a>
                        ) : exp.companyTitleImage ? (
                          <img
                            src={exp.companyTitleImage}
                            alt={exp.company}
                            className='h-10 sm:h-12 w-auto object-contain max-w-[300px] sm:max-w-[420px]'
                          />
                        ) : (
                          exp.company
                        )}
                      </h3>
                      <span className='text-foreground font-semibold text-sm sm:text-base'>
                        {exp.role}
                      </span>
                    </div>
                  </div>

                  {/* Period */}
                  <span className='text-muted-foreground text-xs sm:text-sm font-mono shrink-0 pt-1'>
                    {exp.period}
                  </span>
                </div>

                {/* Impact Metrics Grid */}
                {exp.stats && (
                  <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 py-1'>
                    {exp.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className='flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-center group-hover:border-purple-500/20 transition-colors'
                      >
                        <span className='text-lg sm:text-xl font-black text-purple-400 tracking-tight'>
                          {stat.value}
                        </span>
                        <span className='text-[11px] sm:text-xs text-gray-400 leading-tight mt-0.5'>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Badges */}
                {exp.skills && (
                  <div className='flex flex-wrap gap-1.5'>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className='px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-medium text-gray-300 hover:text-white transition-colors'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                <ul className='space-y-2.5 text-sm text-muted-foreground leading-relaxed list-disc list-outside pl-4'>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className='pl-1'>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const StyledCardWrapper = styled.div`
  .card {
    position: relative;
    width: 120px;
    height: 90px;
    background-color: rgba(22, 22, 24, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }

  .card__front {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 12px;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__logo {
    max-width: 90px;
    max-height: 50px;
    width: auto;
    height: auto;
    object-fit: contain;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__logo_text {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
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
    padding: 10px;
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

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-[Onest]
    font-size: 11px;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card__description {
    margin: 4px 0 0 0;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export default Experience
