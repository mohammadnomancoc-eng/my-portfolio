import React, { useState } from 'react'
import styled from 'styled-components'

const ContactCard = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <StyledWrapper>
      <div className="card">
        <div className="banner">
          <span className="banner-text">REACH OUT</span>
          <span className="banner-text">LET'S GO!</span>
        </div>
        <span className="card__title">Contact me!</span>
        <p className="card__subtitle">Let's build something amazing together.</p>
        <form className="card__form" onSubmit={handleSubmit}>
          <input placeholder="Your Name *" type="text" required />
          <input placeholder="Phone Number *" type="tel" required />
          <input placeholder="Your Email *" type="email" required />
          <textarea placeholder="Your Message..." rows={3} required />
          <button type="submit" className="sign-up">
            {submitted ? 'Sent! ✓' : 'Send'}
          </button>
        </form>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  .card {
    width: 340px;
    max-width: 100%;
    padding: 30px;
    background: #fff;
    border: 8px solid #000;
    box-shadow: 15px 15px 0 #000;
    transform: rotate(-2deg);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .card:active {
    animation: shake 0.5s ease-in-out;
  }

  .card:hover {
    transform: rotate(0deg) scale(1.02);
    box-shadow: 20px 20px 0 #000;
  }

  .banner {
    position: absolute;
    top: 3px;
    right: -95px;
    background: #000;
    color: #fff;
    padding: 15px;
    width: 350px;
    text-align: center;
    transform: rotate(45deg);
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 2px;
    overflow: hidden;
    transition: background 0.5s ease;
  }

  .banner-text {
    display: inline-block;
    transition: opacity 0.5s ease, transform 0.5s ease;
    width: 100%;
    position: absolute;
    left: 13%;
    top: 50%;
    transform: translateY(-50%);
  }

  .banner:hover .banner-text:first-child {
    opacity: 0;
    transform: translateY(-100%);
  }

  .banner:hover .banner-text:last-child {
    opacity: 1;
    transform: translateY(-40%);
  }

  .banner-text:last-child {
    opacity: 0;
    transform: translateY(60%);
  }

  .banner:hover {
    background: #ef4444;
  }

  .card__title {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #000;
    width: 70%;
    padding-bottom: 4px;
  }

  .card__subtitle {
    font-size: 15px;
    line-height: 1.4;
    color: #333;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }

  .card__form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .card__form input,
  .card__form textarea {
    padding: 12px;
    border: 4px solid #000;
    font-size: 15px;
    font-family: inherit;
    transition: all 0.3s ease;
    background-color: #fff;
    color: #000;
    width: 100%;
    resize: none;
    box-sizing: border-box;
  }

  .card__form input:focus,
  .card__form textarea:focus {
    outline: none;
    transform: scale(1.03);
  }

  .sign-up {
    border: 4px solid #000;
    background: #000;
    color: #fff;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .sign-up:hover {
    background: #fff;
    color: #000;
    transform: translateY(-4px);
    box-shadow: 0 5px 0 #000;
  }

  .sign-up:active {
    animation: shake 0.5s ease-in-out;
    transform: translateY(0);
    box-shadow: none;
  }

  @keyframes shake {
    0%   { transform: translateX(0); }
    25%  { transform: translateX(-5px); }
    50%  { transform: translateX(5px); }
    75%  { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
`

export default ContactCard
