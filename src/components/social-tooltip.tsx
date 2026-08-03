import React from 'react'
import styled from 'styled-components'

const SocialTooltip = () => {
  return (
    <ContainerWrapper>
      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/mohammad-noman-23b0a4324/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedInWrapper>
          <button type="button">
            <span className="icon">
              <svg
                fill="none"
                height={33}
                viewBox="0 0 120 120"
                width={33}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipRule="evenodd" fillRule="evenodd">
                  <path
                    d="m120 60.0002c0 33.1366-26.8633 59.9998-60 59.9998-33.138 0-60-26.8632-60-59.9998 0-33.1376 26.8617-60.0002 60-60.0002 33.1364.00031715 60 26.8626 60 60.0002z"
                    fill="#2867b2"
                  />
                  <g fill="#fff">
                    <path d="m63.8771 54.3451c.2959-.3181.411-.4154.4938-.5356 4.0325-5.884 9.7919-7.6141 16.5119-6.5811 7.7657 1.1953 12.7354 6.6312 14.004 14.949.3009 1.9723.4506 3.9525.449 5.9464-.0047 8.2817-.0177 16.563.0178 24.844.0054.9327-.2242 1.2067-1.1801 1.195-4.3386-.052-8.6787-.0514-13.0179 0-.9493.0104-1.1925-.2601-1.1874-1.1944.0352-7.7238.0228-15.4472.0152-23.1703-.0029-1.7554-.1234-3.4997-.6169-5.1996-1.5816-5.4524-7.7846-7.3664-12.2018-3.7408-2.3866 1.9581-3.3196 4.5473-3.3015 7.5947.0386 7.2858.0114 14.5713.0114 21.8571 0 .9558-.0533 1.9146.0162 2.8647.0608.8259-.2766.9848-1.0248.98-4.4194-.0298-8.8379-.033-13.2567.0019-.8017.0063-1.09-.1567-1.0808-1.038.0647-6.5672.091-13.1375.0939-19.7052.0012-8.0822-.0149-16.1637-.0714-24.2455-.006-.8848.1792-1.1465 1.0932-1.1363 4.4194.0495 8.8383.0422 13.2571.0051.7957-.0073 1.0177.2321.9923 1.0063-.0549 1.6656-.0165 3.3335-.0165 5.3026z" />
                    <path d="m40.1241 71.1028c0 7.2826-.0155 14.5659.0187 21.8491.0038.9045-.1785 1.2264-1.1645 1.2134-4.377-.0584-8.7549-.0447-13.1324-.0079-.8129.0066-1.0869-.1963-1.086-1.0507.0213-14.6861.0178-29.3712-.0041-44.0569-.0009-.765.1856-1.0209.9882-1.0133 4.4579.038 8.9154.0428 13.3722-.0032.8896-.0098 1.0279.3149 1.0244 1.1008-.027 7.3235-.0152 14.6458-.0165 21.9687z" />
                    <path d="m32.5678 25.8388c5.8726.0064 9.6878 4.6579 8.2959 10.1135-1.0517 4.1194-5.3122 6.491-10.2299 5.6924-5.2234-.8477-8.1348-5.9452-6.21-10.8714 1.2013-3.0767 4.2757-4.9392 8.144-4.9345z" />
                  </g>
                </g>
              </svg>
            </span>
            <span className="text1">Follow me</span>
            <span className="text2">LinkedIn</span>
          </button>
        </LinkedInWrapper>
      </a>

      {/* GitHub Button */}
      <a
        href="https://github.com/mohammadnomancoc-eng"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubWrapper>
          <button type="button">
            <span className="icon">
              <svg
                viewBox="0 0 24 24"
                height={33}
                width={33}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </span>
            <span className="text1">Follow me</span>
            <span className="text2">GitHub</span>
          </button>
        </GitHubWrapper>
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/_noman_khan_23_/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <InstagramWrapper>
          <button type="button">
            <span className="icon">
              <svg
                height={33}
                viewBox="0 0 128 128"
                width={33}
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="instaGrad"
                  gradientTransform="matrix(1 0 0 -1 594 633)"
                  gradientUnits="userSpaceOnUse"
                  x1="-566.711"
                  x2="-493.288"
                  y1="516.569"
                  y2="621.43"
                >
                  <stop offset={0} stopColor="#ffb900" />
                  <stop offset={1} stopColor="#9100eb" />
                </linearGradient>
                <circle cx={64} cy={64} fill="url(#instaGrad)" r={64} />
                <g fill="#fff">
                  <path d="m82.333 104h-36.666c-11.947 0-21.667-9.719-21.667-21.667v-36.666c0-11.948 9.72-21.667 21.667-21.667h36.666c11.948 0 21.667 9.719 21.667 21.667v36.667c0 11.947-9.719 21.666-21.667 21.666zm-36.666-73.333c-8.271 0-15 6.729-15 15v36.667c0 8.271 6.729 15 15 15h36.666c8.271 0 15-6.729 15-15v-36.667c0-8.271-6.729-15-15-15z" />
                  <path d="m64 84c-11.028 0-20-8.973-20-20 0-11.029 8.972-20 20-20s20 8.971 20 20c0 11.027-8.972 20-20 20zm0-33.333c-7.352 0-13.333 5.981-13.333 13.333 0 7.353 5.981 13.333 13.333 13.333s13.333-5.98 13.333-13.333c0-7.352-5.98-13.333-13.333-13.333z" />
                  <circle cx="85.25" cy="42.75" r="4.583" />
                </g>
              </svg>
            </span>
            <span className="text1">Follow me</span>
            <span className="text2">Instagram</span>
          </button>
        </InstagramWrapper>
      </a>

      {/* Email Button */}
      <a
        href="mailto:mohammadnomancoc@gmail.com"
        aria-label="Email"
      >
        <MailWrapper>
          <button type="button">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={33}
                viewBox="0 0 72 72"
              >
                <g fillRule="evenodd" fill="none">
                  <path
                    fill="#cc2127"
                    d="m36 72c19.882251 0 36-16.117749 36-36 0-19.882251-16.117749-36-36-36-19.882251 0-36 16.117749-36 36 0 19.882251 16.117749 36 36 36z"
                  />
                  <path
                    fill="#fff"
                    d="M20 25c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V27c0-1.1-.9-2-2-2H20zm16 11.5L21.5 27h29L36 36.5zM20 45V29.2l16 10.4 16-10.4V45H20z"
                  />
                </g>
              </svg>
            </span>
            <span className="text1">Email me</span>
            <span className="text2">Email</span>
          </button>
        </MailWrapper>
      </a>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;

  a {
    text-decoration: none;
    display: inline-block;
  }
`

const LinkedInWrapper = styled.div`
  button {
    position: relative;
    width: 135px;
    height: 35px;
    border-radius: 30px;
    background-color: white;
    border: 1px #2867b2 solid;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .text1 {
    font-size: 14px;
    font-weight: 700;
    margin-left: 40px;
    color: #000;
    white-space: nowrap;
  }

  .text2 {
    position: absolute;
    top: 50%;
    left: -70px;
    transform: translateY(-50%);
    font-weight: 700;
    font-size: 13px;
    color: white;
    white-space: nowrap;
    z-index: 2;
    transition: transform 0.5s ease;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: transform 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon::before {
    position: absolute;
    left: -105px;
    top: 0;
    z-index: -1;
    content: '';
    width: 135px;
    height: 33px;
    border-radius: 30px;
    background-color: #2867b2;
  }

  button:hover .icon {
    transform: translateX(98px);
  }

  button:hover .text2 {
    transform: translate(82px, -50%);
  }

  button:active {
    transform: scale(1.03);
  }
`

const GitHubWrapper = styled.div`
  button {
    position: relative;
    width: 135px;
    height: 35px;
    border-radius: 30px;
    background-color: white;
    border: 1px #000000 solid;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .text1 {
    font-size: 14px;
    font-weight: 700;
    margin-left: 40px;
    color: #000;
    white-space: nowrap;
  }

  .text2 {
    position: absolute;
    top: 50%;
    left: -70px;
    transform: translateY(-50%);
    font-weight: 700;
    font-size: 13px;
    color: white;
    white-space: nowrap;
    z-index: 2;
    transition: transform 0.5s ease;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: transform 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon::before {
    position: absolute;
    left: -105px;
    top: 0;
    z-index: -1;
    content: '';
    width: 135px;
    height: 33px;
    border-radius: 30px;
    background-color: #000000;
  }

  .icon::after {
    position: absolute;
    left: 0.5px;
    top: 0.5px;
    z-index: -1;
    content: '';
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: white;
  }

  button:hover .icon {
    transform: translateX(98px);
  }

  button:hover .text2 {
    transform: translate(82px, -50%);
  }

  button:active {
    transform: scale(1.03);
  }
`

const InstagramWrapper = styled.div`
  button {
    position: relative;
    width: 135px;
    height: 35px;
    border-radius: 30px;
    background-color: white;
    border: 1px #0a0a0a solid;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .text1 {
    font-size: 14px;
    font-weight: 700;
    margin-left: 40px;
    color: #000;
    white-space: nowrap;
  }

  .text2 {
    position: absolute;
    top: 50%;
    left: -70px;
    transform: translateY(-50%);
    font-weight: 700;
    font-size: 13px;
    color: white;
    white-space: nowrap;
    z-index: 2;
    transition: transform 0.5s ease;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: transform 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon::before {
    position: absolute;
    left: -105px;
    top: 0;
    z-index: -1;
    content: '';
    width: 135px;
    height: 33px;
    border-radius: 30px;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }

  button:hover .icon {
    transform: translateX(98px);
  }

  button:hover .text2 {
    transform: translate(82px, -50%);
  }

  button:active {
    transform: scale(1.03);
  }
`

const MailWrapper = styled.div`
  button {
    position: relative;
    width: 135px;
    height: 35px;
    border-radius: 30px;
    background-color: white;
    border: 1px #cc2127 solid;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .text1 {
    font-size: 14px;
    font-weight: 700;
    margin-left: 40px;
    color: #000;
    white-space: nowrap;
  }

  .text2 {
    position: absolute;
    top: 50%;
    left: -70px;
    transform: translateY(-50%);
    font-weight: 700;
    font-size: 13px;
    color: white;
    white-space: nowrap;
    z-index: 2;
    transition: transform 0.5s ease;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: transform 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon::before {
    position: absolute;
    left: -105px;
    top: 0;
    z-index: -1;
    content: '';
    width: 135px;
    height: 33px;
    border-radius: 30px;
    background-color: #cc2127;
  }

  button:hover .icon {
    transform: translateX(98px);
  }

  button:hover .text2 {
    transform: translate(82px, -50%);
  }

  button:active {
    transform: scale(1.03);
  }
`

export default SocialTooltip