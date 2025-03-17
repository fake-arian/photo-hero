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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ImageCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.div`
  height: 250px;
  background-color: #2c2c2c;
  background-image: ${props => props.src ? `url(${props.src})` : 'none'};
  background-size: cover;
  background-position: center;
`;

const ImageInfo = styled.div`
  padding: 1rem;
  background-color: #1e1e1e;
`;

const ImageTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #bb86fc;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #bbbbbb;
`;

// Sample image data (in a real app, this would come from an API)
const demoImages = [
  {
    id: 1,
    title: 'Portrait in Renaissance Style',
    description: 'AI-generated portrait with Renaissance painting aesthetics',
    // Placeholder colors instead of actual images
    color: '#3a506b'
  },
  {
    id: 2,
    title: 'Futuristic Cityscape',
    description: 'Neon-lit cyberpunk city with flying vehicles',
    color: '#1c2541'
  },
  {
    id: 3,
    title: 'Fantasy Landscape',
    description: 'Magical forest with glowing elements and mystical creatures',
    color: '#0b132b'
  },
  {
    id: 4,
    title: 'Abstract Composition',
    description: 'Colorful geometric shapes in a dynamic arrangement',
    color: '#5bc0be'
  },
  {
    id: 5,
    title: 'Wildlife Photography',
    description: 'Photorealistic AI-generated wildlife images',
    color: '#6fffe9'
  },
  {
    id: 6,
    title: 'Vintage Film Look',
    description: 'Photos with authentic vintage film grain and color grading',
    color: '#0b132b'
  }
];

function PhotosDemo() {
  return (
    <DemoContainer>
      <Header>
        <Title>AI Photo Gallery</Title>
        <StyledLink to="/pricing">
          <Button>Get Started</Button>
        </StyledLink>
      </Header>
      <p>
        Explore our AI-generated photo examples. These images showcase the capabilities
        of our advanced AI models. Sign up to create your own custom images!
      </p>
      <Gallery>
        {demoImages.map(image => (
          <ImageCard key={image.id}>
            <Image style={{ backgroundColor: image.color }} />
            <ImageInfo>
              <ImageTitle>{image.title}</ImageTitle>
              <Description>{image.description}</Description>
            </ImageInfo>
          </ImageCard>
        ))}
      </Gallery>
    </DemoContainer>
  );
}

export default PhotosDemo; 