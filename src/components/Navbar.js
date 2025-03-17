import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(18, 18, 18, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none'};
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: var(--primary-color);
  }

  span {
    color: var(--primary-color);
    margin-left: 0.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: var(--background-color);
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const AuthButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-left: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 0;
    width: 100%;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  // Handle menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <NavContainer scrolled={scrolled}>
      <Logo to="/">
        Photo<span>Hero</span>
      </Logo>

      <MenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <NavLinks isOpen={isOpen}>
        <NavLink to="/" active={location.pathname === '/'}>
          Home
        </NavLink>
        <NavLink to="/photos-demo" active={location.pathname === '/photos-demo'}>
          Photos
        </NavLink>
        <NavLink to="/videos-demo" active={location.pathname === '/videos-demo'}>
          Videos
        </NavLink>
        <NavLink to="/pricing" active={location.pathname === '/pricing'}>
          Pricing
        </NavLink>
        {currentUser ? (
          <>
            <NavLink to="/dashboard" active={location.pathname === '/dashboard'}>
              Dashboard
            </NavLink>
            <AuthButton as="button" onClick={handleLogout}>
              Sign Out
            </AuthButton>
          </>
        ) : (
          <AuthButton to="/login">
            Sign In
          </AuthButton>
        )}
      </NavLinks>
    </NavContainer>
  );
}

export default Navbar; 