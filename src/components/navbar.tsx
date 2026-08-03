import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement | null>(null);
  const btnRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = ['home', 'about', 'projects', 'skills', 'education', 'experience', 'contact'];
  const labels = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Experience', 'Contact'];

  const updatePillPosition = useCallback(() => {
    const activeIndex = sections.indexOf(activeSection);
    const btn = btnRefs.current[activeIndex];
    const nav = navRef.current;
    if (btn && nav) {
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      if (btnRect.width > 0) {
        setPillStyle({
          left: btnRect.left - navRect.left,
          width: btnRect.width,
          opacity: 1,
        });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    if (location.pathname === '/projects') {
      setActiveSection('projects');
      return;
    }

    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  useEffect(() => {
    updatePillPosition();
    const timer1 = setTimeout(updatePillPosition, 50);
    const timer2 = setTimeout(updatePillPosition, 200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [activeSection, location.pathname, updatePillPosition]);

  useEffect(() => {
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [updatePillPosition]);

  const handleClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <StyledWrapper>
      <nav className="navbar" ref={navRef}>
        <div
          className="pill"
          style={{
            left: pillStyle.left,
            width: pillStyle.width,
            opacity: pillStyle.opacity,
          }}
        />
        {labels.map((label, i) => (
          <div
            key={label}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            className={`btn ${activeSection === sections[i] ? 'active' : ''}`}
            onClick={() => handleClick(sections[i])}
          >
            {label}
          </div>
        ))}
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .navbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    gap: 4px;
    background: rgba(16, 16, 16, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 40px;
    width: fit-content;
    white-space: nowrap;
  }

  .pill {
    position: absolute;
    height: calc(100% - 16px);
    background: #ffffff;
    border-radius: 20px;
    transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                width 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.2s ease;
    pointer-events: none;
    top: 8px;
    z-index: 0;
  }

  .btn {
    position: relative;
    z-index: 1;
    padding: 6px 18px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 20px;
    transition: color 0.2s ease;
    user-select: none;
  }

  .btn.active {
    color: #000000;
  }

  .btn:hover:not(.active) {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default Navbar;