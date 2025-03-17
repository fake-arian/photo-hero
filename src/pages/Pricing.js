import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck, FaTimes, FaPlus } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { PAYMENT_PLANS, ADDITIONAL_CREDITS } from '../config/paypal-config';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

// Styled components
const PricingContainer = styled.div`
  padding: 120px 2rem 5rem;
  background-color: var(--background-color);
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PricingTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--primary-color);
  }
`;

const PricingDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PricingCard = styled.div`
  background-color: var(--secondary-background);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: ${props => props.popular ? '2px solid var(--primary-color)' : '2px solid transparent'};
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.div`
  margin: 1.5rem 0;
  
  .price {
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  .period {
    font-size: 1rem;
    color: var(--text-secondary);
  }
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin: 2rem 0;
`;

const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  svg {
    margin-right: 0.5rem;
    color: ${props => props.included ? 'var(--success-color)' : 'var(--error-color)'};
  }
`;

const PlanButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background-color: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--text-color)'};
  border: ${props => props.primary ? 'none' : '1px solid var(--primary-color)'};
  
  &:hover {
    transform: translateY(-2px);
    background-color: ${props => props.primary ? 'var(--primary-dark)' : 'rgba(138, 43, 226, 0.1)'};
  }
`;

const AdditionalCreditsSection = styled.div`
  max-width: 800px;
  margin: 5rem auto 0;
`;

const AdditionalCreditsTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

const CreditsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const CreditCard = styled.div`
  background-color: var(--secondary-background);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CreditAmount = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const CreditPrice = styled.div`
  margin-bottom: 1.5rem;
  
  .price {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

function Pricing() {
  const { currentUser } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const handleSelectPlan = (planKey) => {
    setSelectedPlan(planKey);
    
    // If not logged in, redirect to login page
    if (!currentUser) {
      // In a real app, you would save the selected plan to localStorage or context
      // and then redirect to login
    }
  };
  
  return (
    <>
      <Navbar />
      <PricingContainer>
        <div className="container">
          <PricingHeader>
            <PricingTitle>Simple, <span>Flexible</span> Pricing</PricingTitle>
            <PricingDescription>
              Choose the plan that works best for you with our hybrid model. 
              Subscribe to a base plan and add more credits whenever you need them.
            </PricingDescription>
          </PricingHeader>
          
          <PricingGrid>
            {Object.entries(PAYMENT_PLANS).map(([key, plan]) => (
              <PricingCard key={key} popular={key === 'pro'}>
                {key === 'pro' && <PopularBadge>Most Popular</PopularBadge>}
                <PlanName>{plan.name}</PlanName>
                <p>{plan.credits} credits included</p>
                
                <PlanPrice>
                  <span className="price">${plan.price}</span>
                  <span className="period">/month</span>
                </PlanPrice>
                
                <PlanFeatures>
                  {plan.features.map((feature, index) => (
                    <PlanFeature key={index} included={true}>
                      <FaCheck /> {feature}
                    </PlanFeature>
                  ))}
                </PlanFeatures>
                
                {currentUser ? (
                  <PlanButton 
                    primary={true} 
                    onClick={() => handleSelectPlan(key)}
                  >
                    Subscribe Now
                  </PlanButton>
                ) : (
                  <PlanButton 
                    primary={true} 
                    as={Link} 
                    to={`/register?plan=${key}`}
                  >
                    Sign Up
                  </PlanButton>
                )}
              </PricingCard>
            ))}
          </PricingGrid>
          
          <AdditionalCreditsSection>
            <AdditionalCreditsTitle>Need More Credits?</AdditionalCreditsTitle>
            <CreditsCardsContainer>
              {ADDITIONAL_CREDITS.map((credit, index) => (
                <CreditCard key={index}>
                  <CreditAmount>
                    <FaPlus /> {credit.amount}
                  </CreditAmount>
                  <CreditPrice>
                    <span className="price">${credit.price}</span>
                  </CreditPrice>
                  {currentUser ? (
                    <PlanButton onClick={() => console.log(`Add ${credit.amount} credits`)}>
                      Add Credits
                    </PlanButton>
                  ) : (
                    <PlanButton as={Link} to="/login">
                      Sign In to Purchase
                    </PlanButton>
                  )}
                </CreditCard>
              ))}
            </CreditsCardsContainer>
          </AdditionalCreditsSection>
        </div>
      </PricingContainer>
    </>
  );
}

export default Pricing; 