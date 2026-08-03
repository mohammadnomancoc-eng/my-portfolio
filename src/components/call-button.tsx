import React, { useState } from 'react';
import styled from 'styled-components';

interface CallButtonProps {
  href?: string;
  phoneNumber?: string;
}

const CallButton: React.FC<CallButtonProps> = ({
  href,
  phoneNumber = '917028106759',
}) => {
  const [copied, setCopied] = useState(false);
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${cleanNumber}`;
  const targetUrl = href || `tel:+${cleanNumber}`;

  const handleClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <StyledWrapper>
      <a
        href={targetUrl}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Call me"
      >
        <button type="button">
          <p>{copied ? 'Copied!' : 'Call me'}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-block;

  a {
    text-decoration: none;
    display: inline-block;
  }

  button {
    background-color: #fff;
    border: 1px solid #000c04;
    padding: 5px;
    position: relative;
    width: 6.2em;
    height: 2em;
    transition: 0.5s;
    font-size: 17px;
    border-radius: 0.4em;
    cursor: pointer;
  }

  button p {
    position: absolute;
    top: 0.4em;
    left: 1.15em;
    margin: 0;
    padding: 0;
    transition: 0.5s;
    color: #030303;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
  }

  button svg {
    position: absolute;
    top: 0.45em;
    right: 0.5em;
    margin: 0;
    padding: 0;
    opacity: 0;
    transition: 0.5s;
    height: 1em;
    fill: #fff;
  }

  button:hover p {
    left: 0.5em;
    color: #f8f4f4;
  }

  button:hover svg {
    opacity: 1;
  }

  button:hover {
    background-color: #020202;
  }
`;

export default CallButton;
