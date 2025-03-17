import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #121212;
  color: #ffffff;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #bb86fc;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
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

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #bb86fc;
`;

const CardContent = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CardButton = styled(Button)`
  width: 100%;
`;

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <DashboardContainer>
      <Header>
        <Title>Dashboard</Title>
        <Button onClick={handleLogout}>Log Out</Button>
      </Header>
      {error && <p>{error}</p>}
      <p>Welcome, {currentUser.email}</p>
      <Content>
        <Card>
          <CardTitle>Generate AI Photos</CardTitle>
          <CardContent>
            Create stunning AI-generated photos with our advanced models. Customize styles, subjects, and more.
          </CardContent>
          <CardButton>Start Creating</CardButton>
        </Card>
        <Card>
          <CardTitle>Generate AI Videos</CardTitle>
          <CardContent>
            Transform your ideas into captivating videos with our AI video generation tools.
          </CardContent>
          <CardButton>Start Creating</CardButton>
        </Card>
        <Card>
          <CardTitle>Your Gallery</CardTitle>
          <CardContent>
            View and manage all your previously generated photos and videos.
          </CardContent>
          <CardButton>View Gallery</CardButton>
        </Card>
      </Content>
    </DashboardContainer>
  );
}

export default Dashboard; 