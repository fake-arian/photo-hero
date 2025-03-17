import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGoogle, FaEnvelope, FaArrowRight, FaImage, FaVideo } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

// Styled components
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.9)), 
              url('/images/hero-bg.jpg') no-repeat center center/cover;
  text-align: center;
  padding-top: 80px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #8A2BE2, #AA5DF9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    text-decoration: none;
  }
`;

const PrimaryCTA = styled(CTAButton)`
  background-color: var(--primary-color);
  color: white;
  
  &:hover {
    background-color: var(--primary-dark);
    color: white;
  }
`;

const SecondaryCTA = styled(CTAButton)`
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--primary-color);
  
  &:hover {
    background-color: rgba(138, 43, 226, 0.1);
    color: var(--primary-color);
  }
`;

const DemoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 500;
  margin-top: 1rem;
  
  svg {
    transition: transform 0.3s ease;
    margin-left: 0.5rem;
  }
  
  &:hover {
    text-decoration: none;
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--secondary-background);
`;

const FeatureTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  
  span {
    color: var(--primary-color);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(138, 43, 226, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
  }
`;

const FeatureName = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Footer = styled.footer`
  background-color: var(--background-color);
  padding: 2rem;
  text-align: center;
  color: var(--text-secondary);
`;

function Home() {
  const { currentUser } = useAuth();
  
  return (
    <>
      <Navbar />
      <HeroSection>
        <HeroContent>
          <HeroTitle>AI-Powered Photo & Video Generation</HeroTitle>
          <HeroSubtitle>
            Create stunning, realistic photos and videos with the power of AI. 
            Perfect for designers, marketers, and creators.
          </HeroSubtitle>
          
          <CTAContainer>
            {currentUser ? (
              <PrimaryCTA to="/dashboard">
                Go to Dashboard
              </PrimaryCTA>
            ) : (
              <>
                <PrimaryCTA to="/register">
                  <FaEnvelope /> Sign Up with Email
                </PrimaryCTA>
                <SecondaryCTA to="/register?provider=google">
                  <FaGoogle /> Sign Up with Google
                </SecondaryCTA>
              </>
            )}
          </CTAContainer>
          
          <DemoLink to="/photos-demo">
            Try Demo <FaArrowRight />
          </DemoLink>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <div className="container">
          <FeatureTitle>Why choose <span>Photo Hero</span>?</FeatureTitle>
          
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <FaImage />
              </FeatureIcon>
              <FeatureName>AI Photo Generation</FeatureName>
              <FeatureDescription>
                Create photorealistic images for any purpose with simple text prompts. 
                Our AI understands complex descriptions and produces stunning results.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaVideo />
              </FeatureIcon>
              <FeatureName>AI Video Creation</FeatureName>
              <FeatureDescription>
                Generate short videos with our advanced AI models. Perfect for marketing,
                social media content, or creative projects.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaArrowRight />
              </FeatureIcon>
              <FeatureName>Flexible Pricing</FeatureName>
              <FeatureDescription>
                Our hybrid subscription model gives you the flexibility to pay for what you need.
                Basic subscription with the option to purchase additional credits as needed.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </FeaturesSection>
      
      <Footer>
        <p>© {new Date().getFullYear()} Photo Hero. All rights reserved.</p>
      </Footer>
    </>
  );
}

export default Home; 