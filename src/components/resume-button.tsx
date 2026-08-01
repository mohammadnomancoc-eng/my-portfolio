import React from 'react'
import styled from 'styled-components'
import { CONFIG } from '@/config'

const ResumeButton = () => {
  const resumeUrl = CONFIG.resumeUrl || '/resume.pdf'

  return (
    <StyledWrapper>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="Documents-btn"
        aria-label="View Resume"
      >
        <span className="folderContainer">
          <svg className="fileBack" width={146} height={113} viewBox="0 0 146 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z" fill="url(#paint0_linear_117_4_resume)" />
            <defs>
              <linearGradient id="paint0_linear_117_4_resume" x1={0} y1={0} x2="72.93" y2="95.4804" gradientUnits="userSpaceOnUse">
                <stop stopColor="#52525b" />
                <stop offset={1} stopColor="#18181b" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="filePage" width={88} height={99} viewBox="0 0 88 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width={88} height={99} fill="url(#paint0_linear_117_6_resume)" />
            <defs>
              <linearGradient id="paint0_linear_117_6_resume" x1={0} y1={0} x2={81} y2="160.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset={1} stopColor="#e4e4e7" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="fileFront" width={160} height={79} viewBox="0 0 160 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z" fill="url(#paint0_linear_117_5_resume)" />
            <defs>
              <linearGradient id="paint0_linear_117_5_resume" x1="38.7619" y1="8.71323" x2="66.9106" y2="82.8317" gradientUnits="userSpaceOnUse">
                <stop stopColor="#71717a" />
                <stop offset={1} stopColor="#27272a" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <p className="text">
          <span className="text-default">Resume</span>
          <span className="text-hover">Resume</span>
        </p>
        <div className="tooltip">View Resume</div>
      </a>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  .Documents-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: fit-content;
    height: 50px;
    border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
    padding: 0px 16px;
    border-radius: 9999px;
    background-color: var(--card, rgba(255, 255, 255, 0.06));
    backdrop-filter: blur(8px);
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    position: relative;
    box-sizing: border-box;
  }

  .folderContainer {
    width: 36px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }

  .fileBack {
    z-index: 1;
    width: 80%;
    height: auto;
  }

  .filePage {
    width: 50%;
    height: auto;
    position: absolute;
    z-index: 2;
    transition: all 0.3s ease-out;
  }

  .fileFront {
    width: 85%;
    height: auto;
    position: absolute;
    z-index: 3;
    opacity: 0.95;
    transform-origin: bottom;
    transition: all 0.3s ease-out;
  }

  .text {
    color: var(--foreground, #ffffff);
    font-family: var(--font-sans, inherit);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
    height: 20px;
  }

  .text-default,
  .text-hover {
    transition: all 0.3s ease;
  }

  .text-hover {
    position: absolute;
    left: 0;
    opacity: 0;
    transform: translateY(8px);
    white-space: nowrap;
  }

  .Documents-btn:hover .text-default {
    opacity: 0;
    transform: translateY(-8px);
  }

  .Documents-btn:hover .text-hover {
    opacity: 1;
    transform: translateY(0);
  }

  .Documents-btn:hover .filePage {
    transform: translateY(-5px);
  }

  .Documents-btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .Documents-btn:active {
    transform: scale(0.96);
  }

  .Documents-btn:hover .fileFront {
    transform: rotateX(30deg);
  }

  .tooltip {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--foreground, #ffffff);
    background-color: var(--popover, #18181b);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 6px 12px;
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    font-family: var(--font-sans, inherit);
    font-size: 13px;
    font-weight: 500;
    transition: all 0.3s ease;
    white-space: nowrap;
    z-index: 100;
    pointer-events: none;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }

  .tooltip::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px 5px 0 5px;
    border-style: solid;
    border-color: #18181b transparent transparent transparent;
  }

  .Documents-btn:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -46px;
  }
`

export default ResumeButton
