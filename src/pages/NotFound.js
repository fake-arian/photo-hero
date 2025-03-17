import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
  color: #bb86fc;
  line-height: 1;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 2rem;
  color: #bb86fc;
`;

const Message = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #bb86fc;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a370f7;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Message>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </Message>
      <StyledLink to="/">
        <Button>Return to Home</Button>
      </StyledLink>
    </NotFoundContainer>
  );
}

export default NotFound; 