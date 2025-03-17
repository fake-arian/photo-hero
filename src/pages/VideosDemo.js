import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DemoContainer = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const VideoCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #1e1e1e;
`;

const VideoPlaceholder = styled.div`
  height: 200px;
  background-color: #2c2c2c;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(187, 134, 252, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #000000;
    margin-left: 5px;
  }
`;

const VideoInfo = styled.div`
  padding: 1.5rem;
`;

const VideoTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #bb86fc;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #bbbbbb;
  line-height: 1.6;
`;

// Sample video data (in a real app, this would come from an API)
const demoVideos = [
  {
    id: 1,
    title: 'Cinematic Landscape Flyover',
    description: 'AI-generated video of breathtaking natural landscapes with cinematic camera movements',
    color: '#3a506b'
  },
  {
    id: 2,
    title: 'Abstract Motion Graphics',
    description: 'Fluid abstract shapes and colors morphing in a mesmerizing dance',
    color: '#1c2541'
  },
  {
    id: 3,
    title: 'Urban Time-lapse',
    description: 'AI-generated time-lapse of a city transitioning from day to night',
    color: '#0b132b'
  },
  {
    id: 4,
    title: 'Product Showcase',
    description: 'Professional product demonstration with dynamic camera angles',
    color: '#5bc0be'
  }
];

function VideosDemo() {
  return (
    <DemoContainer>
      <Header>
        <Title>AI Video Gallery</Title>
        <StyledLink to="/pricing">
          <Button>Get Started</Button>
        </StyledLink>
      </Header>
      <p>
        Explore our AI-generated video examples. These videos showcase the capabilities
        of our advanced AI models. Sign up to create your own custom videos!
      </p>
      <Gallery>
        {demoVideos.map(video => (
          <VideoCard key={video.id}>
            <VideoPlaceholder style={{ backgroundColor: video.color }}>
              <PlayButton />
            </VideoPlaceholder>
            <VideoInfo>
              <VideoTitle>{video.title}</VideoTitle>
              <Description>{video.description}</Description>
            </VideoInfo>
          </VideoCard>
        ))}
      </Gallery>
    </DemoContainer>
  );
}

export default VideosDemo; 