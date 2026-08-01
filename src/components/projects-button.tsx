import React from 'react'
import styled from 'styled-components'

const ProjectsButton = () => {
  const handleClick = () => {
    const el = document.getElementById('projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <StyledWrapper>
      <button className="Projects-Button" onClick={handleClick} aria-label="View Projects">
        <span className="IconContainer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 259 259" className="svgBG">
            <circle strokeWidth={7} stroke="#fff" r={69} cy="129.5" cx="129.5" />
            <circle fill="#fff" r="18.5" cy="18.5" cx="129.5" />
            <circle fill="#fff" r="18.5" cy="51.5" cx="206.5" />
            <circle fill="#fff" r="18.5" cy="129.5" cx="240.5" />
            <circle fill="#fff" r="18.5" cy="207.5" cx="207.5" />
            <circle fill="#fff" r="18.5" cy="206.5" cx="52.5" />
            <circle fill="#fff" r="18.5" cy="240.5" cx="129.5" />
            <circle fill="#fff" r="18.5" cy="129.5" cx="18.5" />
            <circle fill="#fff" r="18.5" cy="50.5" cx="51.5" />
            <line strokeWidth={8} stroke="#fff" y2="78.7279" x2="79.3848" y1="63.1716" x1="63.8284" />
            <line strokeWidth={8} stroke="#fff" y2="194.728" x2="195.385" y1="179.172" x1="179.828" />
            <line strokeWidth={8} stroke="#fff" y2={58} x2={130} y1={36} x1={130} />
            <line strokeWidth={8} stroke="#fff" y2="64.1715" x2="194.314" y1="78.3137" x1="180.172" />
            <line strokeWidth={8} stroke="#fff" y2="180.172" x2="78.3137" y1="194.314" x1="64.1716" />
            <line strokeWidth={8} stroke="#fff" y2={223} x2={130} y1={201} x1={130} />
            <line strokeWidth={8} stroke="#fff" y2={129} x2={223} y1={129} x1={201} />
            <line strokeWidth={8} stroke="#fff" y2={129} x2={58} y1={129} x1={36} />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 110 110" className="svgFG">
            <circle strokeWidth={28} stroke="#fff" r={32} cy={55} cx={55} />
            <path fill="#fff" d="M41 4C41 1.79086 42.7909 0 45 0H65C67.2091 0 69 1.79086 69 4V12H41V4Z" />
            <path fill="#fff" d="M91.9838 16.9513C93.9123 15.8736 96.3492 16.5633 97.4269 18.4918L107.183 35.9507C108.261 37.8791 107.571 40.3161 105.643 41.3937L98.6592 45.2963L85.0002 20.8538L91.9838 16.9513Z" />
            <path fill="#fff" d="M106.209 69.0964C108.106 70.2275 108.728 72.6828 107.596 74.5804L97.3555 91.7596C96.2243 93.6571 93.7691 94.2784 91.8715 93.1472L84.9998 89.0509L99.337 65L106.209 69.0964Z" />
            <path fill="#fff" d="M69 106C69 108.209 67.2091 110 65 110L45 110C42.7909 110 41 108.209 41 106L41 98L69 98V106Z" />
            <path fill="#fff" d="M17.4641 93.2485C15.5509 94.3531 13.1046 93.6976 12 91.7844L2 74.4639C0.89543 72.5508 1.55093 70.1044 3.4641 68.9998L10.3923 64.9998L24.3923 89.2485L17.4641 93.2485Z" />
            <path fill="#fff" d="M3.4641 41.2485C1.55093 40.144 0.895431 37.6976 2 35.7844L12 18.4639C13.1046 16.5508 15.5509 15.8953 17.4641 16.9998L24.3923 20.9998L10.3923 45.2485L3.4641 41.2485Z" />
          </svg>
        </span>
        <span className="text">Projects</span>
      </button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  .Projects-Button {
    width: fit-content;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 18px;
    gap: 10px;
    border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
    border-radius: 9999px;
    cursor: pointer;
    background-color: var(--card, rgba(255, 255, 255, 0.06));
    backdrop-filter: blur(8px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
  }

  .IconContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    position: relative;
  }

  .svgBG {
    width: 24px;
    height: auto;
    animation: anti-clockwise 4s linear infinite;
  }

  .svgFG {
    width: 9px;
    height: auto;
    z-index: 2;
    position: absolute;
    animation: clockwise 4s linear infinite;
  }

  .text {
    color: var(--foreground, #ffffff);
    font-family: var(--font-sans, inherit);
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  .Projects-Button:hover {
    background-color: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .Projects-Button:active {
    transform: scale(0.96);
  }

  .Projects-Button:hover .svgFG {
    animation-duration: 1.5s;
  }

  .Projects-Button:hover .svgBG {
    animation-duration: 1.5s;
  }

  @keyframes clockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes anti-clockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`

export default ProjectsButton
